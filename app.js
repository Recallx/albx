

//搭建服务器,下载第三方模块
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express');
const router = require('./router')

const app = express();

app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888')
});

//注册express-session中间件
app.use(session(
    {
        //这是一个加密密钥，一般叫‘加盐’
        secret:'my_albx',
        //强制session保存到session store中,不管Session有没有更新，都强制保存
        resave:false,
        //强制没有‘初始化’的session保存到storage中
        saveUninitialized:false
    }
))

app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//引用body-parser模块
app.use(bodyParser.urlencoded({extended : false}));
//后期可能会用到json格式
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views', __dirname + "/views")
//注册导航守卫
app.use(function(req,res,next){
    //判断三个页面不需要登录状态
    //有登录状态
    //登录页面
    //主页
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin')== -1){
        //如果有这三个页面，就继续访问
        next();
    }else{
        //否则就是没有,重定向访问的页面回登录页
        res.redirect('/admin/login')
    }
})


app.use(router);
