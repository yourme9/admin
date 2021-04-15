const router = require('koa-router');

const { verifyLoginsus } = require('../middleware/login.middleware');
const { verifyPermission } = require('../middleware/moment.middleware');
const { create , query , update } = require('../controller/moment.controller')

const momentRouter = new router({prefix:'/moment'})

momentRouter.post('/',verifyLoginsus,create)
momentRouter.get('/:momentId',query)
//修改
momentRouter.patch('/:momentId',verifyLoginsus,verifyPermission,update)


module.exports = momentRouter