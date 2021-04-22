const router = require('koa-router');

const { verifyLoginsus } = require('../middleware/login.middleware');
const { verifyPermission } = require('../middleware/moment.middleware');
const { create , query , update , remove } = require('../controller/moment.controller')

const momentRouter = new router({prefix:'/moment'})

momentRouter.post('/',verifyLoginsus,create)
momentRouter.get('/:momentId',query)
//修改
momentRouter.patch('/:momentId',verifyLoginsus,verifyPermission,update)
momentRouter.delete('/:momentId',verifyLoginsus,verifyPermission,remove)


module.exports = momentRouter