const componentGenerator = require('./templates/component/index.js');
const containerGenerator = require('./templates/container/index.js');
const pageGenerator = require('./templates/page/index.js');
const hocGenerator = require('./templates/hoc/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('hoc', hocGenerator);
};
