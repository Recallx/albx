

const conn = require('../utils/Model')

//准备方法
exports.getAllPost = (obj, callback) => {
    // console.log(obj)
    //准备sql语句
    let sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id 
                where 1=1  `//这里使用恒成立，新方法，方便下面判断，直接用and连接起来就可以了。
    //判断页面的所有分类里面，用户有没有选择，如果选择了
    if( obj.cate && obj.cate != 'all'){ // 有没有传递分类数据
        sql += ` and category_id = ${obj.cate}`
    }
    if(obj.status && obj.status != 'all'){
        sql += ` and posts.status ='${obj.status}'`
    }

    sql += `  order by id desc
                limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;

    //执行sql语句
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            //这条sql语句，是获取表中的总记录数,conunt获取表总数，cnt是改掉里面的总数名称
            sql = `select count(*) as cnt 
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id
                    where 2=2   `
            if (obj.cate && obj.cate != 'all') { // 有没有传递分类数据
                sql += ` and category_id = ${obj.cate}`
            }
            if (obj.status && obj.status != 'all') {
                sql += ` and posts.status ='${obj.status}'`
            }
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

exports.addPosd = (obj, callback) => {
    //准备sql语句，将对应的数据插入到服务器中保存
    //这里用到sql的简写方法，？就代表所有的数据
    let sql = `insert into posts set ?`;
    //执行sql语句
    //query有多个参数，这里可以吧obj传进去，就会把对应的数据传入数据库中
    conn.query(sql, obj, (err, result) => {
        if (err) {
            callback(err);
        } else {
            //成功就返回空就可以了，因为数据直接存入数据库里
            callback(null);
        }
    })
}


//根据id查询文章
exports.getPostById = (id,callback)=>{
    //准备id查询的sql语句
    let sql = 'SELECT * FROM posts WHERE id = ' + id;
    //执行语句
    conn.query(sql,(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null,result[0])
        }
    })
}

exports.editPostById = (obj,callback)=>{
    //准备sql语句
    let sql = `update posts set ? where id = ? `;
    //执行sql语句
    conn.query(sql,[obj,obj.id],(err,results)=>{
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}

//添加删除方法
exports.delPostById = (id,callback)=>{
    //准备sql语句
    let sql = `delete from posts where id = ? `

    conn.query(sql,[id],(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}