const router = require('koa-router')();

router.get('/index', async ctx => {
  await ctx.render('index',{
    title: "23"
  })
})

module.exports = router