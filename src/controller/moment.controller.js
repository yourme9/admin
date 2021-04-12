const { create } = require('../service/moment.service')

class momentController {
  async create(ctx,next){
    //获取数据
    const userId = ctx.user.id
    const {content} = ctx.request.body

    //存储数据
    const result = await create(userId,content)
    
    ctx.body = result

  }
}

module.exports = new momentController()