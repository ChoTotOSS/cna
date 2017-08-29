const path = require('path')

module.exports = {
  description: 'Add a HOC (High Order Component)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'HOC name: ',
      // validate: function (value) {

      // }
    }
  ],
  actions: function (data) {
    const pathToContainer = path.join(process.cwd(), 'hocs')

    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, 'with{{properCase name}}.js'),
        templateFile: path.join(__dirname, 'hoc.js.hbs'),
        abortOnFail: true
      }
    ]

    return actions
  }
}
