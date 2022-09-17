import App from '@/app';
import IndexRoute from '@routes/index.route';
import ShortLinkRoute from '@/routes/shortLink.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new ShortLinkRoute()]);

app.listen();
