const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db/sequelize");

const User = sequelize.define("User", {
	username: DataTypes.STRING,
	email: DataTypes.STRING,
});
(async () => {
	await sequelize.sync({ force: true });
})();

module.exports = User;
