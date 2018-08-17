# {{project_name}}

# Required

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

Then open: [http://localhost:8080](http://localhost:8080)

# Test Staging

**npm**
```bash
npm start:staging
```

**yarn**
```bash
yarn start:staging
```

Then open: [http://localhost:8080](http://localhost:8080)

# Test Production

Run commands with order

**npm**
```bash
npm start:production
```

**yarn**
```bash
yarn start:production
```

Then open: [http://localhost:8080](http://localhost:8080)

# Test Docker

If you don't have Docker installed on your machine. You may want to check out [Docker](https://www.docker.com/).

```bash
docker build .
```

**staging**
```bash
docker run -e NODE_ENV=production -e ENV=staging -p 8080:8080 <IMAGE_ID>
```

**production**
```bash
docker run -e NODE_ENV=production -e ENV=production -p 8080:8080 <IMAGE_ID>
```

then open: [http://localhost:8080](http://localhost:8080)

# Technologies
 - [next.js](https://github.com/zeit/next.js/)
 - [Express](https://expressjs.com/)
 - [styled-components](https://www.styled-components.com/)
 - [react](https://facebook.github.io/react/)
 - [redux](http://redux.js.org/)
