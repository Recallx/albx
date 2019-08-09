

//这里用到第三方模块要引入，要引入。
const formidable = require('formidable')
const path = require('path')
exports.uploadFile = (req,res)=>{
    //配置formidable
    let form = new formidable.IncomingForm();
    //配置编码
    form.encoding = 'utf-8';
    //设置文件存储目录
    form.uploadDir = __dirname + '/../uploads';
    //设置是否扩展文件名
    form.keepExtensions = true;
    //实现文件上传
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.json({
                code : 400,
                msg : '获取图片失败'
            })
        }else{
            // console.log(files)
            //用到一个第三方插件，这个插件可以拿到path路径后面部分
            let img = path.basename(files.img.path)
            res.json({
                code:200,
                msg : '获取图片成功',
                img:img
            })
        }
    })
}