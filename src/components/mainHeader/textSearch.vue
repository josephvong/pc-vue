<template>
	<div class="text-search" > <!--文字搜索框--><!--  @select="handleSelect"-->
		 <el-autocomplete
		 	ref="autocomplete"
      class="auto-complete"
      v-model="inputValue"
      :fetch-suggestions="querySearch"
      placeholder=""
      :trigger-on-focus="true"
      @select="handleSelect"
      size="large"
    ></el-autocomplete>
    <button ref="searchBtn" class="search-btn" @click="searchClick">搜索</button>
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
      isBuyOnly:false,
      suggestion:[]
		}
	},
	components:{

	},
	methods:{
		 querySearch(queryString, cb) {
        let suggestion = null
        if(queryString){
        	getWordSuggest(queryString).then((res)=>{
	        	this.suggestion = suggestListNormalize(res.wordOnSuggest)
	        	cb(this.suggestion);
	        })
        }
      },
      handleSelect(item) {  // 选中跳转
      	this.$router.push({
      		path: '/result/1'
      	}) // 切换路由
        this.setSearchText(item.value) // 调用 vuex 里面的Mutation 函数
        eventHub.$emit('textSearchEnter') // 利用全局事件总线派发事件
      },
      searchClick(){  // 确认按钮跳转
      	if(this.inputValue){
      		this.$router.push({ path: '/result/1'}) // 切换路由
      		this.setSearchText(this.inputValue)  // 调用 vuex 里面的Mutation 函数
      		eventHub.$emit('textSearchEnter') // 利用全局事件总线派发事件
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
		let This = this; // 组件的 实例 this
		document.body.onkeyup=function(event){  // 搜索按钮 监听 ‘键盘Enter’ 按键
			if(event.keyCode==13  ){//&& !This.suggestion.length
				This.searchClick()
				This.$refs.searchBtn.focus();
			}
		}
		// 监听全局左侧栏的选择事件
		eventHub.$on('tagSelect',()=>{
			if(this.inputValue!==''){
				this.inputValue=''
			}
		})

		// 监听全局 底部 关联词 点击 事件
		eventHub.$on('relateWordClick',(wordStr)=>{
			this.inputValue = wordStr;
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
	transform:translateY(-15px);
	.auto-complete{
		flex:1 1 auto;
		margin-right:10px;
	}
	.search-btn{
		flex:0 0 100px;
		width:100px;
		height: 80%;
		line-height:  40px;
		font-size: 18px;
		color:white;
		border-radius:5px;
		background: #cc1b4a;
	}
	.buy-only{
		position: absolute;
		display: inline-block;
		left:0; top:110%;
		height:28px;
		.el-checkbox{
			color:white;
		}
	}
}

</style>
<style lang="less" rel="stylesheet/less">
.el-checkbox__inner.hover{
  border-color: #cc1b4a !important;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  background-color: white;
  border-color: #cc1b4a;
}
.el-checkbox__input.is-checked .el-checkbox__inner{
  background-color: #cc1b4a !important;
  border-color: #cc1b4a !important;
}
</style>