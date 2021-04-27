const Router = require('koa-router');


const fileRouter = new Router({prefix:'/upload'})

const { verifyLoginsus } = require('../middleware/login.middleware');
const { anatarHandler } = require('../middleware/file.middleware');
const { saveAvatarInfo } = require('../controller/file.controller');



fileRouter.post('/avatar',verifyLoginsus,anatarHandler,saveAvatarInfo)

module.exports = fileRouter