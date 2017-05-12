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
import {Sails, Model} from "sails";

declare var sails: Sails;
declare var User, Role, BrandingConfig: Model;
declare var BrandingService, RolesService;
declare var _this;

export module Services {
  /**
   * Use services...
   *
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   * 
   */
  export class Users extends services.Services.Core.Service {

    protected _exportedMethods: any = [
      'bootstrap',
      'updateUserRoles',
      'getUserWithId'
    ];

    protected localAuthInit = () => {
      var usernameField = sails.config.auth.local.usernameField, passwordField = sails.config.auth.local.passwordField;
      //
      // --------- Passport --------------
      //
      sails.config.passport = require('passport')
      var LocalStrategy = require('passport-local').Strategy;
      var bcrypt = require('bcrypt');
      sails.config.passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      sails.config.passport.deserializeUser(function(id, done) {
        User.findOne({ id: id }).populate('roles').exec(function (err, user) {
            done(err, user);
        });
      });
      //
      //  Local Strategy
      //
      sails.config.passport.use(new LocalStrategy({
          usernameField: usernameField,
          passwordField: passwordField
        },
        function(username, password, done) {
          User.findOne({ username: username }).populate('roles').exec(function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username/password.' });
            }

            bcrypt.compare(password, user.password, function (err, res) {
                if (!res)
                  return done(null, false, {
                    message: 'Invalid username/password'
                  });
                return done(null, user, {
                  message: 'Logged In Successfully'
                });
              });
          });
        }
      ));
    }

    protected aafAuthInit = () => {
      //
      // JWT/AAF Strategy
      //
      var JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
      sails.config.auth.aaf.opts.jwtFromRequest = ExtractJwt.fromBodyField('assertion');

      sails.config.passport.use('aaf-jwt', new JwtStrategy(sails.config.auth.aaf.opts, function(req, jwt_payload, done) {
        var aafAttributes = sails.config.auth.aaf.attributesField;
        var brand = BrandingService.getBrand(req.session.branding);
        var aafDefRoles = _.map( RolesService.getNestedRoles(RolesService.getDefAuthenticatedRole(brand.roles).name, brand.roles), 'id');
        var aafUsernameField = sails.config.auth.aaf.usernameField;
        User.findOne({username: jwt_payload[aafUsernameField]}, function(err, user) {
          sails.log.verbose("At AAF Strategy verify, payload:");
          sails.log.verbose(jwt_payload);
          sails.log.verbose("User:");
          sails.log.verbose(user);
          sails.log.verbose("Error:");
          sails.log.verbose(err);
          if (err) {
            return done(err, false);
          }
          if (user) {
            done(null, user);
          } else {
            sails.log.verbose("At AAF Strategy verify, creating new user...");
            // first time login, create with default role
            var userToCreate = {
              username: jwt_payload[aafUsernameField],
              name: jwt_payload[aafAttributes].cn,
              email: jwt_payload[aafAttributes].mail,
              displayname: jwt_payload[aafAttributes].displayname,
              cn: jwt_payload[aafAttributes].cn,
              edupersonscopedaffiliation: jwt_payload[aafAttributes].edupersonscopedaffiliation,
              edupersontargetedid: jwt_payload[aafAttributes].edupersontargetedid,
              edupersonprincipalname: jwt_payload[aafAttributes].edupersonprincipalname,
              givenname: jwt_payload[aafAttributes].givenname,
              surname: jwt_payload[aafAttributes].surname,
              type: 'aaf',
              roles: aafDefRoles
            };
            sails.log.verbose(userToCreate);
            User.create(userToCreate).exec(function(err, newUser) {
              if (err) {
                sails.log.error("Error creating new user:");
                sails.log.error(err);
                return done(err, false);
              }

              sails.log.verbose("Done, returning new user:");
              sails.log.verbose(newUser);
              return done(null, newUser);
            });
          }
        });
      }));
    }

    protected initDefAdmin = (defRoles, defAdminRole) => {
      var usernameField = sails.config.auth.local.usernameField, passwordField = sails.config.auth.local.passwordField;
      var defaultUser = _.find(defAdminRole.users, (o) => {return o[usernameField] == sails.config.auth.local.default.adminUser});

      if (defaultUser == null) {
        defaultUser = {type:'local', name:'Local Admin'};
        defaultUser[usernameField] = sails.config.auth.local.default.adminUser;
        defaultUser[passwordField] = sails.config.auth.local.default.adminPw;
        sails.log.verbose("Default user missing, creating...");
        return super.getObservable(User.create(defaultUser))
                    .flatMap(defUser => {
                      _.map(defRoles, (o)=>{
                        defUser.roles.add(o.id);
                      });
                      return super.getObservable(defUser, 'save', 'simplecb')
                                  .flatMap(dUser => {
                                    return Observable.from(defRoles)
                                                      .map(role => {
                                                        role.users.add(defUser.id)
                                                        return super.getObservable(role, 'save', 'simplecb');
                                                      });
                                  })
                                  .last()
                                  .flatMap(lastRole => {
                                    return Observable.of({defUser: defUser, defRoles:defRoles});
                                   });
                    });
      } else {
        return Observable.of({defUser: defaultUser, defRoles:defRoles});
      }
    }

    /**
    @return Object {
          defUser: the default admin user
          defRoles: the default brand's roles
        }
    */
    public bootstrap = (defRoles) => {
      sails.log.verbose("Bootstrapping users....");
      // return Observable.of(defAdminRole);
      var usernameField = sails.config.auth.local.usernameField,
      passwordField = sails.config.auth.local.passwordField;
      var defAdminRole = RolesService.getAdminFromRoles(defRoles);
      return Observable.of(defAdminRole)
        .flatMap(defAdminRole => {
          _this.localAuthInit();
          _this.aafAuthInit();
          return _this.initDefAdmin(defRoles, defAdminRole);
      });
    }

    public getUserWithId = (userid) => {
      return _this.getObservable(User.findOne({id:userid}).populate('roles'));
    }

    public updateUserRoles = (userid, newRoleIds) => {
      return _this.getUserWithId(userid).flatMap(user=>{
        if (user) {
          if (_.isEmpty(newRoleIds) || newRoleIds.length == 0){
            return Observable.throw(new Error('Please assign at least one role'));
          }
          var curRoleIds = _.map(user.roles, 'id');
          _.map(newRoleIds, (roleId)=>{user.roles.add(roleId)});
          _.map(curRoleIds, (roleId)=>{if (!_.includes(newRoleIds, roleId)) user.roles.remove(roleId)});
          return _this.getObservable(user, 'save', 'simplecb');
        } else {
          return Observable.throw(new Error('No such user with id:' + userid));
        }
      });
    }

  }
}

module.exports = new Services.Users().exports();
