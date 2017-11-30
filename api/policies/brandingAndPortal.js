module.exports = function(req, res, next) {
  var branding = req.param('branding');
  var portal = req.param('portal');
  if(req.options.locals == null) {
    req.options.locals = {};
  }
  if (branding != null && req.options.locals.branding == null) {
    req.options.locals.branding = branding;
    // store in session too, in the case of AAF postback..
    req.session.branding = branding;
    let defaultBrandName = sails.config.auth.defaultBrand;
    let defaultFormName = sails.config.form.defaultForm;
    let formName = defaultFormName.replace(defaultBrandName, branding);
    req.session.brandform = formName;
  }
  if (portal != null && req.options.locals.portal == null ){
    req.options.locals.portal = portal;
    req.session.portal = portal;
  }

  return next();
};
