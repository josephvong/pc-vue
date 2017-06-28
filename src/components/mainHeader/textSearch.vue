<template>
	<div class="text-search"> <!--文字搜索框--><!--  @select="handleSelect"-->
		 <el-autocomplete
      class="auto-complete"
      v-model="inputValue"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
      size="large"
    ></el-autocomplete>
    <button class="search-btn" @click="searchClick">搜索</button>
	</div>
</template>
<script type="text/ecmascript-6">
import {getWordSuggest} from 'api/api.js'
import {suggestListNormalize} from 'assets/js/cusFn'
import {mapMutations} from 'vuex'
export default {
	name: 'textSearch',
	data(){
		return {
      inputValue: '',
      //suggestion:[]
		}
	},
	components:{

	},
	methods:{
		 querySearch(queryString, cb) {
        let suggestion = null
        if(queryString){
        	getWordSuggest(queryString).then((res)=>{
	        	suggestion = suggestListNormalize(res.wordOnSuggest)
	        	cb(suggestion);
	        })
        }
      },
      handleSelect(item) {
      	this.$router.push({
      		path: '/result/1'
      	}) // 切换路由
        this.setSearchText(item.value)
        /*getSearchResult(item.value).then((res)=>{
        	console.log(res)
        })*/
      },
      searchClick(){
      	if(this.inputValue){
      		this.$router.push({ path: '/result/1'}) // 切换路由
      		this.setSearchText(this.inputValue)
      	}

      	//alert(this.inputValue);
      	//this.$router.push({ path: 'result'})
      },


      //--------------- 引入 Mutation 方法-----------------
      ...mapMutations({
	      setSearchText:'SET_SEARCH_TEXT' // 将 mutation 里面的 ‘SET_SEARCH_TEXT’（mut-types里面设的常量名）映射给组件中的‘setSearchText’
	    })

	},
	mounted(){
		//this.restaurants = this.loadAll();
		//this.loadAll()
	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">

.text-search{
	width:100%;
	height:100%;
	display: flex;
	align-items: center;
	.auto-complete{
		flex:1 1 auto;
		margin-right:10px;
	}
	.search-btn{
		flex:0 0 100px;
		width:100px;
		height: 80%;
		color:white;
		background: blue;
	}

}

</style>
