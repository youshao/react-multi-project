# 说明

- 此目录是 所有react项目的主目录

# 添加新项目

1.直接复制src/web/下的default文件夹到src/web/目录下，然后将目录名称修改成对应的项目名称
2.在config目录下的***-config.js中添加上新项目的配置信息。如：
# 全渠道适配项目配置demo
var allConfig = {
	//类APP的H5首页
    allH5Index: {
		name: 'allH5Index', //项目名称 需要和allConfig的key一样。也是webs下的文件夹名称
		title: ' ', //index.html的title 建议设置为空 避免直接进入路由组件时，出现title切换的bug
		port: 7014, //启动的server 端口
		outputPath: 'H5Index', //打包输出路径（相对应于项目目录）
		description: '模仿APP首页||迷你版首页', //项目描述
		publicPath: '//oss.cx580.com/H5Index/', //oss、CDN路径 
		script: {
			onerror: "networkError('./images/networkError-icon.png')", //打包后的JS 自动增加onerror属性
		}
	},
}

# 启动项目 and 打包项目
# 启动项目 运行：npm start -- --project=项目名称
# 打包项目 运行：npm run build -- --project=项目名称
# 修改默认启动项目的路径：npm run build -- --project=项目名称 --startPath=项目下的文件夹名称
# 启动H5首页的开发分支示例： npm run build -- --project=allH5Index --startPath=branch/dev


# SVN版本管理规范

- 在项目目录下新增“trunk”、“branch”和“tags”目录。

trunk：项目主干文件夹，用于存放稳定版本，不能直接在trunk中开发。
branch：开发分支文件夹，当完成版本开发并测试通过后合并到trunk，当一个版本存在分任务并行开发时，在此目录建多个分支，并行开发。
tags：存放已发布的历史版本，以及用于修复某个版本问题的小版本。

代码开发流程：
branch的开发分支中完成版本开发   -->   将代码合并到trunk   -->   从trunk打出一个待上线版本的标签到tags目录下   -->   提工单上线