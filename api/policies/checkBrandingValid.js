module.exports = function(req, res, next) {
  // Checks the branding parameter, if it's not present in the availableBrandings array of the BrandingService return 404.
  var url = req.url;
  var splitUrl = url.split('/');
  if (splitUrl.length > 3) {
    var branding = splitUrl[1];
    var portal = splitUrl[2];
    if(_.includes(BrandingService.getAvailable(),branding)) {
      return next();
    } else {
      return res.notFound(req.options.locals, "404");
    }
  }
  return next();
};
