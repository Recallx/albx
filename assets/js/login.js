
//点击登录按钮，判断输入框非空
//注册登录时间，收集表单数据发送ajax请求。

$(function () {
    $('.btnLogin').on('click', function () {
        //发送ajax请求  

        $.ajax({
            type: 'post',
            data: $('form').serialize(),
            url: '/login',
            dataType:'json',
            success : function(res){
                if(res.code == 400){
                    //就弹出提示
                    $('.alert-danger > span').text(res.msg)
                    //加点动画
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
                }else{
                    //否则就是成功，就直接跳转页面
                    location.href = '/admin'
                }
            }
        });
    });
})