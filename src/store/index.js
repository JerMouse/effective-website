import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  // 只能通过mutation或者dispatch修改state的状态
  // 不能通过state属性直接修改状态树
  strict: process.env.NODE_ENV !=='production',
  getters,
  modules
});