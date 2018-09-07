const env = (process.browser ? window.ENV : process.env.ENV) || 'development';
const development = require('./config.development');
const staging = require('./config.staging');
const production = require('./config.production');

const config = {
  ...development,
  ...staging,
  ...production,
}[env];

module.exports = {
  config,
  env,
};
