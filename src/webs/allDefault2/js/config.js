/**
 * 配置
 */
import common from './utils/common'

const userType = sessionStorage.getItem('userType') || common.getUrlKeyValue('userType') || common.getJsApiUserType() || 'alipay'
const authType = sessionStorage.getItem('authType') || common.getUrlKeyValue('authType') || common.getJsApiUserType() || 'alipay'
const production = window.location.host.indexOf('daiban.cx580.com') > -1; //是否为生产环境
const authUrl = (production ? 'https://auth.cx580.com/Auth.aspx' : 'http://testauth.cx580.com/Auth.aspx') + `?userType=${userType}&authType=${authType}&clientId=CheWu&redirect_uri=`;

export default {
    production: production, //是否为生产环境
    baseApiUrl: production ? window.location.protocol + "//" + window.location.host + "/" : "http://192.168.1.165:9021/", //接口地址
    authUrl: authUrl,//单点登录地址 回调地址需自行补全
    violationUrl: production ?  `https://daiban.cx580.com/Violation/index.html` : `http://webtest.cx580.com:9021/Violation/index.html`, //违章首页路径
    h5IndexUrl: production ?  `https://daiban.cx580.com/H5Index/index.html` : `http://webtest.cx580.com:9021/H5Index/index.html`, //H5首页路径
}