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
					<button @click="cleanTreeSelect">清空选中</button>
				</div>
				<div class="select-wrap">
					<treeSelect ref="treeSelect" @tagSelect="onTreeTagSelect"></treeSelect>
				</div>
			</div>
		</div>

		<el-row type="flex" justify="center">  <!--body 主体 -->
		  <el-col  :md="{span:19,offset:5}" :lg="{span:20,offset:4}">
		  	<div class="main-right">
		  		<selectionTag v-if="selectionArr.length" :selectionArr="selectionArr"
		  									@selectionTopTagClick="onTopTagClick"
		  		></selectionTag>

					<router-view>
					</router-view>

				</div>
		  </el-col>
		</el-row>

		<footer class="fix-footer">
			<div class="wrap">
				<div class="page-wrap">
					<bottomPage></bottomPage>
				</div>
			</div>
		</footer>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

import mainHeader from 'components/mainHeader/mainHeader'
import bottomPage from 'components/bottomPage/bottomPage'
import treeSelect from 'components/treeSelect/treeSelect'
import selectionTag from 'components/selectionTag/selectionTag'

export default {
  name: 'app',
  data(){
  	return {
  		selectionArr:[]  // 左侧列表 选中 常量 数组
  	}
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
  		let index= this.selectionArr.indexOf(text) // 获取点击标签index（位置）
  		this.selectionArr.splice(index,1);  // 在 selectionArr 删掉目标 tag
  		this.$refs.treeSelect.removeSingleInput(text,index);
  	},

  	//------------------------------------------------------------
	  ...mapMutations({
      setSearchText:'SET_SEARCH_TEXT'
    })
  },
  watch:{
  	selectionArr(newArr,oldArr){
  		let searchText ='';
  		if(!newArr.length){
  			this.$router.push({
	    		path: '/default'
	    	})
  		}else{
  			searchText = newArr.join();
  			console.log(searchText);
  			this.$router.push({
	    		path: '/result/1'
	    	})
	    	this.setSearchText(searchText)
  		}


  	}
  },
  components:{
  	mainHeader,
  	bottomPage,
  	treeSelect,
  	selectionTag
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
		background: white;
		.wrap{
			position: relative;
			margin:-1px auto 0;
			width:100%;
			max-width: 1920px;
		}
	}

	.main-left{
		position: fixed;
		left:0;
		top:100px;
		bottom:100px;
		width:250px;
		background:white;
		transition:all 0.5s;
		z-index: 100;
		.wrap{
			position: relative;
			width:100%;
			height:100%;
			padding-top:50px;
			overflow: hidden;
			.tool-top{
				position: absolute;
				top:0px; left:0;
				width:100%; height:50px;
				padding:10px 0;
				text-align: center;
				button{
					width:50px; height:30px;line-height: 30px;
					margin: 0 10px;
					border-radius:5px;
					color:white;
					background: red;
				}
			}
			.select-wrap{
				width:100%;
				height:100%;
				padding:20px 0;
				overflow-y: scroll;
			}
		}
	}
	.main-right{
		margin:0 auto;
		padding:20px 40px;
		min-height: 600px;
	}

	/*脚部*/
	.fix-footer{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height: 80px;
		background-color: lightgreen;
		.wrap{
			margin:0 auto;
			width:100%;
			max-width: 1920px;
		}
	}
	@media only screen and (min-width:1440px ){
   	.main-left{
	   	 width:300px;
   	}
	}
	@media only screen and (max-width:992px ){
   	.main-left{
   		background: yellow;
   		transform:translateX(-95%)
   	}
   	.main-left:hover{
   		transform:translateX(0%)
   	}
	}
}

</style>
