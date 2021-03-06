const { create , query , update , remove } = require('../service/moment.service')

class momentController {
  async create(ctx,next){
    //获取数据
    const userId = ctx.user.id
    const {content} = ctx.request.body

    //存储数据
    const result = await create(userId,content)
    
    ctx.body = result

  }

  async query(ctx,next){
    const momentId = ctx.params.momentId
    const result = await query(momentId)
    ctx.body = result[0]
  }

  async update(ctx,next){
    const {momentId} = ctx.params
    const {content} = ctx.request.body
    const result = await update(content,momentId)

    ctx.body = result
  }

  async remove(ctx,next){
    const {momentId} = ctx.params
    const result = await remove(momentId)

    ctx.body = result
  }
}

module.exports = new momentController()