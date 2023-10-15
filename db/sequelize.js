const { Sequelize, Model } = require("sequelize");
const defaultConfig = require("../config/default.js");

// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize(
	defaultConfig.database.database,
	defaultConfig.database.user,
	defaultConfig.database.password,
	{
		host: defaultConfig.database.host,
		dialect: defaultConfig.database.type, // 数据库类型，这里是mysql
		pool: {
			max: 5, // 连接池中最大连接数量
			min: 0, // 连接池中最小连接数量
			idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
		},
	}
);

try {
	sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
