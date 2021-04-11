const errorType = require('../error/error-type')
const { getUsername } = require('../service/user.service')
const  md5  = require('../util/md5')


const verifyUser =async (ctx,next)=>{
  //获取用户名密码
  const {name,password} = ctx.request.body
  //判断用户名密码是否为空
  if(!name || !password){
    const error = new Error(errorType.NAME_PASSWORD_EMPTY)
    return ctx.app.emit('error', error, ctx);
  }
  //判断用户名是否存在
  const result = await getUsername(name)
  if(result.length){
    const error = new Error(errorType.NAME_HAVING)
    return ctx.app.emit('error', error, ctx);
  }

  await next()
}

const cgpassword = async (ctx,next)=> {
  const {password} = ctx.request.body
  ctx.request.body.password= md5(password)

  await next()
}

module.exports = {verifyUser,cgpassword}