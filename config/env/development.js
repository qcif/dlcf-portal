/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  bootstrapTimeout: 480000,
  pubsub: {
    _hookTimeout: 480000,
  },
  log: {
    level: 'debug'
  },
  appUrl:'http://localhost:1500',
  db: {
    waitRetries: 5,
    waitSleep: 10000
  },
  auth: {
    // Default brand...
    default: {
      active: ["aaf", "local", "tuakiri"],
      aaf: {
        loginUrl: "https://rapid.test.aaf.edu.au/jwt/authnrequest/research/OTG8tPdB2H_aT0yZ4s63zQ",
        opts: {
          secretOrKey: 'Y30wY4xv1*6I7yUX%6v*Tzce8OEbVO&@R4hVb%2@Gehtx^xgOqQ97Slv!ZOkfHHmox&x0zAt*0o&4^8$9oW8WTf&r@&d31EFbQZr',
          jsonWebTokenOptions: {
            issuer: 'https://rapid.test.aaf.edu.au',
            audience: 'http://localhost:1500/default/rdmp/',
            ignoreNotBefore: true
          }
        }
      }
    },
    tuakiri: {
      loginUrl: "https://rapidconnect.staging.tuakiri.ac.nz/jwt/authnrequest/research/Y5o9OdPyYsIouATPDpvAEA",
      opts: {
        secretOrKey: 'wT+PAaZ3cF2ob+LRTBueMJ8Qsdu4CDxhKhWmlSCgHxwfTFkWX55x7ZJ2FNXk0Vut4a1Iid9B1CVd4qRWCeWOzhihoQR0JcojDm71z',
        jsonWebTokenOptions: {
          issuer: 'https://rapidconnect.staging.tuakiri.ac.nz',
          audience: 'http://localhost:1500/default/rdmp/',
          ignoreNotBefore: true
        }
      }
    }
  },
  redbox: {
    apiKey: '18f344b4-81a9-43b9-8916-4bbf339e8765'
  }
};
