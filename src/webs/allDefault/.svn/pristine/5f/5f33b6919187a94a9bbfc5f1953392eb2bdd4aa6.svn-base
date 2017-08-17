/**
 * 配置
 */
import common from './utils/common'

const userId = localStorage.getItem('userId') || ''
const token = localStorage.getItem('token') || ''
const userType = localStorage.getItem('userType') || common.getJsApiUserType() || 'alipay'
const authType = localStorage.getItem('authType') || common.getJsApiUserType() || 'alipay'
const production = window.location.host.indexOf('daiban.cx580.com') > -1; //是否为生产环境
const authUrl = (production ? 'https://auth.cx580.com/Auth.aspx' : 'http://testauth.cx580.com/Auth.aspx') + `?userType=${userType}&authType=${authType}&clientId=CheWu&redirect_uri=`;
const inspectionReminderUrl = (production ? `https://annualcheck.cx580.com/inspection-reminder/index.html` : `http://192.168.1.165:7083/inspection-reminder/index.html`) + `?userId=${userId}&token=${token}&userType=${userType}&authType=${authType}`
const violationUrl = (production ? `https://daiban.cx580.com/Violation/index.html` : `http://webtest.cx580.com:9021/Violation/index.html`) + `?userId=${userId}&token=${token}&userType=${userType}&authType=${authType}`

export default {
    appName:"allH5Index",//应用名称，需符合js变量命名规范
    production: production, //是否为生产环境
    baseApiUrl: production ? window.location.protocol + "//" + window.location.host + "/" : "http://192.168.1.165:9021/", //接口地址
    authUrl: authUrl,//单点登录地址 回调地址需自行补全
    inspectionReminderUrl: inspectionReminderUrl, //年检提醒URL carId和carNumber需要拼接进来（示例：inspectionReminderUrl+'&carId=1carNumber=粤A12345'）
    indexPageUrl: window.location.protocol + "//" + window.location.host + window.location.pathname + `?userId=${userId}&token=${token}&userType=${userType}&authType=${authType}`, //首页URL
    violationUrl: violationUrl, //违章首页路径
}