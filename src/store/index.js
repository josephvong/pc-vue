import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions' // 异步方法 提交 mutations
import mutations from './mutations'  // 同步直接修改 state 状态的 方法 集合

import state from './state'
import * as getters from './getters'

import createLogger from 'vuex/dist/logger'
// createLogger 插件 是vuex 用来记录 状态（state） 被 mutation 修改的过程中, 可以在控制台中记录 这条state被修改的过程，从什么修改为什么

Vue.use(Vuex)

const debug = process.env.NODE_ENV !=='production' // 是否开启严格调试模式的变量
// ‘process.env.NODE_ENV’ 为 nodejs 的运行 环境状态：
// vue中 npm run dev 为开发模式 process.env.NODE_ENV ==‘development’
//       npm run build 的 process.env.NODE_ENV ==‘production’

export default new Vuex.Store({ // 注册 vuex store
	actions,
	getters,
	state,
	mutations,
	strict:debug, // 表示在 开发环境下 store 会 开启严格调试模式
	plugins:debug?[createLogger()]:[]  // 是否使用 插件 （开发环境下使用 状态记录插件）
})

//在开发环境下 开启 调试模式的意义：
// 判断 store 的状态（state）是不是 由 mutation 方法来直接修改，不是的话都属于违法的修改，会发出警告

