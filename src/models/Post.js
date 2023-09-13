const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const postModel = sequelize.define("post", {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  content: DataTypes.TEXT,
  image: DataTypes.STRING
});

module.exports = { postModel };
