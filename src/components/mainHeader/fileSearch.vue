<template>
<div class="file-search" @click.stop>
	<div class="url-wrap"> <!--url输入框-->
		<div class="input-wrap">
			<input type="text" placeholder="填入url" />
		</div>
		<button class="search-btn">搜素2</button>
	</div>
	<div class="drag-wrap">
		<div class="drag-place">图片拖拽到这里</div>
	</div>
	<div class="file-wrap">
		<div class="file-place">点击图片上传</div>
	</div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
	name: 'fileSearch',
	data(){
		return {

		}
	},
	methods:{

	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.file-search{
	width:100%;
	background:#DEDEDE;
	.url-wrap{
		width:100%;
		height:50px;
		display: flex;
		text-align: center;
		.input-wrap{
			flex:1 1 auto;
			height:100%;
			position: relative;
			margin-right:5px;
			border:1px solid green;
			border-radius:5px;
			padding:0 50px 0 10px;
			text-align: center;
			background: white;
			input{
				width:100%;
				height:100%;
				line-height: 50px;
				font-size: 18px;
			}
		}
		.search-btn{
			flex:0 0 100px;
			width:100px;
			height: 100%;
			color:white;
			background: blue;
		}
	}
	.drag-wrap{
		width:100%;
		height:80px;
		padding:10px;
		.drag-place{
			width:80%;
			height:100%;
			margin:0 auto;
			text-align: center;
			background: gray;
		}
	}
	.file-wrap{
		width:100%;
		height:100px;
		padding:10px;
		.file-place{
			width:80%;
			height:100%;
			margin:0 auto;
			text-align: center;
			background: #ccc;
		}
	}
}
</style>
