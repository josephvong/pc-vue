<template>
	<div class='header'>
		<img class="logo" src="./logo.png"/>
		<div class="tool-wrap">
			<div class="search-wrap">
				<textSearch></textSearch>
				<div style="display:none" class="file-btn" @click.stop="openFile"></div>
			</div>
			<div class="image-wrap" v-show="fileSearch">
				<fileSearch></fileSearch>
			</div>
		</div>

	</div>
</template>
<script type="text/ecmascript-6">
import textSearch from './textSearch'
import fileSearch from './fileSearch'
export default {
	name: 'mainHeader',
	data(){
		return {
			fileSearch:false,

		}
	},
	components:{
		fileSearch,
		textSearch
	},
	methods:{
		openFile(){
			this.fileSearch = true
		},


	},
	mounted(){
		document.body.onclick=()=>{
			this.fileSearch=false
		}
	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.header{
	width:100%;
	max-width: 960px;
	margin:0 auto;
	position: relative;
	display:flex;
	align-items:center;
	justify-content:center;
	height:100px;

	.logo{
		position: fixed;
		width:auto;
		height:70px;
		left:20px;
		top:15px;

	}

	.tool-wrap{
		position: relative;
		width:700px;
		height:50px;
		.search-wrap{
			position:relative;
			width:100%;
			height:100%;
			.file-btn{
				position: absolute;
				width:30px;
				height:30px;
				right:-50px;
				top:10px;
				background: red;
			}
		}
		.image-wrap{
			position: absolute;
			width:100%;
			top:0px;
			left:0;
			z-index: 3;
			background:yellow;
		}
	}


}
</style>
