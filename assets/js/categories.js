

$(function () {
    //发送ajax请求,调用获取数据的方法
    function init() {
        $.ajax({
            type: 'get',
            url: '/getAllCate',
            dataType: 'json',
            success: function (res) {
                $('tbody').html(template('p2', res))
            }
        })
    }
    init()
    //委托的方式编辑注册事件
    $('tbody').on('click', '.btnbjs', function () {
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
    $('.btnbj').on('click', function () {
        console.log($('form').serialize())
        //发送ajax请求
        $.ajax({
            type: 'post',
            url: '/editPostCate',
            data: $('form').serialize(),
            success: function (res) {
                // console.log(res)
                if (res.code == 200) {
                    init()
                    $('.optinfo').text('添加分类目录')
                    $('.btnbj').hide();
                    $('.btnAdd').show();
                }
            }
        })
    })

    //删除按钮注册删除时间
    $('tbody').on('click', '.btndel', function () {
        //拿到自定义的id
        let id = $(this).data('id')
        // console.log(id)
        if (confirm('你确定要删除吗？')) {
            //发生ajax请求
            $.ajax({
                type: 'get',
                url: '/delPostByIdcate?id=' + id,
                success: function (res) {
                    if (res.code == 200) {
                        $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                        $('.alert-danger > span').text(res.msg);
                        init()
                    } else {
                        $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                        $('.alert-danger > span').text(res.msg);
                        init()
                    }
                }
            })
        }
    })

    //给新增按钮注册点击事件
    $('.btnAdd').on('click', function () {
        // console.log($('form').serialize())
        //获取表单数据发送请求
        $.ajax({
            type: 'post',
            data: $('form').serialize(),
            url: '/addCate',
            dataType: 'json',
            success: function (res) {
                if (res.code == 200) {
                    $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                    $('.alert-danger > span').text(res.msg)

                    //让文本框的内容清空
                    $('#name').val('');
                    $('#slug').val('');
                    init()
                }
            }
        })
    })


    //实现全选和全不选显示批量删除功能
    $('.btnbox').on('click', function () {
        //判断如果点击了，其他的单选框也要选中
        let data = $('.btnbox').prop('checked')
        $('tbody .btnSigon').prop('checked', data)
        //判断单选框的长度如果>1就显示批量删除
        if ($('tbody .btnSigon:checked').length > 1) {
            $('.btndels').fadeIn(500)
        } else {
            $('.btndels').fadeOut(500)
        }
    })


    //实现单选框选中的长度如果>1就显示批量删除
    $('tbody').on('click', '.btnSigon', function () {
        //拿到选中的单选框
        let cnt = $('tbody .btnSigon:checked').length;
        //拿到所有单选框
        let totol = $('tbody .btnSigon').length
        //判断如果选中的单选框长度>1就显示批量删除
        if (cnt > 1) {
            $('.btndels').fadeIn(500)
        } else {
            $('.btndels').fadeOut(500)
        }
        //判断是否勾选全选框
        if (cnt == totol) {
            $('.btnbox').prop('checked', true)
        } else {
            $('.btnbox').prop('checked', false)
        }
    })


    //给批量删除注册点击事件
    $('.btndels').on('click', function () {
        if (confirm('您确定要删除吗？')) {
            //拿到tbody被选中的单选框
            let che = $('tbody .btnSigon:checked')
            //声明一个空数组
            let data = [];
            //因为拿到的是一个伪数组，要遍历
            for (let i = 0; i < che.length; i++) {
                //把拿到的id加入到数组中
                data.push(che[i].dataset['id'])
            }
            // console.log(data)
            //拿到数组后发送ajax请求
            $.ajax({
                url: '/delPostByIdcate?id=' + data.join(','),
                dataType: 'json',
                success: function (res) {
                    // console.log(res)
                    if(res.code == 200){
                        $('.alert-danger').fadeIn(500).delay(3000).fadeOut(500);
                        $('.alert-danger > span').text(res.msg)
                        init()
                    }
                }
            })
        }
    })
})