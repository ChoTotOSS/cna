#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(appName) {
  const appDir = path.join(process.cwd(), appName);
  const pkgFileName = path.join(appDir, 'package.json');
  const data = require(pkgFileName);
  data.name = appName;

  fs.writeFile(pkgFileName, JSON.stringify(data, null, 2), 'utf8', function(
    err
  ) {
    if (err) throw err;
    console.log('Created package.json successfully!!! 🎉 🎉 🎉');
  });
};
