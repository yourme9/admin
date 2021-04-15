const {checkResource} = require('../service/auth.service');
const errorType = require('../error/error-type')
const verifyPermission = async (ctx,next)=>{
  const {momentId} = ctx.params
  const {id} = ctx.user
  const result = await checkResource(momentId,id)
  if(!result){
    const error = new Error(errorType.UNPERMISSION);
    ctx.app.emit('error',error,ctx)
  }else{
    await next()
  }
}



module.exports = {verifyPermission}