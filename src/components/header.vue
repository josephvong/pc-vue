<template>
	<div>
		<!--头部-->
		<header>
			<!--logo-->
			<div class="logo fl"><a href=""></a></div>
			<!--搜索框-->
			<div class="search fl">
				<div class="sea-l fl">
					<label for="" id="search-t">
						<input type="search" placeholder="请在此处输入要搜索的酒款或粘贴图片网址链接"><span @click="change"><!-- 小小照相机的位置--></span>
					</label>
				</div>
				<div class="sea-r fr">
					<label for="" id="sup">
						<input type="submit" value="搜索">
					</label>
				</div>
				<!--点击照相机出现的区域 -->
				<div class="pic" v-show="chu">
					<div class="tuo">
						<span>拖拽图片到这里</span>
						<span>+</span>
					</div>
					<div class="upd"><i>□</i>上传本地图片</div>
				</div>
			</div>
			<!--注册登陆-->
			<!--<div class="user fr">-->
				<!--<input type="submit" value="登陆" class="fl">-->
				<!--<input type="submit" value="注册">-->
			<!--</div>-->
		</header>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		name: 'headerV',
		data(){
			return {
				chu:false,
			}
		},methods:{
			change(){
				this.chu = !this.chu;
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	header{
		min-width: 720px;
		height:100px;
		background-color: #fff;
		.logo{
			width:200px;
			height:100px;
			margin-right: 5%;
			a{
				display: block;
				width: 100%;
				height: 100px;
				background: url("../../static/images/logo.png")no-repeat center center;
			}
		}
		.search{
			width:50%;
			height:100px;
			.sea-l{
				width: 85%;
				height:100%;
				input{
					width:100%;
					height:50px;
					margin-top: 25px;
					padding-left: 4%;
					border-radius: 5px 0 0 5px;
					border: 1px solid #ccc;
				}
				span{
					display: block;
					width: 5%;
					height: 50px;
					position: absolute;
					margin-left: 37%;
					margin-top: -48px;
					background: url("../../static/images/ka.png") no-repeat center center;
				}
			}
			.sea-r{
				width:15%;
				input{
					width: 100%;
					height: 50px;
					margin-top: 25px;
					border-radius: 0 5px 5px 0;
				}
			}
			.pic{
				min-width: 360px;
				width:50%;
				height: 200px;
				margin-top:75px;
				position: absolute;
				z-index: 99;
				border: 1px solid #ccc;
				border-top:none;
				border-radius: 0px 0px 5px 5px;
				background-color:#fff;
				.tuo{
					width:100%;
					height:50%;
					margin-top: 30px;
					text-align: center;
					background-color:#ddd;
					opacity: 0.5;
					>span{
						display: block;
						width: 100%;
					}
					>span:nth-of-type(2){
						font-size: 350%;
						color: #888;
					}
				}
				.upd{
					width:30%;
					height: 20%;
					line-height:35px;
					text-align: center;
					margin-left: 35%;
					margin-top: 3%;
					font-size: 90%;
					border: 2px dashed #ccc;
				}
			}
		}
		/*.user{*/
			/*width:12%;*/
			/*height:50px;*/
			/*line-height:50px;*/
			/*input{*/
				/*margin-top: 30px;*/
				/*width:40%;*/
				/*height:80%;*/
				/*border-radius: 5px;*/
				/*:focus{*/
					/*background-color: lightblue;*/
				/*}*/
			/*}*/
			/*input:nth-of-type(1){*/
				/*margin-right: 15px;*/
			/*}*/
		/*}*/
	}
</style>
