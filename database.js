const { Sequelize } = require("sequelize");

//creo la conexion a la DB
const sequelize = new Sequelize("proyecto final", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
