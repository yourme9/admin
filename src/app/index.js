const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');

const userRouter = require('../router/user.router');
const loginRouter = require('../router/login.router');
const momentRouter = require('../router/moment.router');

const  errorHander = require('../error/error-return');



const app = new Koa()

app.use(bodyParser())
//用户登录注册接口
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())


//内容管理
app.use(momentRouter.routes())
app.use(momentRouter.allowedMethods())

app.on('error',errorHander)


module.exports = app