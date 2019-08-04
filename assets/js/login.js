
//点击登录按钮，判断输入框非空
//注册登录时间，收集表单数据发送ajax请求。

$('#login').on('click',function(){
    //判断非空
    if($('#email').val().trim() === 0 && $('#password').val().trim() === 0){
        alert('邮箱或密码不能为空哦！')
        break;
    }
    //收集表单数据
    let data = $('.login-wrap').serialize();
    //发送ajax请求  
    $.ajax({
        type : 'post',
        data,
        url : 'http://127.0.0.1:8080/index.html',
        success : function(res){
            
        }
    });
});