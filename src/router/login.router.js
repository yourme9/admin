const router = require('Koa-router');

const loginRouter = new router()

const { login,success } = require('../controller/login.controller')
const { verifyLogin,verifyLoginsus }  = require('../middleware/login.middleware')


//用户登录接口
loginRouter.post('/login',verifyLogin,login)
loginRouter.get('/test',verifyLoginsus,success)

module.exports = loginRouter