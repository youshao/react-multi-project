import config from '../config'
import userHelper from '../utils/userHelper';

require('isomorphic-fetch');

class ApiHelper {
    /**
     * 切换生产或测试环境
     * "http://192.168.1.54:8083/"; //测试
     * "https://192.168.1.54:8023/im/"; //测试环境暂时不部署https 否则会提示网络错误
     * "http://comments.cx580.com:6050/";//生产
     */
    baseApiUrl = config.baseApiUrl;


    /**
     * 获取 HTTP 头
     */
    _getHeaders() {
        return {
            "Accept": "*/*",
            // "authorization": "Basic Y3h5aW06Y3g1ODBjeDU4MGN4NTgws",
        }
    }

    /**
     * 将键值对转为URL参数
     */
    _toQueryPair(key, value) {
        ///<summary>将键值对转为URL参数</summary>
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
        //return key + '=' + (value == null ? '' : String(value));
    }

    /**
     * 将对象转为URL参数
     */
    toQueryString(obj) {
        var ret = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                key = encodeURIComponent(key);
                var values = obj[key];
                if (values && values.constructor === Array) { //数组 
                    var queryValues = [];
                    for (var i = 0, len = values.length, value; i < len; i++) {
                        value = values[i];
                        queryValues.push(this._toQueryPair(key + '[' + i + ']', value));
                    }
                    ret = ret.concat(queryValues);
                } else { //字符串 
                    ret.push(this._toQueryPair(key, values));
                }
            }
        }
        return ret.join('&');
    }

    /**
     * 封装fetch
     */
    fetch(requestParam) {
        let setTimeNum = 250; //默认延迟250毫秒请求数据 兼容APP处理

        let UserIdAndToken = userHelper.getUserIdAndToken(); //先去获取用户数据，避免数据没有实时返回

        if (UserIdAndToken.userType && UserIdAndToken.userType.toLocaleUpperCase() !== 'APP') {
            setTimeNum = 0;
        }

        let resolveId = -1, rejectId = -1;
        let promise = new Promise((resolve, reject) => {
            //用于支付宝 不需要延迟请求
            resolveId = setTimeout(() => {
                requestParam.data.method = requestParam.data.method || "get";
                requestParam.data.headers = requestParam.data.headers || {};
                Object.assign(requestParam.data.headers, this._getHeaders());
                if (requestParam.data.method.trim().toLowerCase() == "post") {
                    requestParam.data.headers["Content-Type"] = "application/x-www-form-urlencoded";
                }
                requestParam.data.body = requestParam.data.body || {};
                //设置用户
                UserIdAndToken = userHelper.getUserIdAndToken();
                if (!requestParam.data.body.userId) {
                    requestParam.data.body["userId"] = UserIdAndToken.userId;
                }
                if (!requestParam.data.body.token) {
                    requestParam.data.body["token"] = UserIdAndToken.token;
                }
                if (!requestParam.data.body.userType) {
                    requestParam.data.body["userType"] = UserIdAndToken.userType;
                }
                if (!requestParam.data.body.authType) {
                    requestParam.data.body["authType"] = UserIdAndToken.authType;
                }
                //保存用户信息及城市信息(用于判断是否需要刷新页面重新获取信息)
                localStorage.setItem("g_userId", UserIdAndToken.userId);
                localStorage.setItem("g_userToken", UserIdAndToken.token);
                localStorage.setItem("g_city", UserIdAndToken.city);

                requestParam.data.body = this.toQueryString(requestParam.data.body);


                requestParam.data.mode = "cors";
                if (requestParam.data.method.trim().toLowerCase() == "get") {
                    var request = new Request(requestParam.url + '?' + requestParam.data.body); //get请求不能有body,否则会报错
                } else {
                    var request = new Request(requestParam.url, requestParam.data);
                }
                // console.debug("request", request);
                let result = window.fetch(request, { headers: requestParam.data.headers })
                    .then(function (response) {
                        let resp = response.json();
                        resp.then(function (data) {
                            if (data.code == "2222" || data.code == "4222") {
                                userHelper.Login();
                            }
                        });
                        clearTimeout(rejectId)
                        return resp;
                    })
                    .catch(function (e) {
                        clearTimeout(rejectId)
                        console.error("fetch 请求出错了");
                        console.dir(e);
                        // throw e; //使用saga后 这里不能抛错误，应该把错误信息返回给对应的接口，让接口自行处理
                        return e;
                    });
                
                resolve(result)
            }, setTimeNum);

            // 网络超时
            rejectId = setTimeout(() => {
                clearTimeout(resolveId)
                console.error("网络错误")
                reject('网络错误')
            }, 30000);
        });
        return promise;
    }
}

// 实例化后再导出
export default new ApiHelper()