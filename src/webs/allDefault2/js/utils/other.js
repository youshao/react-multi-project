/**
 * URL重定向
 */
import { Toast } from 'antd-mobile'

class Other {
    constructor() {
        setInterval(() => this.init(), 100) //避免微信后退不刷新，所以这里定时循环
    }

    init() {
        if (window.history.state) {

            let { urlReplace, historyGo } = window.history.state;

            //重定向到指定页面
            if (urlReplace) {
                document.getElementById('app').style.display = 'none' //隐藏界面，提升交互体验
                Toast.loading('', 0)
                let url = urlReplace
                window.history.replaceState({}, '', ''); //清空需要跳转的URL
                window.location.replace(url) //重定向
                return;
            }

            //页面后退
            if (historyGo) {
                window.history.go(historyGo);
                return;
            }
        }
    }
}

// 实例化后再导出
export default new Other()