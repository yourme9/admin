const Router =  require('Koa-router')

const userRouter = new Router({prefix:'/users'})

const { create , avatarInfo} = require('../controller/user.controller')
const {verifyUser} = require('../middleware/user.middleware')
const {cgpassword} = require('../middleware/user.middleware')



//用户注册接口
userRouter.post('/',verifyUser,cgpassword,create)

//用户头像展示
userRouter.get('/:userId/avatar',avatarInfo)
module.exports = userRouter