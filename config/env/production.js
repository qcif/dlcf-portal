/**
 * Production environment settings
 *
 * This file can include shared settings for a production team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production       *
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
    level: 'info'
  },
  appUrl:'https://www.raportal.org.au/',
  db: {
    waitRetries: 5,
    waitSleep: 10000
  },
  auth: {
    // Default brand...
    default: {
      active: ["aaf", "local"],
      aaf: {
        loginUrl: process.env["aafLoginUrl"],
        opts: {
          secretOrKey: process.env["aafLoginUrl"],
          jsonWebTokenOptions: {
            issuer: 'https://rapid.aaf.edu.au',
            audience: 'https://www.raportal.org.au/default/rdmp/',
            ignoreNotBefore: true
          }
        }
      }
    }
  },
  redbox: {
    apiKey: process.env["redboxApiKey"]
  }
};
