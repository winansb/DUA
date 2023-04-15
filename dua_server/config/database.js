const Sequelize = require("sequelize"); // Object Relational Mapping for sqlite!

module.exports = new Sequelize("Trial_Data", "Reed_Lab", "pass", {
  //important settings for ORM
  host: "localhost",
  dialect: "sqlite",

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },

  storage: "./db/Trial_Data.db",
});
