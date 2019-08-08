

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
            //这条sql语句，是获取表中的总记录数,conunt获取表总数，cnt是改掉里面的总数名称
            sql = `select count(*) as cnt 
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id`
            conn.query(sql, (err1, res2) => {
                if (err1) {
                    callback(err1)
                } else {
                    //需要返回查询到的数据，还有总记录数,有多个数据要返回，用对象包起来。
                    callback(null, { data: results, total: res2[0].cnt })
                }
            })
        }
    });
};