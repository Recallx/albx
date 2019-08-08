
//封装获取路由的方法
var itcast = {
    getRouterName: (str) => {
        //拿到唯一的路由名称,判断是否带参数
        let index = str.indexOf('?')
        //声明一个空字符串
        let routerName = '';
        if (index == -1) {//证明没有带参数
            routerName = str.substring(str.lastIndexOf('/')+1)
        } else {
            //有带参数
            routerName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('/'))
        }
        return routerName;
    }
}