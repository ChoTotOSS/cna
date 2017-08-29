#!/usr/bin/env node
'use strict'

const commander = require('commander')
const chalk = require('chalk')
const path = require('path')
const semver = require('semver')
const { spawn } = require('child_process')

const packageJson = require('../package.json')
const getNpmVersion = require('../utils/npmVersion')
const shouldUseYarn = require('../utils/shouldUseYarn')
const install = require('./install')

let appName = undefined

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .option('-c, --component', 'Add component')
  .option('-ct, --container', 'Add container')
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    appName = name
  })
  .allowUnknownOption()
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`)
    console.log()
  })
  .parse(process.argv)

if (typeof appName === 'undefined') {
  console.error('Please specify the project directory:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`)
  console.log()
  console.log('For example:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`)
  console.log()
  console.log(`Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`)
  process.exit(1)
}

const useYarn = shouldUseYarn()

if (!useYarn) {
  const { hasMinNpm, npmVersion } = getNpmVersion()
  if (hasMinNpm) {
    console.log(
      chalk.yellow(
        `You are using npm ${npmVersion} so the project will be boostrapped with an old unsupported version of tools.\n\n` +
        `Please update to npm 3 or higher for a better, fully supported experience.\n`
      )
    )
  }
}

if (program.component) {
  const plop = path.join(__dirname, '../node_modules/.bin/plop')
  const generator = path.join(__dirname, '/generator.js')

  const install = spawn(plop, ['--plopfile', generator, 'component'], {
    cwd: process.cwd(),
    stdio: 'inherit'
  })

  install.on('exit', function () {
    console.log(chalk.cyan('Component has been added.'))
    process.exit(1)
  })
}

if (program.container) {
  const plop = path.join(__dirname, '../node_modules/.bin/plop')
  const generator = path.join(__dirname, '/generator.js')

  const install = spawn(plop, ['--plopfile', generator, 'container'], {
    cwd: process.cwd(),
    stdio: 'inherit'
  })

  install.on('exit', function () {
    console.log(chalk.cyan('Container has been added.'))
    process.exit(1)
  })
}

// install(useYarn)
