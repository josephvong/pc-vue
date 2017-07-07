
export function suggestListNormalize(arr){
	return arr.map((item)=>{
		let obj = {};
		obj.value = item;
		return obj
	})
}

// 二维数 组转 对象
export function binArrToObj(arr){
	let obj ={};
	for (var i = 0; i < arr.length; i++) {
		if(obj[arr[i][0]]){
			obj[arr[i][0]] = obj[arr[i][0]]+','+ arr[i][1]
		}else{
			obj[arr[i][0]] = arr[i][1]
		}
	}
	return obj
}