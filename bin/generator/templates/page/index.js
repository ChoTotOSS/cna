const path = require('path');
const componentExists = require('../../../utils/componentExists');

const COMPONENT_TYPE = {
  STATELESS: 'Stateless Component',
  STATEFUL: 'Stateful Component'
};

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name: ',
      validate: function(componentName) {
        if (/.+/.test(componentName)) {
          return componentExists('pages', componentName)
            ? 'A page with this name already exists'
            : true;
        }
        return 'The name is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantRedux',
      default: true,
      message: 'Do you want to add redux?'
    }
  ],
  actions: function(data) {
    const pathToContainer = path.join(process.cwd(), 'pages');

    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, `${data.name.toLowerCase()}.js`),
        templateFile: path.join(__dirname, 'page.js.hbs'),
        abortOnFail: true
      }
    ];

    return actions;
  }
};
