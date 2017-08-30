const path = require('path');

const COMPONENT_TYPE = {
  STATELESS: 'Stateless Component',
  PURE: 'Pure Component',
  STATEFUL: 'Stateful Component'
};

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: COMPONENT_TYPE.STATELESS,
      choices: () => [
        COMPONENT_TYPE.STATELESS,
        COMPONENT_TYPE.STATEFUL,
        COMPONENT_TYPE.PURE
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: 'Page name: '
      // validate: function (value) {

      // }
    },
    {
      type: 'confirm',
      name: 'wantRedux',
      default: true,
      message: 'Do you want to add redux?'
    }
  ],
  actions: function(data) {
    const pathToContainer = path.join(process.cwd(), 'page');

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
