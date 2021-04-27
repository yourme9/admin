class File {
  async saveAvatarInfo(ctx,next){
    console.log(ctx.req.file);
    const { mimetype , originalname} = ctx.req.file
    console.log(mimetype);
    console.log(originalname);
  }
}



module.exports = new File()