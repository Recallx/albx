
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
    },
    getPrameter:(str)=>{
        let obj = {};
        str = str.substring(1);
        //连接拆开
        let  temp = str.split('&');
        for(let i = 0; i < temp.length; i++){
            //再把=号拆开
            let arr = temp[i].split('=')
            obj[arr[i]] = arr[1]
        }
        return obj
    }
}