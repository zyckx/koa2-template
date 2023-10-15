const router = require("koa-router")();
const User = require("../models/user");


router.prefix("/users");

// 创建用户
router.post("/", async (ctx) => {
	const { username, email } = ctx.request.body;
	const user = await User.create({
    username,
    email,
  });
  ctx.body = user;
});

// 获取用户
router.get("/:id", async (ctx) => {
	const userId = ctx.params.id;
	const user = await User.findByPk(userId);
	ctx.body = user;
});

// 更新用户
router.put("/:id", async (ctx) => {
	const userId = ctx.params.id;
	const { username, email } = ctx.request.body;
	const user = await User.findByPk(userId);
	user.username = username;
	user.email = email;
	await user.save();
	ctx.body = user;
});

// 删除用户
router.delete("/:id", async (ctx) => {
	const userId = ctx.params.id;
	const user = await User.findByPk(userId);
	await user.destroy();
	ctx.status = 204;
});
router.get("/", function (ctx, next) {
	ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
	ctx.body = "this is a users/bar response";
});

module.exports = router;
