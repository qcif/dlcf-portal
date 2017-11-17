declare var module;
declare var sails;
import { Observable } from 'rxjs/Rx';
import { Model, Sails } from "sails";
declare var BrandingConfig, User, Role, PathRule: Model;
declare var RolesService, BrandingService, UsersService, PathRulesService;

import skipperGridFs = require('skipper-gridfs');
import controller = require('../../../typescript/controllers/CoreController.js');
/**
 * Package that contains all Controllers.
 */
export module Controllers {
  export class Branding extends controller.Controllers.Core.Controller {
    private blobAdapter = skipperGridFs({
      host: 'mongodb',
      port: 27017,
      user: '',
      password: '',
      dbname: 'rds-dlcf-portal'
    });
    /**
     * Exported methods, accessible from internet.
     */
    protected _exportedMethods: any = [
      'renderCss',
      'renderImage',
      'createBranding'
    ];

    /**
     **************************************************************************************************
     **************************************** Override default methods ********************************
     **************************************************************************************************
     */


    /**
     **************************************************************************************************
     **************************************** Add custom methods **************************************
     **************************************************************************************************
     */

    /**
     * Creates a new branding
     * This will also add the roles to the admin user by default
     * e.g, {
        "name": "test1",
        "css": ".site-branding-area h1 {color: blue;}",
        "roles": ["Admin","Maintainer","Researcher","Guest"],
        "user": "test"
      }
     *
     * @param req
     * @param res
     */
    public createBranding(req, res) {
      let rolesObject = req.body.roles.map((role) => {
        return { "name": role };
      });
      BrandingConfig.create({
        "name": req.body.name,
        "css": req.body.css,
        "roles": rolesObject
      }).exec(function(err, brandingConfig) {
        if (err) {
          sails.log.error("There was a problem with branding config.");
          sails.log.error(err);
          return res.status(400).send({
            message: err
          });
        } else {
          sails.log.debug(brandingConfig);
          BrandingConfig.findOne({ name: brandingConfig.name }).populate('roles').exec(function(err, branding) {
            if (err) {
              sails.log.error("Failed to find brand after brand insert");
              sails.log.error(error);
              return res.status(400).send({
                message: err
              });
            } else {
              sails.log.debug(branding)
              // update local admin user with new roles/brand
              let usernames = ['admin']
              if (req.body.user) {
                usernames.push(req.body.user)
              }
              sails.log.debug(`usernames to find are: ${usernames}`)
              let roleIds = branding.roles.map(role => {
                return role.id;
              })
              UsersService.addRolesForEachUser(usernames, roleIds).subscribe(function(usersForRoles) {
                sails.log.debug(`counted users updated: ${usersForRoles.length}`)
                BrandingService.loadAvailableBrands().subscribe(function(brandings) {
                  let errorMessage = "There was a problem updating path rules from brand.";
                  PathRulesService.updateBrandPath(req.body.name).subscribe(function(pathRulesCreated) {
                    sails.log.debug(`number of path rules created: ${pathRulesCreated.length}`)
                    return res.status(200).send({
                      message: "Saved OK.",
                      "number of users updated": usersForRoles.length,
                      "number of brand paths created": pathRulesCreated.length
                    });
                  }, function(error) {
                    sails.log.error(error);
                    return res.status(400).send({
                      message: error
                    });
                  });
                }, function(error) {
                  sails.log.error(error);
                  return res.status(400).send({
                    message: error
                  });
                })

              }, function(error) {
                sails.log.error(error);
                return res.status(400).send({
                  message: error
                });
              });
            }
          }, function(error) {
            sails.log.error("Failed to update user roles:");
            sails.log.error(error);
            return res.status(500).send({
              message: err
            });
          });
        }
      });
    }

    /**
     * Checks the mongodb for configured CSS for the branding
     * If none is present, it returns the default empty CSS.
     *
     * @param req
     * @param res
     */
    public renderCss(req, res) {
      BrandingConfig.findOne({
        "name": req.param('branding')
      }).exec(function(err, theme) {
        res.set('Content-Type', 'text/css');
        if (theme != null) {
          return res.send(theme['css']);
        } else {
          return res.send("/* Using the default theme */");
        }
      });
    }

    /**
     * Checks the mongodb for configured CSS for the branding
     * If none is present, it returns the default empty CSS.
     *
     * @param req
     * @param res
     */
    public renderImage(req, res) {
      var fd = req.param("branding") + "/logo.png"; // Branding parameter comes from routes.js
      this.blobAdapter.read(fd, function(error, file) {
        if (error) {
          res.sendfile(sails.config.appPath + "/assets/images/logo.png");
        } else {
          res.contentType('image/png');
          res.send(new Buffer(file));
        }
      });
    }

    /**
     **************************************************************************************************
     **************************************** Override magic methods **********************************
     **************************************************************************************************
     */
  }
}

module.exports = new Controllers.Branding().exports();
