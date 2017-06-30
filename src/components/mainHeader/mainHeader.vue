<template>
	<div class='header'>
		<!--logo-->
<!-- 		<div class="logo"><a href=""></a></div>  -->
		<!--搜索框-->
		<div class="tool-wrap">
			<div class="search-wrap">
				<textSearch></textSearch>
				<div class="file-btn" @click.stop="openFile"></div>
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
	background-color: #fff;
	.logo{
		position: absolute;
		width:150px;
		height:50px;
		left:0;
		top:50%;
		transform:translateY(-50%);
		a{
			display: block;
			margin:0 auto;
			width: auto;
			height: 100%;
			background: url("./logo.png") no-repeat center center;
		}
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
