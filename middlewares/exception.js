/*
 * @Description: 全局异常处理中间件 
 * @Author: wangyong 
 * @Date: 2019-11-01 10:42:43 
 * @Last Modified by: wangyong
 * @Last Modified time: 2019-11-01 14:46:34
 * @Email: 1169655050@qq.com 
 */

 const {
   HttpException
 } = require('../middlewares/exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // 生产环境让异常出现在控制台
    if (global.config.environment === 'dev') {
      throw err
    }

    const reqData = {
      msg: '服务器出现了错误 /(ㄒoㄒ)/~~',
      errorCode: 999,
      request: `${ctx.method} ${ctx.path}`
    }
    let statusCode = 500
    if (err instanceof HttpException) {
      reqData.msg = err.message
      reqData.errorCode = err.errorCode
      statusCode = err.code
    }

    ctx.body = reqData
    ctx.status = statusCode
  }
}

module.exports = catchError