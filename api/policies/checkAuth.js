module.exports = function(req, res, next) {
  var brand = BrandingService.getBrand(req.session.branding);
  if (!brand) {
    // invalid brand
    return res.notFound({branding: sails.config.auth.defaultBrand, portal: sails.config.auth.defaultPortal});
  }
  var roles;
  // sails.log.error("User is....");
  // sails.log.error(req.user);
  if (req.isAuthenticated()) {
    roles = req.user.roles;
  } else {
    // assign default role if needed...
    roles = [];
    roles.push(RolesService.getDefUnathenticatedRole(brand));
  }
  // get the rules if any....
  var rules = PathRulesService.getRulesFromPath(req.path, brand);
  if (rules) {
    // populate variables if this user has a role that can read or write...
    // sails.log.error("Has rules for path:" + req.path);
    // sails.log.error(rules);
    var canRead = PathRulesService.canRead(rules, roles, brand.name);
    // TODO: add assertions...
    if (!canRead) {
      if (req.isAuthenticated()) {
        return res.forbidden();
      } else {
        return sails.controllers['typescript/user'].redirLogin(req, res);
      }
    }
  } else {
    sails.log.error("No rules for path:" + req.path);
  }
  // no rules can proceed...
  return next();
}
