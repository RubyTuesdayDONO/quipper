/* hide connect logging
https://www.npmjs.com/package/lite-server
*/

module.exports = {
  server: {
    middleware: {
      0: null     // removes default `connect-logger` middleware
    }
  }
};
