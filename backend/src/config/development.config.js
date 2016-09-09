import mongoAdapter from 'sails-mongo';

const config = {
  env: 'development',
  bundle: 'http://localhost:4000/main.bundle.js',
  db: {
    adapters: { 'mongo': mongoAdapter },
    connections: {
      default: {
        adapter: 'mongo',
        host: 'db'
      }
    }
  }
};

export default config;
