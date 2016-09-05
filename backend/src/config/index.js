import devConfig from 'src/config/development.config';
import prodConfig from 'src/config/production.config';

export default process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
