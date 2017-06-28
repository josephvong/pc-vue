<template>
  <div id="app">
  	<div class="fix-header">
  		<div class="wrap">
  			<mainHeader></mainHeader>
  		</div>
  	</div>

		<el-row>
		  <el-col :span="4">
		  	<div class="main-left">
					<mainAside></mainAside>
				</div>
		  </el-col>
		  <el-col :span="20">
		  	<div class="main-right">
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

import mainHeader from 'components/mainHeader/mainHeader'
import mainAside from 'components/mainAside/mainAside'
import bottomPage from 'components/bottomPage/bottomPage'
export default {
  name: 'app',
  components:{
  	mainHeader,
  	mainAside,
  	bottomPage

  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
#app {
	margin:0 auto;
	width:100%;
	padding-top:100px;
	padding-bottom:160px;
	.fix-header{
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height: 100px;
		z-index: 100;
		.wrap{
			position: relative;
			margin:0 auto;
			width:100%;
			max-width: 1920px;
			border-bottom:1px solid red;
		}
	}
	.main-right{
		border-left:2px solid red;
		padding:20px;
		min-height: 600px;
	}
	/*脚部*/
	.fix-footer{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height: 150px;
		background-color: lightgreen;
		.wrap{
			margin:0 auto;
			width:100%;
			max-width: 1920px;
		}
	}

	/*@media only screen and (max-width:980px ){
   	.main-left{
   		position: fixed;
   		left:0;
   		top:100px;
   		background: yellow;
   		transform:translateX(-100%)
   	}
	}*/
}

</style>
