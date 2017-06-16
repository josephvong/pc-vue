<template>
	<div>
		<headerV></headerV>
		<!--版心-->
		<main>
			<asideV></asideV>
			<listV></listV>
		</main>
		<!--脚部-->
		<footer></footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import headerV from './header.vue';
	import asideV from './aside.vue';
	import listV from './list.vue';
	export default {
		name: 'seacher',
		data(){
			return {

			}
		},
		components:{
			headerV,
			asideV,
			listV
		},
		methods:{

		}
	}
</script>
<style lang="less" rel="stylesheet/less">
/*版心*/
main{
	min-width: 720px;
	/*width:100%;*/
	height:auto;
	}
/*脚部*/
footer{
		width:100%;
		height: 200px;
		background-color: lightgreen;
	}
</style>
