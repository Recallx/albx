

const conn = require('../utils/Model')

//准备方法
exports.getAllPost = (obj, callback) => {
    console.log(obj)
    //准备sql语句
    let sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id 
                where 1=1  `//这里使用恒成立，新方法，方便下面判断，直接用and连接起来就可以了。
            //判断页面的所有分类里面，用户有没有选择，如果选择了
            if(obj.cate && obj.cate != 'all'){//判断分类有没有传数据
                sql += `  and category_id = ${obj.cate}`;
            }
            //再判断状态是否有数据
            if(obj.statu && obj.statu != 'all'){
                sql += `  and posts.status = ${obj.statu}`;
            }
                
        sql +=  `  order by id desc
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