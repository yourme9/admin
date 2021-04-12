const router = require('koa-router');

const { verifyLoginsus } = require('../middleware/login.middleware');
const { create } = require('../controller/moment.controller')

const momentRouter = new router({prefix:'/moment'})

momentRouter.post('/',verifyLoginsus,create)


module.exports = momentRouter