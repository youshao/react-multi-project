import React, { Component } from 'react';
import { connect } from 'react-redux'

//antd
import { Toast } from 'antd-mobile'

//组件
// import CarNumInput from '../components/inputs/CarNumInput'

//actons
// import * as carsActions from '../actions/carsActions'

//通用工具类
import common from '../utils/common'
import config from '../config'
import { ChMessage } from '../utils/message.config'

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
		
		}
	}

	componentWillMount() {
		common.setViewTitle('违章查询')
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {
		//props发生改变

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div>
				hello world
			</div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Home);