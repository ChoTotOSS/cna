#!/usr/bin/env node
'use strict';

const commander = require('commander');
const chalk = require('chalk');
const readline = require('readline');
const { spawn } = require('child_process');

const packageJson = require('../package.json');
const getNpmVersion = require('./utils/npmVersion');
const shouldUseYarn = require('./utils/shouldUseYarn');
const generate = require('./utils/generate');
const install = require('./install');
const questionnaire = require('./questionnaire');

const program = new commander.Command(packageJson.name).version(
  packageJson.version
);

const COMMANDS = {
  new: 'new',
  component: 'component',
  container: 'container',
  hoc: 'hoc',
  page: 'page',
};

program
  .command(`${COMMANDS.new} [appName]`)
  .description('Create new nextjs app')

  .action(function(appName) {
    if (typeof appName === 'undefined') {
      console.error('Please specify the project directory:');
      console.log(
        `  ${chalk.cyan(program.name())} new ${chalk.green(
          '<project-directory>'
        )}`
      );
      console.log();
      console.log('For example:');
      console.log(
        `  ${chalk.cyan(program.name())} new ${chalk.green('my-react-app')}`
      );
      console.log();
      console.log(
        `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
      );
      process.exit(1);
    }

    const useYarn = shouldUseYarn();

    if (!useYarn) {
      const { hasMinNpm, npmVersion } = getNpmVersion();
      if (hasMinNpm) {
        console.log(
          chalk.yellow(
            `You are using npm ${npmVersion} so the project will be boostrapped with an old unsupported version of tools.\n\n` +
              `Please update to npm 3 or higher for a better, fully supported experience.\n`
          )
        );
      }
    }

    questionnaire(function(selectedIndex) {
      install(useYarn, selectedIndex);
    });
  })
  .allowUnknownOption()
  .on('--help', function() {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
  });

program
  .command(`${COMMANDS.component}`)
  .description('Add new component')
  .action(function() {
    generate('component');
  });

program
  .command(`${COMMANDS.container}`)
  .description('Add new container')
  .action(function() {
    generate('container');
  });

program
  .command(`${COMMANDS.hoc}`)
  .description('Add new HOC')
  .action(function() {
    generate('hoc');
  });

program
  .command(`${COMMANDS.page}`)
  .description('Add new Page')
  .action(function() {
    generate('page');
  });

program.parse(process.argv);

let invalid = false;
if (!process.argv[2]) {
  invalid = true;
} else {
  if (!COMMANDS[process.argv[2]]) {
    invalid = true;
  }
}

if (invalid) {
  spawn('cna', ['--help'], {
    cwd: process.cwd(),
    stdio: 'inherit',
  }).on('exit', function() {
    process.exit(1);
  });
}
