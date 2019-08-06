

const conn = require('../utils/Model')

//准备方法
exports.getAllPost = (obj, callback) => {
    //准备sql语句
    let sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id
                order by id desc
                limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;

    //执行sql语句
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null, results)
        }
    });
};