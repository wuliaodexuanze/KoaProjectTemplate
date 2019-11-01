const Router = require('koa-router')

const router = new Router()

router.get('/user', async (ctx) => {
  ctx.body = 'user'
})

module.exports = router