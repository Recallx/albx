

//获取到唯一的路由进行判断

$(function(){
    //获取到两个需要展开的父元素
    let menuPosts = $('#menu-posts');
    let menuSettings = $('#menu-settings');
    //调用封装好的获取路由名字的方法
    let routerName = itcast.getRouterName(location.href);
    if(routerName == 'posts' || routerName == 'post-add' || routerName == 'categories'){
        //展开就是添加了样式，我们判断当用户打开了这三个页面，就添加样式上去。
        menuPosts.addClass('in').attr('aria-expanded',true);
        //还有兄弟元素的collapsed打开页面的时候是没有的，所有我们要移出出去
        menuPosts.parent().find('.collapsed').removeClass('collapsed');
    }
    //再判断，还有一个设置的展开
    if(routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings'){
        //逻辑和上面的一样
        menuSettings.addClass('in').attr('aria-expanded',true);
    }

    //加上高亮效果，路由也是唯一的，所以这里获取路由页面，到哪个页面就加上active
    // $('#' + routerName).addClass('active')
})