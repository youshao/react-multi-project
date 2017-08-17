import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className='box whiteBg'>
				全渠道适配，简单demo
			</div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(
	mapStateToProps
)(Home);