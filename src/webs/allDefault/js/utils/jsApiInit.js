import JsApiService from '../services/JsApiService'
import common from './common'
import config from '../config'

class JsApiInit {

    constructor() {
        this.debug = !config.production || localStorage.getItem('userId') === 'B406E4D73A704585AB64B35E2A7896BA'
        this.debug = false
        this.jsApiIsLoad() //JsApi加载完成后执行
        this.cxytjInit() //埋点JS初始化

    }

    jsApiIsLoad() {
        let userType = common.getJsApiUserType();
        if (userType == 'weixin' || userType == 'qq' || userType == 'app') {
            //需要引入JS的文件，需要等到JS文件引入后再执行
            if (window.jsApiIsLoad) {
                this.runJsApi() //执行JsApi
            } else {
                window.jsApiIsReady = () => {
                    this.runJsApi() //执行JsApi
                }
            }
        } else {
            this.runJsApi() //执行JsApi
        }
    }

    runJsApi() {
        this.weiXinConfig() //初始化微信配置
        this.qqConfig() //初始化QQ配置
        common.alipayReady(() => AlipayJSBridge.call('hideOptionMenu')); //隐藏支付宝右上角
    }

    /**
     * 微信配置
     */
    weiXinConfig() {
        let shareUrl = location.href.split('#')[0];
        let userType = common.getJsApiUserType();
        if (userType == 'weixin') {

            JsApiService.weiXinConfig({
                signUrl: encodeURIComponent(shareUrl)
            }).then(data => {
                try {
                    wx.config({
                        debug: this.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.data.appId, // 必填，公众号的唯一标识
                        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
                        signature: data.data.signature,// 必填，签名，见附录1
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'onMenuShareQZone',
                            'hideMenuItems',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'translateVoice',
                            'startRecord',
                            'stopRecord',
                            'onRecordEnd',
                            'playVoice',
                            'pauseVoice',
                            'stopVoice',
                            'uploadVoice',
                            'downloadVoice',
                            'chooseImage',
                            'previewImage',
                            'uploadImage',
                            'downloadImage',
                            'getNetworkType',
                            'openLocation',
                            'getLocation',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'closeWindow',
                            'scanQRCode',
                            'chooseWXPay',
                            'openProductSpecificView',
                            'addCard',
                            'chooseCard',
                            'openCard'
                        ]
                    });
                    window.addEventListener("hashchange", function () {
                        //所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。
                        wx.config({
                            debug: this.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: data.data.appId, // 必填，公众号的唯一标识
                            timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                            nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
                            signature: data.data.signature,// 必填，签名，见附录1
                            jsApiList: [
                                'checkJsApi',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareWeibo',
                                'onMenuShareQZone',
                                'hideMenuItems',
                                'showMenuItems',
                                'hideAllNonBaseMenuItem',
                                'showAllNonBaseMenuItem',
                                'translateVoice',
                                'startRecord',
                                'stopRecord',
                                'onRecordEnd',
                                'playVoice',
                                'pauseVoice',
                                'stopVoice',
                                'uploadVoice',
                                'downloadVoice',
                                'chooseImage',
                                'previewImage',
                                'uploadImage',
                                'downloadImage',
                                'getNetworkType',
                                'openLocation',
                                'getLocation',
                                'hideOptionMenu',
                                'showOptionMenu',
                                'closeWindow',
                                'scanQRCode',
                                'chooseWXPay',
                                'openProductSpecificView',
                                'addCard',
                                'chooseCard',
                                'openCard'
                            ]
                        });
                        wx.ready(function () {
                            wx.hideAllNonBaseMenuItem(); // “基本类”按钮详见附录3
                        })
                    });

                } catch (error) {

                }
                try {
                    wx.ready(function () {
                        wx.hideAllNonBaseMenuItem(); // “基本类”按钮详见附录3
                    })
                } catch (error) {

                }
            }, error => console.error(error))

        }
    }

    /**
     * QQ配置
     */
    qqConfig() {
        let shareUrl = location.href.split('#')[0];
        let userType = common.getJsApiUserType();
        if (userType == 'qq') {
            JsApiService.qqConfig({
                signUrl: encodeURIComponent(shareUrl)
            }).then(data => {
                try {
                    mqq.config({
                        debug: this.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.appId, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: ['closeWindow', 'hideOptionMenu', 'hideAllNonBaseMenuItem', 'showBottomBar'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    mqq.ready(function () {
                        mqq.hideOptionMenu(); //隐藏右上角菜单接口
                        mqq.hideAllNonBaseMenuItem(); //隐藏所有非基础按钮接口
                        mqq.showBottomBar(); //显示底部功能条
                    })

                    mqq.error(function (res) {
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

                    });

                } catch (error) {

                }
            }, error => console.error(error))
        }
    }

    /**
     * 埋点JS初始化
     */
    cxytjInit() {
        if (window.cxytjIsReady) {
            //初始化通用数据
            this.cxytjInitData();
        } else {
            window.cxytjReady = () => {
                this.cxytjInitData();
            }
        }
    }

    /**
     * 埋点JS初始化的数据
     */
    cxytjInitData() {
        window.cxytj.init({ //以下为初始化示例，可新增或删减字段
            productId: 'allViolation', //产品ID
            productVersion: '1.0', //产品版本
            channel: localStorage.getItem('userType'), //推广渠道
            isProduction: config.production, //生产环境or测试环境 默认测试环境
            userId: localStorage.getItem('userId'), //用户ID
        });
    }

};

// 实例化后再导出
export default new JsApiInit()


window.onerror = function (msg, url, l) {
    var txt = '';
    txt = "There was an error on this page.\n\n";
    txt += "Error: " + msg + "\n";
    txt += "URL: " + url + "\n";
    txt += "Line: " + l + "\n\n";
    txt += "Click OK to continue.\n\n";
    if (!config.production) {
        alert(txt);//测试环境
        // window.location.replace(config.indexPageUrl); //返回首页
    } else {
        window.location.replace(config.indexPageUrl); //返回首页
        return true; //正式环境屏蔽错误
    }
}