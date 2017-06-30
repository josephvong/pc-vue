<template>
<div class="main-aside">
		<div class="tool-top"></div>
		<treeSelect></treeSelect>

</div>
</template>
<script type="text/ecmascript-6">
//import treeSelect from 'components/treeSelect/treeSelect'
export default {
	name: 'mainAside',
	data() {
		return {
			//tagData:null,
			//activeNames:['残糖量'],
		}
	},
	methods: {
		/*handleChange(){
			console.log(this.activeNames);
		}*/
	},
	components:{
		treeSelect
	},
	created(){

	},
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.main-aside{
	width:100%;
	.tool-top{
		position: absolute;
		width:100%;
	}

}
</style>
