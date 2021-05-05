const { create } = require('../service/user.service')
const { getAvatarByUserId } = require('../service/file.service')

const fs = require('fs');
class UserController {
  async create(ctx,next){
    //获取用户请求传递的参数
    const user = ctx.request.body;
    //查询数据
    const result = await create(user)
    //返回数据
    ctx.body = result
  }

  async avatarInfo(ctx,next){
    const {userId} = ctx.params
    const result = await getAvatarByUserId(userId)
    console.log(result);
    // 提供图像信息
    ctx.response.set('content-type',result.mimetype)
    ctx.body = fs.createReadStream('./uploads/avatar/'+`${result.filename}`)
    
  }
}

module.exports = new UserController()