
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