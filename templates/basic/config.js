const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    api: {
      hn: 'https://node-hnapi.herokuapp.com/news'
    }
  },
  production: {
    api: {
      hn: 'https://node-hnapi.herokuapp.com/news'
    }
  }
}[env]

export default config
