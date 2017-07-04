<template>
<div class="relate-word" >
	<h4>相关搜索</h4>
	<div class="word-wrap">
		<span v-for="item in relateWordArr" @click="relateWordSelect(item)">{{item}}</span>
	</div>
</div>
</template>
<script type="text/ecmascript-6">
import {mapGetters,mapMutations} from 'vuex'
import eventHub from 'assets/js/eventHub'  // 全局事件总线

export default {
	name: 'relateWord',
	props:{
		relateWordArr:{
			type:Array,
			default:[]
		}
	},
	data(){
		return {

		}
	},
	computed:{


	},
	methods:{
		relateWordSelect(item){
			this.$router.push({ path: '/result/1'}) // 切换路由
      this.setSearchText(item);
      eventHub.$emit("relateWordClick",item);  // 从全局事件总线 中派发 事件

		},
		//--------------- 引入 Mutation 方法-----------------
      ...mapMutations({
	      setSearchText:'SET_SEARCH_TEXT', // 引入 mutation 中的 方法  映射给组件中的‘setSearchText’
	    })
	},
	watch:{

	},
	components:{

	},
	created(){

	},
	mounted(){

	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.relate-word{
  width:100%;
  padding: 10px;
  h4{
  	line-height: 40px;
  	font-size: 26px;
  	color:#961436;
  }
	.word-wrap{
		padding:10px;
		span{
			cursor:pointer;
			margin-right:15px;
			line-height: 30px;
			font-size: 20px;
		}:hover{
			color:#961436;
		}
	}
}
</style>
<style  lang="less" rel="stylesheet/less">

</style>