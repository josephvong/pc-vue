<template>
  <div id="app">
  	<div class="fix-header">
  		<div class="wrap">
  			<mainHeader></mainHeader>
  		</div>
  	</div>

		<!--  -->
		<div class="main-left">  <!--body 侧栏 -->
			<div class="wrap">
				<div class="tool-top">
					<button @click="cleanTreeSelect">重新选择</button>
				</div>
				<div class="select-wrap">
					<treeSelect ref="treeSelect" @tagSelect="onTreeTagSelect"></treeSelect>
				</div>
			</div>
		</div>

  	<div class="main-right"> <!--body 主体 -->
  		<selectionTag v-if="selectionArr.length" :selectionArr="selectionArr"
  									@selectionTopTagClick="onTopTagClick"
  		></selectionTag>

			<router-view>
			</router-view>

		</div>

		<footer class="fix-footer">
			<div class="wrap">
				<bottomPage></bottomPage>
			</div>
		</footer>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
import eventHub from 'assets/js/eventHub'
import {binArrToObj} from 'assets/js/cusFn'

import mainHeader from 'components/mainHeader/mainHeader'
import bottomPage from 'components/bottomPage/bottomPage'
import treeSelect from 'components/treeSelect/treeSelect'
import selectionTag from 'components/selectionTag/selectionTag'


export default {
  name: 'app',
  data(){
  	return {
  		selectionArr:[],  // 左侧列表 选中 常量 数组
  		textSearchMode:false  // 是否输入框搜索状态 true 为编辑搜索，false 为选择
  	}
  },
  computed:{

  	//----------------------------
  	...mapGetters([
      'searchData'
    ])
  },
  methods:{
  	cleanTreeSelect(){  // 左侧点击删除 按钮
  		this.$refs.treeSelect.cleanSelectInput();
  	},

  	onTreeTagSelect(arr){  // 左侧 点击 树状 列表选项
  		this.selectionArr = [];
  		this.selectionArr = arr
  	},

  	onTopTagClick(text){  // 顶部选中标签 点击事件
  		let index= this.selectionArr.findIndex((item)=>{return item[1]==text}) // 获取点击标签index（位置）
  		this.selectionArr.splice(index,1);  // 在 selectionArr 删掉目标 tag
  		this.$refs.treeSelect.removeSingleInput(text,index);
  	},
  	//------------------------------------------------------------
	  ...mapMutations({
      setSearchData:'SET_SEARCH_DATA',
    }),

  },
  watch:{
  	selectionArr(newArr,oldArr){ // 监控 选择选项数组的改变
  		let searchText ='';
  		let tempObj = Object.assign({},this.searchData);
  		if(!newArr.length){  // 若数组 为空时 （顶部选项被清空）
  			if(!this.textSearchMode){ // 判断 是否 是 通过 编辑搜索的方式来清空，不是的话 回到默认页面
  				if(tempObj.text){ //如果有 搜索文字
						tempObj.obj = null
		    		this.setSearchData(tempObj);
  				}else{
  					//this.$router.push({ path: '/default' })
  					this.setSearchData({text:'',obj:null});
  				}
  			}
  		}else{  // 数组没有清空时 ，拼接数组 进行搜索
  			//searchText = newArr.join();
  			this.$router.push({
	    		path: '/result/1'
	    	})
	    	this.textSearchMode = false
	    	tempObj.obj = binArrToObj(newArr)
	    	this.setSearchData(tempObj);

	    	//this.setSearchData({text:'',obj:binArrToObj(newArr)})
  		}
  	}
  },
  components:{
  	mainHeader,
  	bottomPage,
  	treeSelect,
  	selectionTag,
  },
  mounted(){
  	// 监听 输入框 派发的全局事件
  	eventHub.$on('textSearchEnter',()=>{
  		this.textSearchMode = true;  // 将 搜索模式 设置为 输入搜索 模式
  		this.selectionArr = [];  // 选项搜索 模式 的数组清空
  	})

		// 监听 底部 关联词 派发的全局事件
  	eventHub.$on('relateWordClick',(wordStr)=>{
			this.textSearchMode = true;  // 将 搜索模式 设置为 输入搜索 模式
  		this.selectionArr = [];  // 选项搜索 模式 的数组清空
		})
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
#app {
	margin:0 auto;
	width:100%;
	padding-top:100px;
	padding-bottom:140px;


	.fix-header{
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height: 100px;
		border-bottom:1px solid #ccc;
		z-index: 100;
		background-color: #fff;

		.wrap{
			position: relative;
			margin:-1px auto 0;
			width:100%;
			max-width: 1920px;
			min-width: 1200px;
		}
	}

	.main-left{
		position: fixed;
		left:0;
		top:100px;
		bottom:40px;
		width:20%;
		min-width: 240px;
		background:white;
		transition:all 0.5s;
		z-index: 100;
		.wrap{
			position: relative;
			width:100%;
			height:100%;
			padding-bottom:50px;
			overflow:hidden;
			.tool-top{
				position: absolute;
				bottom:0px; left:0;
				width:100%; height:50px;
				padding:10px 0;
				text-align: center;
				button{
					width:100px; height:30px;line-height: 30px;
					font-size: 14px;
					margin: 0 10px;
					border-radius:5px;
					color:white;
					transform:translateX(-10px);
					background: #961436;
				}
			}
			.select-wrap{
				width:100%;
				height:100%;
				padding:0 0 20px 0;
				overflow-y: scroll;
			}
		}
	}
	.main-right{
		width:97%;
		padding:15px 0;
		min-height: 600px;
	}

	/*脚部*/
	.fix-footer{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height: 40px;
		padding-top: 30px;
		background-color: #e6e6e6;
		.wrap{
			position: relative;
			width:100%;
			max-width: 1920px;
			margin:0 auto;
		}
	}

	@media only screen and (max-width:1200px ){
   	.main-left{
   		transform:translateX(-95%)
   	}
   	.main-left:hover{
   		transform:translateX(0%)
   	}
   	.main-right{
			padding:15px 0px 15px 0px;
		}
	}
}

</style>
