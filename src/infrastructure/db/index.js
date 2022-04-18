import Sequelize from "sequelize";

const seqInstance = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

export { seqInstance };
