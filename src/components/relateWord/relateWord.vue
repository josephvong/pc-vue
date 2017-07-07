<template>
<div class="relate-word" >
	<h4>相关搜索</h4>
	<div class="word-wrap">
		<div class="word" v-for="item in relateWordArr" @click="relateWordSelect(item)">
			<span>{{item}}</span>
		</div>
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
      this.setSearchData({text:item,obj:null});
      eventHub.$emit("relateWordClick",item);  // 从全局事件总线 中派发 事件, 此事件在 textSearch组件 中引用

		},
		//--------------- 引入 Mutation 方法-----------------
      ...mapMutations({
	      setSearchData:'SET_SEARCH_DATA', // 引入 mutation 中的 方法  映射给组件中的‘setSearchData’
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
  padding:10px 0px;
  h4{
  	line-height: 40px;
  	font-size: 22px;
  	color:#961436;
  }
	.word-wrap{
		padding:10px 0;
		.word{
			display:inline-block;
			text-align: center;
			cursor:pointer;
			padding:0 20px;
			line-height: 30px;
			span{
				font-size: 16px;
				color:blue;
				border-bottom:1px solid blue;
			}:hover{
				color:#961436;
				border-bottom:1px solid #961436;
			}
		}
	}
}
</style>
<style  lang="less" rel="stylesheet/less">

</style>