<template>
	<div class="selection-tag">
		<!-- <div class="clean-btn" @click="onCleanBtnClick">清空</div> -->
		 <div class="tag" v-for="item in selectionArr" @click="selectTopTagClick(item)">
			{{item}}  <span>x</span>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
import eventHub from 'assets/js/eventHub'
export default {
	name: 'selectionTag',
	props:{
		selectionArr:{
			type:Array,
			default:[]
		}
	},
	data() {
		return {

		}
	},
	computed:{
		/*showListArr(){
			let newArr = this.selectionArr
		}*/
	},
	methods: {
		selectTopTagClick(item){
			this.$emit('selectionTopTagClick',item)
		},
		/*onCleanBtnClick(){
			eventHub.$emit('cleanTopTag')
		}*/
	},
	watch:{

	},
	created(){

	},
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.selection-tag{
	position: relative;
	padding:0 20px 10px 10px;
	border:1px solid blue;
	.clean-btn{
		position: absolute;
		top:0px; right:0;
		width:50px; height:30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
		color:white;
		border-radius:5px;
		background: blue;
	}
	.tag{
		display: inline-block;
		padding:0 15px 0 15px;
		margin:0 5px 5px 0;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
		color:white;
		border-radius:5px;
		background: red;
		.span{
			margin-left:5px;
			font-size:5px;
		}
	}

}

</style>
