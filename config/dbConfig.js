module.exports = {
	development: {
		username: "koa2",
		password: "koa2123",
		database: "koa2",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
