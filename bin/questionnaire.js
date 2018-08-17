#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const readline = require('readline');
const TEMPLATES = require('./template');

module.exports = function(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  Object.keys(TEMPLATES).forEach(function(key) {
    const item = TEMPLATES[key];
    console.log(chalk.cyan(`${item.id} - ${item.name}`));
  });

  rl.question('Please choose template: ', function(selectedIndex) {
    console.log(`You entered ${selectedIndex}`);
    callback(selectedIndex);
    rl.close();
  });
};
