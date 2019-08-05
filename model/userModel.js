const mysql = require('mysql')

//创建连接
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port:3306,
    password:'root',
    database: 'baixiu'
});


//引入mysql，准备sql查询eamil语句
exports.login = (email,callback)=>{
    //准备sql查询eamil语句
    let sql = `SELECT * FROM users WHERE email = "${email}"`;
    //执行语句
    connection.query(sql,(err,results)=>{
        if(err) {
            callback(err)
        }else{
            callback(null,results[0]);
        }
    });
};