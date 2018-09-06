// Apply ES6 support to server side code
require('@babel/register')({
  presets: ['@babel/preset-env'],
});
require('./server');
