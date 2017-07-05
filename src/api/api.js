import axios from 'axios'
import jsonp from 'jsonp'

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

export function getSearchResult(searchText,pageIndex,isBuyOnly,is_correct=1){
	let params = new URLSearchParams();
	params.append('dtype',1)
  let data = {
    wordStr:searchText,
    size:10,
    offset:pageIndex*10-10,
    format_rd:'search-k-w',
    is_correct:is_correct,
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

export function getRightSideData(){
  return axios.request('http://m.9kacha.com/staticConfig/all_conditems.json',{
    responseType: 'json',
  }).then((res)=>{ //数据链接成功
     return Promise.resolve(res)
  })
}

