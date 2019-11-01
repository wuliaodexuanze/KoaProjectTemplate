require('module-alias/register')

const Koa = require('koa')
const koaBodyparser = require('koa-bodyparser')
const InitManager = require('./core/init')
const cateError = require('./middlewares/exception')

const app = new Koa()
app.use(cateError)
app.use(koaBodyparser())

InitManager.initCore(app)

app.listen(3000)
