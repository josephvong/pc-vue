<template>
	<div class="text-search" @click.stop> <!--文字搜索框-->
		<vue-instant   v-model="searchValue" :disabled="false"   :show-autocomplete="true" :autofocus="false" :suggestions="indexList" name="customName" placeholder="custom placeholder" type="google" >

		</vue-instant>
		<div class="img-btn" @click.stop="fileBtnClick"></div>
		<!--<div class="input-wrap">

			 <input type="text"   @keyup="keyUpHandle"/>

			<ul class="result-list" v-if="indexList.length">
				<li></li>
			</ul>
		</div>
		<button class="search-btn">搜素</button> -->
	</div>
</template>
<script type="text/ecmascript-6">
import {getWordSuggest} from 'api/api.js'
export default {
	name: 'textSearch',
	data(){
		return {
			indexList:[],
			searchValue:''
		}
	},
	components:{

	},
	methods:{
		fileBtnClick(){ // 相机按钮点击
			this.$emit("fileBtnClick")
		},

		keyUpHandle(){ // 输入框输入时间
			console.log(event.target.value)
		},

		wordListRefresh(){ // 动态获取建议列表

		}
	},
	mounted(){
		getWordSuggest();
	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">

.text-search{
	width:100%;
	height:100%;
	display: flex;
	.img-btn{
		position: absolute;
		width:30px;
		height:30px;
		right:10px;
		top:10px;
		background: red
	}
	.input-wrap{
		flex:1 1 auto;
		height:100%;
		position: relative;
		margin-right:5px;
		border:1px solid #ccc;
		border-radius:5px;
		padding:0 50px 0 10px;
		.img-btn{
			position: absolute;
			width:30px;
			height:30px;
			right:10px;
			top:10px;
			background: red
		}
		input{
			width:100%;
			height:100%;
			line-height: 50px;
			font-size: 18px;
		}
		.result-list{
			position: absolute;
			width:100%;
			left:0;
			top:55px;
			border:1px solid #ccc;
			z-index: 3;
			background: white;
			li{
				height:30px;
				line-height: 30px;
				padding-left:5px;
				text-align: left;
				border-top:1px solid #ccc;

			}
			li:nth-of-type(1){
				border-top:none;
			}
		}
	}
	.search-btn{
		flex:0 0 100px;
		width:100px;
		height: 100%;
		color:white;
		background: blue;
	}
}

</style>
