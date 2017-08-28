const fs = require('fs')
const path = require('path')
const componentGenerator = require('./templates/component/index.js')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
