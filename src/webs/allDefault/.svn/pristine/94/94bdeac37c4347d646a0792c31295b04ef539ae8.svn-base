import config from '../config'
import jsApi from './cx580.jsApi';
import common from './common';

let g_userContainer = undefined;

let g_userId = ''; //CXY_3FBA032214714C19BA4CCA267F86C550
let g_userToken = ''; //0850B086D355F263654698F097C0E1C8

let g_city = "";


/**
 * 用户帮助类
 */
class UserHelper {
    //userContainer = "";
    // userId = "";
    // userToken = "";
    //city = "";


    constructor() {
        this._initialize();
    }

    _initialize() {
        if (common.isCXYApp()) {
            //执行到这里，说明是在 app 中运行
            g_userContainer = "App";
            this._getUserInfoFromApp();
        } else {
            //执行到这里，说明不在 app 中运行
            g_userContainer = "";
        }
    }


    /**
     * 从 app 中获取用户 token
     */
    _getUserInfoFromApp() {
        try {
            jsApi.call({
                "commandId": "",
                "command": "getSymbol",
                "data": {
                    "userid": "",
                    "lng": "",
                    "version": "",
                    "channel": "",
                    "phone": "",
                    "name": "",
                    "type|orderNum": "",
                    "city": "",
                    "accountId": "",
                    "token": "",
                    "carId": "",
                    "carNumber": ""
                }
            }, (data) => {
                g_userId = data.data.accountId;
                g_userToken = data.data.token;
                g_city = data.data.city;
            });
        } catch (error) {
            //执行到这里，说明不在 app 中运行
            // alert("调试信息：调用APP JS SDK出错了 获取APP信息出错了");
        }
    }

    /**
     * app 登陆
     */
    _appLogin(callback) {
        try {
            jsApi.call({
                "commandId": "",
                "command": "login"
            }, (data) => {
                localStorage.setItem("upLoginState", "1"); //用户登录状态发生变化
                if (data.data.accountId) {
                    g_userId = data.data.accountId;
                    this._getUserInfoFromApp();
                    if (callback) {
                        callback();
                    }
                } else {
                    //登录失败 关闭APP视图
                    jsApi.call({
                        "commandId": "",
                        "command": "close",
                    }, function (data) { });

                }
            });
        } catch (error) {
            console.log("JsApi login错误：", error)
        }
    }

    /**
     * 跳转到单点登录
     */
    toAuthUrl() {
        sessionStorage.clear(); //清空sessionStorage缓存
        let url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash; //好像不用编码 编码反而出错？
        url = url.replace('#', '%23'); //替换#号
        url = url.split('?')[0]; //过滤？号     
        window.location.replace(config.authUrl + url); //跳转到单点登录
    }

    /**
     * 获取 userId 和 token
     */
    getUserIdAndToken() {
        if (g_userContainer == "App") {
            this._getUserInfoFromApp();

            return {
                userId: g_userId,
                token: g_userToken,
                city: g_city,
                userType: 'App',
                authType: 'App'
            }
        } else {
            //非APP
            return {
                userId: localStorage.getItem('userId'),
                token: localStorage.getItem('token'),
                userType: localStorage.getItem('userType'),
                authType: localStorage.getItem('authType')
            }
        }

    }

    /**
     * 登陆
     * @param callback function 登陆成功之后的回调
     */
    Login(callback) {
        if (g_userContainer == "App") {
            this._appLogin(callback)
        } else {
            this.toAuthUrl() //跳转到单点登录
        }
    }
};

// 实例化后再导出
export default new UserHelper()