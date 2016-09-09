import mongoAdapter from 'sails-mongo';

const config = {
  env: 'production',
  bundle: 'main.bundle.js',
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
