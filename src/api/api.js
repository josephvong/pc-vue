import axios from 'axios'
import jsonp from 'jsonp'

// 输入框关联词 接口
export function getWordSuggest(value){
	let params = new URLSearchParams();
	params.append('dtype',2)
  let data = {wordStr:value}
  params.append('jparams',JSON.stringify(data)); // 转换传参结构

  return axios.post(`dataApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
     return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err);
  })
}

// 字段搜索接口
export function getSearchResult(searchText,pageIndex,isBuyOnly,is_correct=1){
	let params = new URLSearchParams();
	params.append('dtype',1)
  let data = {
    wordStr:searchText,
    size:10,
    offset:pageIndex*10-10,
    format_rd:'search-k-w',
    is_correct:is_correct, // 默认开启 错误匹配
    is_alias:1, // 默认禁用别名适配
    rowSearch:{
      buyable:isBuyOnly?'1':null
    }
  }
  params.append('jparams',JSON.stringify(data)); // 转换传参结构

  return axios.post(`dataApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
     return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err);
  })
}

// 字段搜索接口
export function getObjSearchResult(searchData,pageIndex,isBuyOnly,is_correct=1,is_alias=1){
  let params = new URLSearchParams();
  params.append('dtype',1);
  let rowSearch = Object.assign({},{buyable:isBuyOnly?'1':null},searchData.obj);
  let data = {
    wordStr:searchData.text||'',
    size:10,
    offset:pageIndex*10-10,
    format_rd:'search-k-w',
    is_correct:is_correct, // 默认开启 错误匹配
    is_alias:is_alias, // 默认开启别名适配
    rowSearch:rowSearch
  }
  params.append('jparams',JSON.stringify(data)); // 转换传参结构

  return axios.post(`dataApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
     return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err);
  })
}


// 右侧 数据 导入
export function getRightSideData(){
  return axios.request('http://m.9kacha.com/staticConfig/all_conditems.json',{
    responseType: 'json',
  }).then((res)=>{ //数据链接成功
     return Promise.resolve(res)
  })
}

