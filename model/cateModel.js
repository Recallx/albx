
//引入mysql连接
const conn = require('../utils/Model')
//这个数据模块处理筛选
exports.getAllCate = (callback)=>{
    //准备sql语句
    let sql = `SELECT * FROM categories`;
    //执行sql语句
    conn.query(sql,(err,data)=>{
        if(err){
            callback(err);
        }else {
            callback(null,data);
        }
    })
}

//处理编辑的数据
exports.editPostById = (obj,callback)=>{
    console.log(obj)
    //准备编辑的sql语句
    let sql = `update categories set ? where id = ?`
    conn.query(sql,[obj,obj.id],(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

//处理删除数据
exports.delPostByIdcate = (id,callback)=>{
    //准备删除的sql语句
    let sql = `delete from categories where id = ?  `;
    conn.query(sql,[id],(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}