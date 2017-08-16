#!/usr/bin/env node
'use strict'

const commander = require('commander')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const semver = require('semver')
const { spawn, execSync } = require('child_process')
const packageJson = require('../package.json')

const install = require('./install')

let appName = undefined

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (e) {
    return false
  }
}

function checkNpmVersion() {
  let hasMinNpm = false
  let npmVersion = null
  try {
    npmVersion = execSync('npm --version').toString().trim()
    hasMinNpm = semver.gte(npmVersion, '3.0.0')
  } catch (err) {
    // ignore
  }
  return {
    hasMinNpm: hasMinNpm,
    npmVersion: npmVersion,
  }
}

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
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
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  )
  console.log()
  console.log('For example:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`)
  console.log()
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  )
  process.exit(1)
}

const useYarn = shouldUseYarn()
if (!useYarn) {
  const { hasMinNpm, npmVersion } = checkNpmVersion()
  if (hasMinNpm) {
    console.log(
      chalk.yellow(
        `You are using npm ${npmInfo.npmVersion} so the project will be boostrapped with an old unsupported version of tools.\n\n` +
        `Please update to npm 3 or higher for a better, fully supported experience.\n`
      )
    )
  }
}
install(useYarn)
