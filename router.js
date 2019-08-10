

const pageconterollers = require('./controllers/pageconterollers.js')
const usersConterollers = require('./controllers/userConterollers')
const Postoconterollers = require('./controllers/Postoconterollers')
const cateConterollers = require('./controllers/cateConterollers')
const uploadFileConterollers = require('./controllers/uploadFileConterollers')
const express =  require('express');

const router = express.Router();

//处理主页面
router.get('/index',pageconterollers.getIndexPage)
      .get('/detail',pageconterollers.getDetailPage)
      .get('/list',pageconterollers.getListPage)
//处理后台页面
    .get('/admin/',pageconterollers.getAdminIndex)
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
    .post('/login',usersConterollers.login)
//添加显示文章页面
    .get('/getAllPost',Postoconterollers.getAllPost)
//处理数据筛选的请求
    .get('/getAllCate',cateConterollers.getAllCate)
//处理文章添加图片预览的请求
    .post('/uploadFile',uploadFileConterollers.uploadFile)
//处理富文本框的请求
    .post('/addPosd',Postoconterollers.addPosd)

    
//处理根据id查询文章请求
    .get('/getPostById',Postoconterollers.getPostById)
//处理文章编辑的操作请求
    .post('/editPostById',Postoconterollers.editPostById)
//处理删除请求
    .get('/delPostById',Postoconterollers.delPostById)
//暴露
module.exports = router;