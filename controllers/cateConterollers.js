
const cateModel = require('../model/cateModel');
//这个控制器，处理数据筛选。

exports.getAllCate = (req, res) => {
    cateModel.getAllCate((err, data) => {
        if (err) {
            res.json({ code: 400, msg: '数据查询失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            })
        }
    })
}

exports.editPostById = (req, res) => {
    //拿到post上来的数据
    let obj = req.body;
    console.log(obj)
    cateModel.editPostById(obj, (err,data) => {
        if (err) {
            res.json({ code: 400, msg: '编辑目录失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据目录成功',
                data: data
            })
        }
    })
}

//添加删除方法
exports.delPostByIdcate = (req,res)=>{
    //拿到id
    let id = req.query.id;
    // console.log(id)
    //调用model
    cateModel.delPostByIdcate(id,(err)=>{
        if(err){
            res.json({code:400,msg:'删除数据失败'})
        }else{
            res.json({code:200,msg:'删除数据成功'})
        }
    })
}