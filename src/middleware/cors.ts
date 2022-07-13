import { Context } from 'koa';

export const corsConfig = {
  origin: function (ctx: Context) {
    return '*';
  },
  maxAge: 5 * 24 * 60 * 60, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Authorization'] //设置获取其他自定义字段
};
