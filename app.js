

//搭建服务器,下载第三方模块
const bodyParser = require('body-parser')
const express = require('express');
const router = require('./router')

const app = express();

app.listen(8080,()=>{
    console.log('127.0.0.1:8080')
});

app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//引用body-parser模块
app.use(bodyParser.urlencoded({express : false}));

app.set('view engine','ejs');

app.use(router);
