const path = require('path')
const { spawn } = require('child_process')
const chalk = require('chalk')

module.exports = function (componentType) {
  const plop = path.join(__dirname, '../../node_modules/.bin/plop')
  const generator = path.join(__dirname, '../generator.js')

  const runPlop = spawn(plop, ['--plopfile', generator, componentType], {
    cwd: process.cwd(),
    stdio: 'inherit'
  })

  runPlop.on('exit', function () {
    console.log(chalk.cyan(`${componentType} has been added.`))
    process.exit(1)
  })
}
