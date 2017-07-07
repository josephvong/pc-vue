<template>
<div class="correct-word" >
	<p>以下为您显示“<span>{{correctLetter}}</span>”的搜索结果。 仍然搜索：<span class="wrong-word" @click="wrongWordClick">{{searchData.text}}</span></p>
</div>
</template>
<script type="text/ecmascript-6">
import {mapGetters,mapMutations} from 'vuex'
import eventHub from 'assets/js/eventHub'  // 全局事件总线

export default {
	name: 'correctWord',
	props:{
		correctLetter:{
			type:String,
			default:''
		},

	},
	data(){
		return {

		}
	},
	computed:{

		//--------------------
    ...mapGetters([
      'searchData'
    ])
	},
	methods:{
		wrongWordClick(){ //错词点击
			this.$router.push({ path: '/result/1'}) // 切换路由
      setTimeout(()=>{this.$emit("wrongWordClick")},500)  // 组件 派发错词的点击事件

		},
		//--------------- 引入 Mutation 方法-----------------
    ...mapMutations({
      setSearchData:'SET_SEARCH_DATA', // 引入 mutation 中的 方法  映射给组件中的‘setSearchText’
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
.correct-word{
  width:100%;
  padding:0 25px;
  .wrong-word{
  	cursor:pointer;
  	color:red;
  }
}
</style>
<style  lang="less" rel="stylesheet/less">

</style>