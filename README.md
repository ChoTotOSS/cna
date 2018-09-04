# CNA (create next.js app)
Create next.js web app based on [next.js](https://github.com/zeit/next.js/).

 - [Getting started](https://github.com/ChoTotOSS/cna#getting-started)
 - [User guide](https://learnnextjs.com/) - How to get start with next.js
 - [Examples of next.js](https://github.com/zeit/next.js/tree/master/examples) - Check out small examples of next.js

# Quick overview
```bash
npx cna new my-app
cd my-app
npm start
```

## Creating an App

You’ll need to have Node >= 6 on your machine. You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```bash
npx cna new my-app
```

### npm
```bash
npm i -g cna
cna new my-app
```

**web app's structure:**

```
my-app
├── app/
    └── assests/
    └── components/
    └── containers/
    └── hoc/
    └── middlewares/
    └── pages/
    └── static/
    └── utils/
    └── config.js
    └── next.config.js
    └── routes.js
    └── store.js
    └── reducer.js
    └── saga.js
├── .babelrc
├── .dockerignore
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── Dockerfile
├── index.js
├── package.json
├── README.md
├── server.js
```

# Generators
Provide commands to create new: page, container, component and HOC.

**Note:** You should stay at root directory of project and run commands.

## `cna new my-app`
To create new web application with name `my-app`

## `cna page`
To create new page. New page is located at `pages` directory.

## `cna container`
To create new container. New page is located at `containers` directory.

## `cna component`
To create new component. New page is located at `components` directory.

## `cna hoc`
To create new HOC. New page is located at `hocs` directory.

# Commands

## `npm start` or `yarn start`

Runs app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app will automatically reload when code changes.

## `npm run build` or `yarn run build`

Builds app in production mode.

It correctly bundles React in production mode and optimizes the build for the best performance.

## `npm run production` or `yarn run production`

Builds and runs app in production mode.

Now your app is ready to deploy.

# Demo
## Screenshot
![screen shot 2017-08-16 at 5 05 09 pm](https://user-images.githubusercontent.com/6290720/29358574-b8582fb8-82a5-11e7-9e67-1dd8ae45dc7b.png)

## iOS full screen
![aug-16-2017 17-04-40](https://user-images.githubusercontent.com/6290720/29358522-8a84a8fa-82a5-11e7-9a34-aaccef3a2912.gif)


# What's inside?

**Technologies**
 - [next.js](https://github.com/zeit/next.js/)
 - [Express](https://expressjs.com/)
 - [styled-components](https://www.styled-components.com/)
 - [react](https://facebook.github.io/react/)
 - [redux](http://redux.js.org/)
 
**Data source**
 - [Unofficial Hacker News API](https://github.com/cheeaun/node-hnapi) by cheeaun 

# Alternatives

If you don’t agree with the choices made in this project, you might want to explore alternatives with different tradeoffs.
Some of the more popular and actively maintained ones are:

* [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
* [insin/nwb](https://github.com/insin/nwb)
* [mozilla-neutrino/neutrino-dev](https://github.com/mozilla-neutrino/neutrino-dev)
* [jaredpalmer/razzle](https://github.com/jaredpalmer/razzle)
* [NYTimes/kyt](https://github.com/NYTimes/kyt)
* [gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby)
* [electrode-io/electrode](https://github.com/electrode-io/electrode)
* [enclave](https://github.com/eanplatter/enclave)
* [motion](https://github.com/steelbrain/pundle/tree/master/packages/motion)
* [quik](https://github.com/satya164/quik)
* [sagui](https://github.com/saguijs/sagui)
* [roc](https://github.com/rocjs/roc)
* [aik](https://github.com/d4rkr00t/aik)
* [react-app](https://github.com/kriasoft/react-app)
* [dev-toolkit](https://github.com/stoikerty/dev-toolkit)
* [sku](https://github.com/seek-oss/sku)
* [gluestick](https://github.com/TrueCar/gluestick)
* [create-next-app](https://github.com/segmentio/create-next-app)
