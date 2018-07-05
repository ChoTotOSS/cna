const env = (process.browser ? window.ENV : process.env.ENV) || 'development';

const config = {
  development: {
    api: {
      hn: 'https://node-hnapi.herokuapp.com/news',
    },
  },
  staging: {
    api: {
      hn: 'https://node-hnapi.herokuapp.com/news',
    },
  },
  production: {
    api: {
      hn: 'https://node-hnapi.herokuapp.com/news',
    },
  },
}[env];

module.exports = {
  config,
  env,
};
