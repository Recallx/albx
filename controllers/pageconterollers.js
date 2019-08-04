
//约定好后台的页面开头要以admin

//处理返回页面
exports.getIndexPage = (req,res)=>{
    res.render('index.ejs')
};
exports.getDetailPage = (req,res)=>{
    res.render('detail.ejs')
};
exports.getListPage = (req,res)=>{
    res.render('list.ejs');
};

//后台页面
exports.getAdminIndex = (req,res)=>{
    res.render('admin/index.ejs');
};
exports.getCatergories = (req,res)=>{
    res.render('admin/categories.ejs')
};
exports.getComments = (req,res)=>{
    res.render('admin/comments.ejs')
};
exports.getLogin = (req,res)=>{
    res.render('admin/login.ejs')
};
exports.getNavmenus = (req,res)=>{
    res.render('admin/nav-menus.ejs')
};
exports.getPasswordReset = (req,res)=>{
    res.render('admin/password-reset.ejs')
};
exports.getPostAdd = (req,res)=>{
    res.render('admin/post-add.ejs')
};
exports.getPosts = (req,res)=>{
    res.render('admin/posts.ejs')
};
exports.getProfile = (req,res)=>{
    res.render('admin/profile.ejs')
};
exports.getSettings = (req,res)=>{
    res.render('admin/settings.ejs')
};
exports.getSlides = (req,res)=>{
    res.render('admin/slides.ejs')
};
exports.getUsers = (req,res)=>{
    res.render('admin/users.ejs')
};





//处理后台的页面
