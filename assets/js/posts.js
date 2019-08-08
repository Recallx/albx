

//发送ajax请求，
$(function () {
    //声明全局表量
    var pageNum = 1;
    var pageSize = 2;
    //把获取数据的ajax请求封装起来，下面要用的时候，直接传参数调用
    function init(search) {
        $.ajax({
            type: 'get',
            url: '/getAllPost',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                //...是es6新语法，展开数据的意思，这里用就是如果有数据传进来就展开，如果没有就不管。
                ...search
            },
            success: function (result) {
                console.log(result)
                //渲染页面
                let html = template('p1', result.data);
                $('tbody').html(html);
                // 生成分页语句
                setPagenation(Math.ceil(result.data.total / pageSize))
            }
        })
    }
    //封装了要调用才执行，这里调用一次
    init();
    //
    function setPagenation(total) {
        //项目初始化,bootstrapPaginator初始化
        $('.pagination').bootstrapPaginator({
            //bootstrap版本是3开头
            bootstrapMajorVersion: 3,
            //设置当前页
            currentPage: pageNum,
            //设置总页数
            totalPages: total,
            //给一个函数
            onPageClicked: function (event, originalEvent, type, page) {
                //page是点击的页面的页数
                //让页面等于用户点击的响应的页面
                pageNum = page;
                //重新获取数据，因为用户点击了不同的页数，所以获取不同的页面数据
                //调用我们封装好的获取数据的ajax就可以了
                init();
            }
        })
    }
})