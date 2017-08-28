const path = require('path')

const COMPONENT_TYPE = {
  STATELESS: 'Stateless Component',
  PURE: 'Pure Component',
  STATEFUL: 'Stateful Component',
}

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: COMPONENT_TYPE.STATEFUL,
      choices: () => [COMPONENT_TYPE.STATEFUL, COMPONENT_TYPE.STATELESS, COMPONENT_TYPE.PURE]
    },
    {
      type: 'input',
      name: 'name',
      message: 'What do want to call this component?',
      // validate: function (value) {

      // }
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want to add messages?'
    }
  ],
  actions: function (data) {
    let template;
    switch (data.type) {
      case 'Stateless Component': {
        template = 'component.stateless.js.hbs'
        break;
      }
      case 'Pure Component': {
        template = 'component.pure.js.hbs'
        break;
      }
      case 'Stateful Component': {
        template = 'component.js.hbs'
        break;
      }
      default: {
        template = 'component.stateless.js.hbs'
      }
    }
    template = path.join(__dirname, template)
    const pathToFile = path.join(process.cwd(), 'components/{{properCase name}}/index.js')

    const actions = [{
      type: 'add',
      path: pathToFile,
      templateFile: template,
      abortOnFail: true
    }];

    return actions
  }
}
