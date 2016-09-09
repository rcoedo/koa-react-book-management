import configureStoreDev from 'app/config/configure-store-dev';
import configureStoreProd from 'app/config/configure-store-prod';

export default process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
