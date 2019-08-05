
const userModel = require('../model/userModel');

exports.login = (req,res)=>{
    //接收参数
    let obj = req.body;
    //业务处理
    userModel.login(obj.email,(err,data)=>{
        if(err){
            //如果有错就是返回401，出错
            res.json({code:400,msg:'服务器异常'})
        }else{
            if(data){
                //再判断密码是否正确，
                if(data.password == obj.password){
                    //登录成功的时候写入登录状态
                    req.session.isLogin = 'true'
                    //把登录的这个账号的数据也写进去。
                    req.session.currenyUser = data;
                    //如果正确就返回
                    res.end(JSON.stringify({code:200,msg:'登录成功'}))
                }else{
                    //否则就是密码错误
                    res.json({code:400,msg:'密码错误'})
                }
            }else{
                //就是邮箱错误
                res.json({code:400,msg:'邮箱输入错误'})
            }
        }
    })
    //返回结果
}