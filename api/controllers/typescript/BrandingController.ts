import controller = require('../../../typescript/controllers/CoreController.js');
import skipperGridFs = require('skipper-gridfs');
import { Model, Sails } from "sails";
import { Observable } from 'rxjs/Rx';


declare var sails: Sails;
declare var BrandingConfig, User, Role: Model;
declare var RolesService, BrandingService, UsersService;
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
     *
     * @param req
     * @param res
     */
    public createBranding(req, res) {
      let rolesObject = req.body.roles.map((role) => {
        return { "name": role };
      });
      console.log(rolesObject)
      BrandingConfig.create({
        "name": req.body.name,
        "css": req.body.css,
        "roles": rolesObject
      }).exec(function(err, brandingConfig) {
        if (err) {
          sails.log.error("There was a problem with branding config.")
          sails.log.error(err)
          return res.send(err);
        } else {
          sails.log.debug(brandingConfig)
          var brand = BrandingService.getBrand(brandingConfig.name)
          console.log(brand)
          User.findOne({ username: 'admin' }).exec(function(err, user) {
            if (err) {
              sails.log.error('Error in finding user')
              sails.log.error(err)
            } else {
              console.log(user)
              let roleIds = brand.roles.map(role => {
                return role.id
              })
              console.log(roleIds)
              UsersService.updateUserRoles(user.id, roleIds)
            }
          });
          return brandingConfig
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
