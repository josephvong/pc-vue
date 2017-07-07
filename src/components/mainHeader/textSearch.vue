<template>
	<div class="text-search" > <!--文字搜索框--><!--  @select="handleSelect"-->
		 <el-autocomplete
		 	ref="autocomplete"
      class="auto-complete"
      v-model="inputValue"
      :fetch-suggestions="querySearch"
      placeholder="请输入想要搜索的酒"
      :trigger-on-focus="true"
      @select="handleSelect"
      size="large"
    ></el-autocomplete>
    <button ref="searchBtn" class="search-btn" @click="searchClick"><i class="iconfont">&#xe622;</i></button>
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

        this.setSearchData({text:item.value,obj:null})// 调用 vuex 里面的Mutation 函数

        eventHub.$emit('textSearchEnter') // 利用全局事件总线派发事件
      },
      searchClick(){  // 确认按钮跳转
      	if(this.inputValue){
      		this.$router.push({ path: '/result/1'}) // 切换路由

      		this.setSearchData({text:this.inputValue,obj:null})// 调用 vuex 里面的Mutation 函数

      		eventHub.$emit('textSearchEnter') // 利用全局事件总线派发事件
      	}
      },
      onCheckedChange(){
      	this.$router.push({ path: '/result/1'})
      	this.setBuyOnly(this.isBuyOnly)
      },

      //--------------- 引入 Mutation 方法-----------------
      ...mapMutations({
	    	setSearchData:'SET_SEARCH_DATA',// 将 mutation 里面的 ‘SET_SEARCH_DATA’（mut-types里面设的常量名）映射给组件中的‘setSearchDATA’
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
		/*eventHub.$on('tagSelect',()=>{
			if(this.inputValue!==''){
				this.inputValue=''
			}
		})*/

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
		flex:0 0 60px;
		width:100px;
		height: 82.5%;
		line-height:40px;
		color:white;
		border: 1px solid #cc1b4a;
		border-radius: 5px;
		background: #cc1b4a;
		>i{
			font-size: 20px;
			line-height:40px;
		}
	}
	.buy-only{
		position: absolute;
		display: inline-block;
		left:0; top:110%;
		height:28px;
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