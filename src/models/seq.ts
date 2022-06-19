import { Sequelize } from "sequelize";
import { DB_CONFIG } from "../config/db";
// import models from "./models/index"; //利用中转站引入所有模型

const { database, username, password, host } = DB_CONFIG;
const seq = new Sequelize({
  dialect: "mysql",
  username,
  database,
  host,
  password,
  //   models: Object.values(models), //遍历注册所有模型
});

export default seq;
