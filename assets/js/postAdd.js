

$(function () {
    //思路：给上传文件按钮注册change事件
    //用formdata获取图片的文件.
    $('#feature').on('change', function () {
        //获取图片文件
        let myfile = document.querySelector('#feature').files[0];
        //利用formdata拿到图片
        let formdata = new FormData();
        //追加数据,这里是我们自己写后台，所以可以写img
        formdata.append('img',myfile)
        //发送ajax请求
        $.ajax({
            type : 'post',
            url : '/uploadFile',
            data:formdata,
            //要设置两个参数，因为formdata会自己设置一个请求头和数据
            contentType : false,
            processData : false,
            success : function(res){
                if(res.code == 200){
                    //实现预览
                    $('.thumbnail').attr('src','/uploads/'+res.img).show();
                    //将图片的路径添加到隐藏域中
                    $('[name="feature"]').val(res.img)
                }else{
                    //否则就是不成功，弹出提示框
                    $('.alert-danger > span').text(res.msg).fadeIn(500).delay(3000).fadeOut(500)
                }
            }
        });
    });
})