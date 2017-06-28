import axios from 'axios'

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

export function getSearchResult(searchText,pageIndex){
	let params = new URLSearchParams();
	params.append('dtype',1)
  let data = {
    wordStr:searchText,
    size:10,
    offset:pageIndex*10-10,
  }
  params.append('jparams',JSON.stringify(data)); // 转换传参结构

  return axios.post(`dataApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
     return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err);
  })
}