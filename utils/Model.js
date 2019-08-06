
const mysql = require('mysql')
//封装创建连接方法
let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port:3306,
    password:'root',
    database: 'baixiu',
    dateStrings : 'true'
});

module.exports=conn;