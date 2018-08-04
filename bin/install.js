#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');
const createPackageJson = require('./create-pkg');
const createDockerfile = require('./create-dockerfile');
const createReadMe = require('./create-readme');

module.exports = function(userYarn) {
  const appName = process.argv[3];

  const pathName = path.join(process.cwd(), appName);
  const appNameExists = fs.existsSync(pathName);
  const templatesPath = path.join(__dirname, '..', 'templates/basic');

  if (!appNameExists) {
    fs.ensureDirSync(pathName);
    fs.copySync(templatesPath, pathName);

    createPackageJson(appName);
    createDockerfile(appName);
    createReadMe(appName);

    const packageManager = userYarn ? 'yarn' : 'npm';

    const install = spawn(packageManager, ['install'], {
      cwd: pathName,
      stdio: 'inherit',
    });
    install.on('exit', code => {
      console.log(chalk.cyan('Completed setting up project!!! 🎊 🎉'));
      process.exit(code);
    });
  } else {
    console.log(chalk.red('Project name is already existed. 😕 😕 😕'));
  }
};
