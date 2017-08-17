/**
 * APP项目配置文件
 */

var appConfig = {
    //APP 车主特惠
    carOwnerDiscount: {
		name: "carOwnerDiscount",
		title: "",
		port: 8081,
		description: "app6.1.3车主特惠H5"
	},

    //APP banner图入口-活动引导页
	maintenanceActivities: {
		name: 'maintenanceActivities',
		title: ' ',
		port: 7006,
		description: 'app-banner图入口-活动引导页'
	},

	//服务评价
	serviceEvaluation: {
		name: 'serviceEvaluation',
		title: ' ', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 7008,
		outputPath: 'service-evaluation',
		description: 'APP 6.1.3 订单服务评价'
	},

	//app首页自媒体H5
	weMedia:{
		name: 'weMedia',
		title: ' ', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 7009,
		description: 'APP 首页自媒体H5'
	},

	//app首页车主福利H5
	carOwnerWelfare:{
		name: 'carOwnerWelfare',
		title: '车主福利', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 7010,
		outputPath: 'carOwnerWelfare',
		description: 'APP 车主福利H5'
	},

	//积分商城
	scoreShop:{
		name: 'scoreShop',
		title: '车主积分商城', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 7015,
		outputPath: 'scoreShop',
		description: 'APP积分商城入口'
	},

	//发票
	invoice:{
		name: 'invoice',
		title: '发票', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 8082,
		outputPath: 'invoice',
		description: 'APP6.2.2新增发票'
	},

	//APP6.3.0
	app6_3_0:{
		name: 'app6_3_0',
		title: ' ',
		port: 8084,
		outputPath: 'App6_3_0',
		description: 'APP6.3.0',
		// publicPath: '//oss.cx580.com/App6_3_0/',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//蒙层
	appmask:{
		name: 'appmask',
		title: 'app蒙层广告', //这里设置为空，避免页面刚刚进入时出现标题瞬间切换的效果
		port: 8083,
		outputPath: 'dist',
		description: 'APP6.2.2蒙层广告'
	}

    //其他项目
}

module.exports = appConfig