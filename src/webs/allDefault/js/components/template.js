/*
 *  UI组件模板：该模块尽量只包含组件样式，组件交互逻辑及其他逻辑处理放在父层容器组件中
 *  模板1：继承Component类方式声明 / 模板2：纯函数组件（推荐）
 */

//模板1：继承Component类方式声明

import React, { Component, PropTypes } from 'react';

class TEMP1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentWillMount() {
        //组件加载之前

    }

    componentDidMount() {
        //组件加载完成
    }

    componentWillReceiveProps(nextProps){
		//组件props更新
	}


    componentWillUnmount() {
        //组件卸载之前
    }

    render() {
        return (
            <div>
                UI组件模板1   
            </div>
        );
    }
}

//使用context
TEMP1.contextTypes = {
    router: React.PropTypes.object.isRequired
}

TEMP1.defaultProps = {
};

export default TEMP1;

//模板2：纯函数组件
const TEMP2 = props => {
    return (
        <div>
            UI组件模板2
        </div>
    )
}