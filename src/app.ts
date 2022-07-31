import Koa from 'Koa';
import router from './router';
import bodyparser from 'koa-bodyparser';
import Cors from 'koa2-cors';
import helmet from 'koa-helmet';
import { loggerMiddleware } from './middleware/logger';
import { corsConfig } from './middleware/cors';
import { error, success } from './middleware/response';
import { appConfig } from './config/env';

const app = new Koa();

app.use(loggerMiddleware);

app.use(error);

app.use(bodyparser());

app.use(helmet());

app.use(Cors(corsConfig));

app.use(router.routes());
app.use(router.allowedMethods());

app.use(success);

app.listen(appConfig.port, () => {
  console.log(`app start at port ${appConfig.port}`);
});
