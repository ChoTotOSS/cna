#!/usr/bin/env node
'use sttrict'

const fs = require('fs')
const path = require('path')

module.exports = function(appName) {
  const data = require('./package.json')
  data.name = appName
  const appDir = path.join(process.cwd(), appName)
  const pkgFileName = path.join(appDir, 'package.json')

  fs.writeFile(pkgFileName, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) throw err
    console.log('Created package.json successfully')
  })
}
