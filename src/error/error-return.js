const errorType = require('./error-type')

const errorHander = (error,ctx)=>{
  let status,message;
  switch(error.message){
    case errorType.NAME_PASSWORD_EMPTY:
      status = 400
      message = '用户名或密码不能为空'
      break
    case errorType.NAME_HAVING:
      status = 409
      message = '用户名已经存在'
      break
    case errorType.NOTNAME_HAVING:
      status = 400
      message = '用户名不存在'
      break
    case errorType.PASSWORD_ERR:
      status = 400
      message = '密码输入错误'
      break
    case errorType.UNAUTHORIZATION:
      status = 401
      message = '无效的Token'
      break
    case errorType.UNPERMISSION:
      status = 401
      message = '不具备操作权限'
      break
    default:
      status = 404
      message = 'Not Found'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHander