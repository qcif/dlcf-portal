/**

Authentication and authorization configuration

*/
module.exports.auth = {
  // Bootstrap BEGIN
  // only used one-time for bootstrapping, not intended for long-term maintenance
  roles: [{
      name: 'Admin'
    },
    {
      name: 'Maintainer'
    },
    {
      name: 'Researcher'
    },
    {
      name: 'Guest'
    }
  ],
  // default rules for the default brand...
  rules: [{
      path: '/*/*/home',
      role: 'Guest',
      can_read: true
    },
    {
      path: '/*/*/admin(/*)',
      role: 'Admin',
      can_update: true
    },
    {
      path: '/*/*/record(/*)',
      role: 'Researcher',
      can_update: true
    },
    {
      path: '/*/*/recordmeta(/*)',
      role: 'Researcher',
      can_update: true
    },
    {
      path: '/*/*/vocab(/*)',
      role: 'Researcher',
      can_read: true
    },
    {
      path: '/*/*/dashboard',
      role: 'Researcher',
      can_update: true
    },
    {
      path: '/*/*/export(/*)',
      role: 'Admin',
      can_update: true
    },
    {
      path: '/*/*/asynch(/*)',
      role: 'Admin',
      can_update: true
    },
    {
      path: '/*/*/branding/create',
      role: 'Admin',
      can_update: true
    }
  ],
  // Bootstrap END
  defaultBrand: 'default',
  defaultPortal: 'rdmp',
  loginPath: 'user/login',
  hiddenRoles: [],
  postLogoutRedir: function(branding, portal) {
    return `/${branding}/${portal}/home`
  },
  // Brand-Portal Specific configuration
  default: {
    defaultRole: 'Guest', // default when unauthenticated
    // will be shown in the login page choices
    active: ['local', 'aaf', 'tuakiri'],
    local: {
      usernameField: 'username',
      passwordField: 'password',
      default: {
        adminUser: 'admin',
        adminPw: 'rbadmin'
      },
      templatePath: 'local.ejs',
      postLoginRedir: 'dashboard',
    },
    aaf: {
      defaultRole: 'Researcher',
      attributesField: 'https://aaf.edu.au/attributes',
      usernameField: 'sub',
      postLoginRedir: 'dashboard',
      opts: {
        jsonWebTokenOptions: {
          issuer: 'https://rapid.aaf.edu.au',
          ignoreNotBefore: true,
          clockTolerance: 120,
        },
        passReqToCallback: true
      },
      templatePath: 'aaf.ejs'
    },
    tuakiri: {
      defaultRole: 'Researcher',
      attributesField: 'https://aaf.edu.au/attributes',
      usernameField: 'sub',
      postLoginRedir: 'dashboard',
      loginUrl: "https://rapidconnect.staging.tuakiri.ac.nz/jwt/authnrequest/research/Y5o9OdPyYsIouATPDpvAEA",
      opts: {
        secretOrKey: 'wT+PAaZ3cF2ob+LRTBueMJ8Qsdu4CDxhKhWmlSCgHxwfTFkWX55x7ZJ2FNXk0Vut4a1Iid9B1CVd4qRWCeWOzhihoQR0JcojDm71z',
        jsonWebTokenOptions: {
          issuer: 'https://rapidconnect.staging.tuakiri.ac.nz',
          ignoreNotBefore: true,
          clockTolerance: 120,
        },
        passReqToCallback: true
      },
      templatePath: 'tuakiri.ejs'
    }
  }
};
