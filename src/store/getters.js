/*
	getter 文件 是 将 state 中的 状态数据 拿出来 进行输出给对应的组件
*/
export const searchText = (state)=>{ return state.searchText }
export const searchData = (state)=>{ return state.searchData }

export const totalMount = (state)=>{
	return state.totalMount
}

export const buyOnly = (state)=>{
	return state.buyOnly
}

