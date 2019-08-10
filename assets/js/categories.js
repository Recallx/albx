

$(function(){
    //发送ajax请求,调用获取数据的方法
    $.ajax({
        type : 'get',
        url : '/getAllCate',
        dataType:'json',
        success:function(res){
            $('tbody').html(template('p2',res))
        }
    })

    //委托的方式编辑注册事件
    $('tbody').on('click','.btnbjs',function(){
        //拿到所有的数据
        let obj = $(this).data();
        console.log(obj)
        //因为页面不是跳转，所以直接渲染到对应的位置
        $('#name').val(obj.name)
        $('#slug').val(obj.sulg)
        $('#id').val(obj.id)
        $('.optinfo').text('编辑分类目录')
        $('.btnbj').show();
        $('.btnAdd').hide();
    })

    //给编辑按钮注册点击事件
    $('.btnbj').on('click',function(){
        console.log($('form').serialize())
        //发送ajax请求
        $.ajax({
            type:'post',
            url:'/editPostCate',
            data:$('form').serialize(),
            success:function(res){
                // console.log(res)
                if(res.code == 200){
                    alert(res.msg)
                }
            }
        })
    })

    //删除按钮注册删除时间
    $('tbody').on('click','.btndel',function(){
        //拿到自定义的id
        let id = $(this).data()
        // console.log(id)
        //发生ajax请求
        $.ajax({
            type:'get',
            data:{id},
            url:'/delPostByIdcate',
            success:function(res){
                alert(res.msg)
                location.href = '/admin/categories'
            }
        })
    })
})