
const conn = require('../utils/Model')



//引入mysql，准备sql查询eamil语句
exports.login = (email,callback)=>{
    //准备sql查询eamil语句
    let sql = `SELECT * FROM users WHERE email = "${email}"`;
    //执行语句
    conn.query(sql,(err,results)=>{
        if(err) {
            callback(err)
        }else{
            callback(null,results[0]);
        }
    });
};