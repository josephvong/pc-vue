/*
	此文件为 定义 对 store 里面的 状态值进行 更改 的方法
	输出 同步直接修改 state 状态的 方法 集合 ，如果需要修改某个状态，而方法无需异步处理的话，可以直接调用  mutations
*/

import * as types from './mutation-types' // 把所有 的 mutation-types 常量 引入 定义为 ‘type’ 变量

const mutations = {  // 所有方法 的 容器

	[types.SET_SEARCH_TEXT](state,value){ // 更改 当前 搜索值
		state.searchText = value
	},

	[types.SET_TOTAL_MOUNT](state,number){ // 更改 当前 搜索值
		state.totalMount = number
	},

	[types.SET_BUY_ONLY](state,flag){  // 更改 当前 显示可购买 状态值
		state.buyOnly = flag
	}


}


export default mutations
















