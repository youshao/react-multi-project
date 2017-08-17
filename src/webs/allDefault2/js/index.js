import React from 'react'
// import 'react-fastclick'  // 这个需要放到react下方才行
import 'babel-polyfill'; //兼容低版本浏览器不支持ES6语法
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { hashHistory } from 'react-router'
import other from './utils/other'; //其他JS
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSage from './sagas'
import Redbox from 'redbox-react'
import auth from './utils/auth'; //单点登录授权
import jsApiInit from './utils/jsApiInit'; //JSDK初始化
const rootEl = document.getElementById('app');

let allH5Index = JSON.parse(localStorage.getItem('allH5Index')) || undefined;
if (allH5Index && allH5Index.user && allH5Index.user.userId != sessionStorage.getItem('userId')) {
  //用户信息发生改变时 清空缓存
  localStorage.removeItem('allH5Index');
  allH5Index = undefined;
  console.log("用户信息发生了变化")
}


const store = configureStore(allH5Index)
store.runSaga(rootSage)

//保存用户信息到全局state
store.dispatch({
  type: 'CREATE_USER', data: {
    userId: sessionStorage.getItem('userId'),
    token: sessionStorage.getItem('token'),
    userType: sessionStorage.getItem('userType'),
    authType: sessionStorage.getItem('authType')
  }
})

let unsubscribe = store.subscribe(() => {
  let state = store.getState()
  localStorage.setItem("allH5Index", JSON.stringify(state)) //实时保存缓存数据
})

window.store = store

render(
  <AppContainer errorReporter={Redbox}>
    <Root store={store} history={hashHistory} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/Root').default;
    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={store} history={hashHistory} />
      </AppContainer>,
      rootEl
    )
  });
}