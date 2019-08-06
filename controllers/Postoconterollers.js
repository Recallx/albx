
const postModel = require('../model/postModel')
const moment = require('moment')
//这个控制器，操作文章页面的功能
exports.getAllPost = (req,res)=>{
    //拿到get上来的数据
    let obj = req.query
    //引用方法
    postModel.getAllPost(obj,(err,data)=>{
        //如果有错误就返回400
        if(err){
            res.json({code:400,msg:'获取数据错误'})
        }else{
            for(let i =0; i < data.length; i++){
                //moment()如果没有传入参数就获取当前日期值进行转换，如果需要转换指定的日期，则需要传递参数
                // format()进行格式化，里面进行自定义的格式设置
                data[i].created = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss')

            }
            res.json({code:200,msg:'获取数据成功',data:data})
        }
    });
}
