

const pageconterollers = require('./controllers/pageconterollers.js')
const usersConterollers = require('./controllers/userConterollers')
const express =  require('express');

const router = express.Router();

//处理主页面
router.get('/index',pageconterollers.getIndexPage)
      .get('/detail',pageconterollers.getDetailPage)
      .get('/list',pageconterollers.getListPage)
//处理后台页面
    .get('/admin',pageconterollers.getAdminIndex)
    .get('/admin/categories',pageconterollers.getCatergories)
    .get('/admin/comments',pageconterollers.getComments)
    .get('/admin/login',pageconterollers.getLogin)
    .get('/admin/nav-menus',pageconterollers.getNavmenus)
    .get('/admin/password-reset',pageconterollers.getPasswordReset)
    .get('/admin/post-add',pageconterollers.getPostAdd)
    .get('/admin/posts',pageconterollers.getPosts)
    .get('/admin/profile',pageconterollers.getProfile)
    .get('/admin/settings',pageconterollers.getSettings)
    .get('/admin/slides',pageconterollers.getSlides)
    .get('/admin/users',pageconterollers.getUsers)


//处理登录页面请求
    .post('/index.html',usersConterollers.login)
//暴露
module.exports = router;