module.exports.dynamicasset = {
  "systemjs-config.js": {
    view: "systemjs-config",
    type: "text/javascript"
  },
  "apiClientConfig.json": {
    view: "apiClientConfig",
    type: "application/json"
  },
  // Public node modules...
  node_modules: {
    copy: [
      "@angular",
      "rxjs",
      "zone.js",
      "core-js",
      "systemjs",
      "lodash-lib",
      "ng2-datetime",
      "bootstrap-datepicker",
      "bootstrap-timepicker",
      "moment",
      "moment-es6",
      "ng2-completer",
      "ngx-bootstrap"
    ],
    systemjs_map: {
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'npm:rxjs',
      'lodash-lib': 'npm:lodash-lib/index.js',
      'ng2-datetime/ng2-datetime': 'npm:ng2-datetime/ng2-datetime.js',
      'moment': 'npm:moment/moment.js',
      "moment-es6": 'npm:moment-es6/index.js',
      'ng2-completer': 'npm:ng2-completer/ng2-completer.umd.js',
      'ngx-bootstrap': 'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.js'
    }
  }
};
