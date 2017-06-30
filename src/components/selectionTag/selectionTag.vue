<template>
	<div class="selection-tag">
		<div class="tag" v-for="item in selectionArr" @click="selectTopTagClick(item)">
			{{item}}  <span>x</span>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">

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
	methods: {
		selectTopTagClick(item){
			this.$emit('selectionTopTagClick',item)
		},

	},
	created(){

	},
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.selection-tag{
	padding:0 10px 10px 10px;
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
