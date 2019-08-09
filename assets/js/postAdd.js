

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

    //发送一个获取动态分类的ajax
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success : function(res){
            // console.log(res)
            //动态生成下拉的数据
            let str = `<option value="all">所有分类</option>`;
            //循环拿到的数组
            for(let i = 0; i < res.data.length; i++){
                //替换掉格式里面的动态值
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            }
            //添加到前代元素
            $('#category').html(str);
        }
    })



    //引入了富文本模块,初始化,里面放想要替换的文本的id
    CKEDITOR.replace('content')
    
    //给保存注册点击事件
    $('.btnsave').on('click',function(){
        //让富文本域和覆盖的文本同步数据,看文档使用
        CKEDITOR.instances.content.updateElement();
        //发送ajax请求
        console.log($('form').serialize())
        $.ajax({
            type: 'post',
            url : '/addPosd',
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    //弹框提示
                    alert(res.msg);
                    //返回posts页面
                    location.href = '/admin/posts'
                }else{
                    //弹窗
                    alert(res.msg)
                }
            }
        });
    });
});