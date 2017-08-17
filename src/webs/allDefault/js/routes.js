import React from 'react'
import { Route, IndexRoute } from 'react-router'

//antd UI
import { Toast } from 'antd-mobile'

import {
  App,
  // Home,
  NotFoundPage,
} from './containers'

import ContainerTemplate from './containers/template'

//显示加载中
const showLoading = () => {
  Toast.loading('', 30, () => {
    window.networkError('./images/networkError-icon.png')
  })
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ContainerTemplate} />

    {/*
      <Route path="addCar/:carNumber" component={AddCar} />
    */}
    
    {/*按需加载demo
      <Route path="路由地址" getComponents={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./组件路径/按需加载demo').default)
        }, 'chunkName')
      }} />
    */}

    <Route path="*" component={NotFoundPage} />
  </Route>
);