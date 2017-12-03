// Copyright (c) 2017 Queensland Cyber Infrastructure Foundation (http://www.qcif.edu.au/)
//
// GNU GENERAL PUBLIC LICENSE
//    Version 2, June 1991
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

import { Observable } from 'rxjs/Rx';
import services = require('../../typescript/services/CoreService.js');
import { Sails, Model } from "sails";
import UrlPattern = require('url-pattern');

declare var sails: Sails;
declare var PathRule: Model;
declare var RolesService, BrandingService;
declare var _this;

export module Services {

  /**
   * Enforces authorization rules on paths...
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   *
   */
  export class PathRules extends services.Services.Core.Service {

    protected _exportedMethods: any = [
      'bootstrap',
      'getRulesFromPath',
      'canRead',
      'canWrite',
      'updateBrandPath',
      'loadRules'
    ]
    // compromising, will cache for speed...
    protected pathRules;
    protected rulePatterns;

    public bootstrap = (defUser, defRoles) => {
      sails.log.verbose("Bootstrapping path rules....");
      var defBrand = BrandingService.getDefault();
      return this.loadRules()
        .flatMap(rules => {
          if (!rules || rules.length == 0) {
            sails.log.verbose("Rules, don't exist, seeding...");
            var seedRules = sails.config.auth.rules;
            _.forEach(seedRules, (rule) => {
              var roleId = RolesService.getRoleWithName(defRoles, rule.role);
              rule.role = roleId;
              rule.branding = defBrand.id;
            });
            return Observable.from(seedRules)
              .flatMap(rule => {
                return super.getObservable(PathRule.create(rule));
              })
              .last()
              .flatMap(rule => {
                return this.loadRules();
              })
              .flatMap(rules => {
                return Observable.of(rules);
              });
          } else {
            sails.log.verbose("Rules exists.");
            return Observable.of(rules);
          }
        });
    }

    /**
    * Loads and caches rules...
    */
    public loadRules = () => {
      return super.getObservable(PathRule.find({}).populate('role').populate('branding'))
        .flatMap(rules => {
          this.pathRules = rules;
          this.rulePatterns = {};
          _.forEach(rules, (rule) => {
            if (this.rulePatterns[rule.path] == null) {
              this.rulePatterns[rule.path] = { pattern: new UrlPattern(rule.path), rules: [] }
            }
            this.rulePatterns[rule.path].rules.push(rule);
          });
          return Observable.of(this.pathRules);
        });
    }
    /**
    * Check path using cached rules...
    @return PathRule[]
    */
    public getRulesFromPath = (path, brand) => {
      var matchedRulePatterns = _.filter(this.rulePatterns, (rulePattern) => {
        var pattern = rulePattern.pattern;

        var matchCount = 0;
        // matching by path and brand, meaning only brand-specific rules apply
        if (pattern.match(path)) {
          _.forEach(rulePattern.rules, function(rule) {
            if(rule.branding.id == brand.id) {
              matchCount++;
            }
          });
          if(matchCount == 0) {
            return false;
          }
          return true;
        }

      });
      if (matchedRulePatterns && matchedRulePatterns.length > 0) {
        return _.pluck(matchedRulePatterns, 'rules');
      } else {
        return null;
      }
    }

    public canRead = (rules, roles, brandName) => {
      var matchRule = _.filter(rules, (brandingRules) => {

        // user must have this role, and at least can_read
        var userRole = _.find(roles, (role) => {
          // match by id and branding
          var matches = _.filter(brandingRules, function(rule) {
            return role.id == rule.role.id && rule.branding.name == brandName && (rule.can_read == true || rule.can_update == true);
          });
          return matches.length > 0;
        });
        return userRole != undefined ;
      });
      return matchRule.length > 0;
    }

    public canWrite = (rules, roles, brandName) => {
      return _.filter(rules, (brandingRules) => {
        var userRole = _.find(roles, (role) => {
          // match by id and branding
          var matches = _.filter(brandingRules, function(rule) {
            return role.id == rule.role.id && rule.branding.name == brandName &&  rule.can_update == true;
          });
          return matches.length > 0;
        });
        return userRole != undefined ;
      }).length > 0;
    }

    public updateBrandPath = (brandName) => {
      let brandingToUpdate = BrandingService.getBrand(brandName);
      return super.getObservable(PathRule.find({ branding: BrandingService.getDefault().id }).populate('role')).flatMap(pathrules => {
        sails.log.debug('brand to update...');
        sails.log.debug(brandingToUpdate);
        return _this.createPathRuleFromBrand(pathrules, brandingToUpdate);
      });
    }

    public createPathRuleFromBrand = (pathrules, brandingToUpdate) => {
      return Observable.forkJoin(
        pathrules.map(pathrule => {
          return this.createPathRule(pathrule, brandingToUpdate)
        }))
    }

    public createPathRule = (pathrule, brandingToUpdate) => {
      let brandRole = this.matchRoleToPathRoleByName(brandingToUpdate.roles, pathrule);
      sails.log.debug('received matching update brand role...');
      sails.log.debug(brandRole);
      return super.getObservable(PathRule.create(
        this.createPathRoleObject(pathrule, brandRole, brandingToUpdate)
      ));
    }

    public matchRoleToPathRoleByName = (roles, pathrule) => {
      return _.find(roles, br => {
        sails.log.debug(`path role name is ${pathrule.role.name}`);
        sails.log.debug(`brand role name is ${br.name}`);
        return br.name === pathrule.role.name;
      });
    }

    public createPathRoleObject = (pathrule, brandRole, brandingToUpdate) => {
      let object = { path: pathrule.path, role: brandRole.id, branding: brandingToUpdate.id }
      if (pathrule.can_update) {
        object.can_update = pathrule.can_update
      }
      if (pathrule.can_read) {
        object.can_read = pathrule.can_read
      }
      return object
    }
  }
}

module.exports = new Services.PathRules().exports();
