import Koa from "Koa";
import router from "./router";
import bodyparser from "koa-bodyparser";
import cors from "koa-cors";
import seq from "./models/seq";
import { appConfig } from "./config/env";

const app = new Koa();

app.use(bodyparser());

app.use(cors());

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = Number(new Date()) - Number(start);
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
(async function () {
  try {
    await seq.authenticate();
    await seq.sync();
  } catch (error) {
    console.log("连接失败:" + error);
  }
})();

app.use(router.routes());
app.use(router.allowedMethods());

app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

app.listen(appConfig.port, () => {
  console.log(`app start at port ${appConfig.port}`);
});
