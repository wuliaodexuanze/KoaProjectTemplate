const Router = require('koa-router')

const router = new Router()

router.get('/blog', async (ctx) => {
  ctx.body = 'blog'
})

module.exports = router