/*
	state 文件： 是整个app 共享 的 状态数据属性
*/
//import {Mode} from './config'

const state = {
	searchText:'', // 搜索字段

	totalMount:0,	 // 结果总数

	buyOnly:false, // 只显示可购买（默认为false）


}

export default state