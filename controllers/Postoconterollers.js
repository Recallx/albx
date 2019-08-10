
const postModel = require('../model/postModel')
const moment = require('moment')
//这个控制器，操作文章页面的功能
exports.getAllPost = (req, res) => {
    //拿到get上来的数据
    let obj = req.query
    //引用方法
    postModel.getAllPost(obj, (err, data) => {
        //如果有错误就返回400
        if (err) {
            res.json({ code: 400, msg: '获取数据错误' })
        } else {
            for (let i = 0; i < data.length; i++) {
                //moment()如果没有传入参数就获取当前日期值进行转换，如果需要转换指定的日期，则需要传递参数
                // format()进行格式化，里面进行自定义的格式设置
                data[i].created = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss')

            }
            res.json({ code: 200, msg: '获取数据成功', data: data })
        }
    });
}

//处理富文本框的内容
exports.addPosd = (req, res) => {
    //拿到post上来的数据
    let obj = req.body;
    //要给views和likes设置默认值，还有拿到对应的user_id
    obj.id = null
    obj.views = 0;
    obj.likes = 0;
    obj.user_id = req.session.currenyUser.id
    // console.log(obj)
    postModel.addPosd(obj, (err) => {
        if (err) {
            console.log(err)
            res.json({ code: 400, msg: '新增数据失败' })
        } else {
            res.json({
                code: 200,
                msg: '新增数据成功'
            })
        }
    })
}

exports.getPostById = (req, res) => {
    //拿到id
    let id = req.query.id;
    //调用model方法
    postModel.getPostById(id, (err, data) => {
        if (err) {
            res.json({ code: 400, msg: '获取数据错误' })
        } else {
            //将日期数据格式化
            data.created = moment(data.created).format('YYYY-MM-DDTHH:mm')
            res.json({ code: 200, msg: '获取数据成功', data: data })
        }
    })
}


//处理编辑文章
exports.editPostById = (req,res)=>{
    //拿到post上来的数据
    let obj = req.body;
    //调用数据模块
    postModel.editPostById(obj,(err)=>{
        if(err){
            console.log(err)
            res.json({code:400,msg:'编辑文章失败'})
        }else{
            res.json({code:200,msg:'编辑文章成功'})
        }
    })
}

//处理删除文章
exports.delPostById = (req,res)=>{
    //拿到get上来的id
    let id = req.query.id
    //调用model
    postModel.delPostById(id,(err)=>{
        if(err){
            res.json({code:400,msg : '删除文章失败'})
        }else{
            res.json({code:200,msg:'删除文章成功'})
        }
    })
}

