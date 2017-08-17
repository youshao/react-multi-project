/**
 * 混合项目配置文件
 * 如果项目同时在两个或以上平台运行的话，那么则将项目的配置信息写在本配置文件中
 */

var allConfig = {

	//全渠道默认项目
	allDefault: {
		name: 'allDefault',
		title: ' ',
		port: 7000,
		outputPath: 'dist',
		description: '多渠道||APP、微信、支付宝、QQ',
		// publicPath: '',// '//oss.cx580.com/Violation/',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//年检信息页
	allInspectionReminder: {
		name: 'allInspectionReminder',
		title: ' ',
		port: 7010,
		outputPath: 'inspection-reminder',
		description: '年检提醒||多渠道||APP、微信、支付宝、QQ'
	},

	//违章优化
	allInspectionViolation: {
		name: 'allInspectionViolation',
		title: ' ',
		port: 7011,
		outputPath: 'Violation',
		description: '适用于多平台的违章改版业务H5',
		// publicPath: '//oss.cx580.com/Violation/',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//驾照查分
	allDriversLicenseScore: {
		name: 'allDriversLicenseScore',
		title: ' ',
		port: 7012,
		outputPath: 'LicenseScore',
		description: '页面名称：驾照查分；页面目的：收集用户驾照信息的活动；'
	},

	//驾照查分
	allDrivingLicence: {
		name: 'allDrivingLicence',
		title: ' ',
		port: 7013,
		outputPath: 'drivingLicence',
		description: '适用于多平台的驾照查分业务'
	},

	//类APP的H5首页
	allH5Index: {
		name: 'allH5Index',
		title: ' ',
		port: 7014,
		outputPath: 'H5Index', //打包输出路径（相对应于项目目录）
		description: '模仿APP首页||迷你版首页',
		publicPath: '//oss.cx580.com/H5Index/', //oss、CDN路径 
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//引导注册-添加车辆
	allAddCar: {
		name: 'allAddCar',
		title: ' ',
		port: 7016,
		outputPath: 'AddCar',
		description: '引导注册，添加车辆',
		publicPath: '//oss.cx580.com/AddCar/',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//全渠道适配2
	allDefault2: {
		name: 'allDefault2',
		title: ' ',
		port: 7018,
		outputPath: 'Default2',
		description: '全渠道适配2；优化',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	},

	//车展直播宣传页
	allCheZhanZhiBo: {
		name: 'allCheZhanZhiBo',
		title: ' ',
		port: 7018,
		outputPath: 'CheZhanZhiBo',
		description: '车展直播宣传页',
		script: {
			onerror: "networkError('./images/networkError-icon.png')",
		}
	}
}

module.exports = allConfig