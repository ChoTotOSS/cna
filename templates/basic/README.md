# Hackernews

This page allow you to fetch data from api to get news from `Hackernews` using api service: [Unofficial Hacker News API](https://github.com/cheeaun/node-hnapi).

**Technologies**
 - [next.js](https://github.com/zeit/next.js/)
 - [Express](https://expressjs.com/)
 - [styled-components](https://www.styled-components.com/)
 - [react](https://facebook.github.io/react/)
 - [redux](http://redux.js.org/)
 
**Data source**
 - [Unofficial Hacker News API](https://github.com/cheeaun/node-hnapi) by cheeaun 
Basically, Next.JS allow you to use `style-jsx` package to develop CSS, but in the production mode, html is not minified. So that, gulp allow you to bundle final all scss into css.

## Require

To use **hot-code reloading**. You need `nodemon` package.

```bash
npm i -g nodemon
```

# development
**npm**
```bash
npm i
npm start
```

**yarn**
```bash
yarn install
yarn start
```

Then open [http://localhost:3000](http://localhost:3000)

# production
**npm**
```bash
npm i
npm run production
```

**yarn**
```bash
yarn install
yarn run production
```

Then open [http://localhost:3000](http://localhost:3000)
