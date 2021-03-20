const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const secret = require("../../secrets");

const dbName = pkg.name;
const conn = secret.dbconnection;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://${conn}@localhost:5432/${dbName}`,
  {
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
  }
);

module.exports = db;
