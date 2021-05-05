const { createAvatar , createAvatarUrl} = require('../service/file.service')

class Filecontroller {
  async saveAvatarInfo(ctx,next){
    console.log(ctx.req.file);
    const {filename,mimetype,size} = ctx.req.file;
    const {id} = ctx.user
    
    //将图像信息保存到数据库 
    const result = await createAvatar(filename,mimetype,size,id)
    //将图像地址信息保存到user表中
    const avatarUrl = 'http://localhost:8888/uplods/avatar/'+`${filename}`
    await createAvatarUrl(avatarUrl,id)

    ctx.body = result
  }
}



module.exports = new Filecontroller()