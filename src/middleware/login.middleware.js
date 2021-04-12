const jwt = require('jsonwebtoken');

const errorType = require('../error/error-type')
const { getUsername } = require('../service/user.service')
const { PUBLIC_KEY } = require('../app/config')

const md5 = require('../util/md5')

const verifyLogin = async (ctx,next)=>{
  //获取用户名密码
  const {name,password} = ctx.request.body
  //判断用户名密码是否为空
  if(!name || !password){
    const error = new Error(errorType.NAME_PASSWORD_EMPTY)
    return ctx.app.emit('error', error, ctx);
  }
  //判断用户是否存在
  const result = await getUsername(name)
  const user = result[0]
  if(!user){
    const error = new Error(errorType.NOTNAME_HAVING)
    return ctx.app.emit('error', error, ctx);
  }
  //判断密码是否相同
  if(user.password !==md5(password)){
    const error = new Error(errorType.PASSWORD_ERR)
    return ctx.app.emit('error',error,ctx)
  }
  ctx.user = user
  await next()
}


const verifyLoginsus = async (ctx,next)=>{
  const authorization = ctx.headers.authorization;
  const token = authorization.replace('Bearer ','')
  
  try {
    const result = jwt.verify(token,PUBLIC_KEY,{
      algorithms:['RS256']
    })
    ctx.user = result
    await next()
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZATION)
    ctx.app.emit('error',error,ctx)
  }
}



module.exports = {verifyLogin,verifyLoginsus}