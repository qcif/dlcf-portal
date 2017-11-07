declare var module;
declare var sails;
import { Observable } from 'rxjs/Rx';
import { Model, Sails } from "sails";
declare var BrandingConfig, User, Role: Model;
declare var RolesService, BrandingService, UsersService;

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
        "roles": ["Admin","Maintainer","Researcher","Guest"]
      }
     *
     * @param req
     * @param res
     */
    public createBranding(req, res) {

      let rolesObject = req.body.roles.map((role) => {
        return { "name": role };
      });
      let userObject = req.body.user
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
          if (userObject) {
            userObject.roles = rolesObject
            sails.log.debug(userObject)
            User.create(userObject).exec(function(err, brandUser) {
              if (err) {
                sails.log.error(`Error in creating user: ${brandUser}`);
                sails.log.error(err);
                return res.status(400).send({
                  message: err
                });
              } else {
                sails.log.info(`Created new user: ${brandUser}`)
                sails.log.debug(brandUser)
              }
            });
          }
          User.findOne({ username: 'admin' }).exec(function(err, user) {
            if (err) {
              sails.log.error('Error in finding user');
              sails.log.error(err);
              return res.status(400).send({
                message: err
              });
            } else {
              sails.log.debug(brandingConfig.name);
              BrandingConfig.findOne({ name: brandingConfig.name }).populate('roles').exec(function(err, branding) {
                if (err) {
                  sails.log.error("Failed to find brand after brand insert");
                  sails.log.error(error);
                  return res.status(400).send({
                    message: err
                  });
                } else {
                  sails.log.debug(branding)
                  let roleIds = branding.roles.map(role => {
                    return role.id;
                  })
                  UsersService.addUserRoles(user.id, roleIds).subscribe(function(userForRole) {
                    return res.status(200).send({
                      message: "Saved OK."
                    });
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
