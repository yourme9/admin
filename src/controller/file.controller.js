const { createAvatar } = require('../service/file.service')

class Filecontroller {
  async saveAvatarInfo(ctx,next){
    const {filename,mimetype,size} = ctx.req.file
    const {id} = ctx.user
    
    const result = await createAvatar(filename,mimetype,size,id)
    
    ctx.body = result
  }
}



module.exports = new Filecontroller()