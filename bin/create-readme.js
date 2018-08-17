#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(appName) {
  const appDir = path.join(process.cwd(), appName);
  const dockerFileName = path.join(appDir, 'README.md');

  fs.readFile(dockerFileName, 'utf8', function(err, data) {
    if (err) throw err;
    const result = data.replace(/{{project_name}}/g, appName);
    const appDir = path.join(process.cwd(), appName);
    const pkgFileName = path.join(appDir, 'README.md');

    fs.writeFile(pkgFileName, result, 'utf8', function(err) {
      if (err) throw err;
      console.log('Created README.md successfully!!! 🎉 🎉 🎉');
    });
  });
};
