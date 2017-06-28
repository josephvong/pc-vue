
export function suggestListNormalize(arr){
	return arr.map((item)=>{
		let obj = {};
		obj.value = item;
		return obj
	})
}