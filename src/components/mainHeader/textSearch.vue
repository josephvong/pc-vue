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
    <div class="buy-only">
			<el-checkbox v-model="isBuyOnly" @change="onCheckedChange" >只查找可购买</el-checkbox>
    </div>
   <!-- 	<label>只显示可购买</label> <input  type="checkbox" /> -->
	</div>
</template>
<script type="text/ecmascript-6">
import {getWordSuggest} from 'api/api.js'
import {suggestListNormalize} from 'assets/js/cusFn'
import {mapMutations} from 'vuex'
import eventHub from 'assets/js/eventHub'

export default {
	name: 'textSearch',
	data(){
		return {
      inputValue: '',
      isBuyOnly:false
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
      handleSelect(item) {  // 选中跳转
      	this.$router.push({
      		path: '/result/1'
      	}) // 切换路由
        this.setSearchText(item.value)
      },
      searchClick(){  // 确认按钮跳转
      	if(this.inputValue){
      		this.$router.push({ path: '/result/1'}) // 切换路由
      		this.setSearchText(this.inputValue)
      	}
      },
      onCheckedChange(){
      	this.setBuyOnly(this.isBuyOnly)
      },
      //--------------- 引入 Mutation 方法-----------------
      ...mapMutations({
	      setSearchText:'SET_SEARCH_TEXT', // 将 mutation 里面的 ‘SET_SEARCH_TEXT’（mut-types里面设的常量名）映射给组件中的‘setSearchText’
	    	setBuyOnly:'SET_BUY_ONLY'
	    })

	},
	mounted(){
		eventHub.$on('tagSelect',()=>{
			if(this.inputValue!==''){
				this.inputValue=''
			}
		})
	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">

.text-search{
	position: relative;
	width:100%;
	height:100%;
	display: flex;
	align-items: center;
	border:1px solid red;
	transform:translateY(-15px);
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
	.buy-only{
		position: absolute;
		display: inline-block;
		left:0; top:110%;
		height:28px;
	}

}

</style>
