const Multer = require('koa-multer')

const avatarUpload = Multer({
  dest:'./uploads/avatar'
})

const anatarHandler = avatarUpload.single('avatar')



module.exports = {anatarHandler}