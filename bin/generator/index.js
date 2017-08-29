const componentGenerator = require('./templates/component/index.js')
const containerGenerator = require('./templates/container/index.js')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
}
