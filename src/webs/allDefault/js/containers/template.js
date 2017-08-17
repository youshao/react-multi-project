/*
 *  容器组件模板：该模块处理组件交互逻辑及其他逻辑
 */

/**
 * 违章业务车辆详情页面
 * Created by lijun on 2017/5/18.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as demoActions from '../actions/demoActions'
import common from '../utils/common'
import config from '../config'

// import { Toast } from 'antd-mobile'

class ContainerTemplate extends Component{
	constructor(props){
		super(props);
		//设置初始状态
		this.state = {
		}
	}

	componentWillMount(){
		//设置标题
		common.setViewTitle('容器组件');

	}

	componentWillReceiveProps(nextProps){
		//组件props更新
	}

	componentDidMount(){
		//进入组件埋点
		// common.sendCxytj({
		// 	eventId:"Violation_EnterCarDetails"
		// })
	}

	componentWillUnmount() {
		//离开车辆列表页记录页面信息
        sessionStorage.setItem("prevPageInfo", document.title)
    }

	render(){
		return (
			<div>
				容器组件
			</div>
		)
	}
}

const mapStateToProps = state => ({
	//state:state //容器组件props
})

const mapDispatchToProps = dispatch => ({
	//actions: bindActionCreators(carListActions, dispatch) //容器组件action
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContainerTemplate)