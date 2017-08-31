const fs = require('fs');
const path = require('path');

module.exports = function(type, componentName) {
  const listComponents = fs.readdirSync(path.join(process.cwd(), type))
  if (listComponents.indexOf(componentName) > -1) {
    return true;
  }
  return false;
};
