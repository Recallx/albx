
const cateModel = require('../model/cateModel');
//这个控制器，处理数据筛选。

exports.getAllcata = (req,res)=>{
    cateModel.getAllcate((err,data)=>{
        if(err){
            res.json({code:400,msg:'筛选失败'})
        }else{
            res.json({code:200,msg:'筛选成功',data:data})
        }
    })
}