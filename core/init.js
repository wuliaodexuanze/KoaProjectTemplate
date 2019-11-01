const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadConfig()
  }

  /**
   * 读取app下api文件
   */
  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })

    // 回调函数，注册路由
    function whenLoadModule(router) {
      let route = (router instanceof Router) ? router : (router.router instanceof Router) ? router.router : ''
      if (route) {
        InitManager.app.use(route.routes())
      }
    }
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config'
    const config = require(configPath)
    global.config = config
  }
}

module.exports = InitManager