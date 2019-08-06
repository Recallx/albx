

//发送ajax请求，
$(function(){
    $.ajax({
        type : 'get',
        url:'/getAllPost',
        data : {
            pageNum : 1,
            pageSize: 3
        },
        success : function(result){
            //渲染页面
            let html = template('p1',result);
            $('tbody').html(html);
        }
    })
})