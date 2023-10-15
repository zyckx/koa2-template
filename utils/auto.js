// utils/mysql/sequelize-auto/auto.js
const SequelizeAuto = require("sequelize-auto");
const { host, user, password, database, dialect, port } =
	require("../config/default.js").database;
const options = {
	host,
	dialect,
	directory: "models/init_models", // 指定输出 models 文件的目录
	port,
	additional: {
		timestamps: false,
	},
};
const auto = new SequelizeAuto(database, user, password, options);

auto.run((err) => {
	if (err) throw err;
});
