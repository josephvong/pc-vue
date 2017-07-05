<template>
<div class="bottom-page" >
	<el-pagination
		v-if="totalMount"
    @current-change="handleCurrentChange"
    :page-size="10"
    :current-page.sync="currentPage"
    layout="prev, pager, next, jumper"
    :total="totalMount">
  </el-pagination>
</div>
</template>
<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
	name: 'bottomPage',
	props:{

	},
	data(){
		return {
      currentPage: 1
		}
	},
	computed:{
		routerIndex(){
			return this.$route.params.page
		},
		//--------------------
		...mapGetters([
			'totalMount',
			'searchText'
		])
	},
	methods:{
    handleCurrentChange(val) {
    	this.$router.push({ path: `/result/${val}`})
      console.log(`当前页: ${this.currentPage}`);
    }
	},
	watch:{
		/*searchText(){

		},*/
		routerIndex(newIndex){
			this.currentPage =  parseInt(newIndex)
		}
	},
	components:{

	},
	created(){

	},
	mounted(){
		//console.log(this.$route.params);
	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.bottom-page{
	position: absolute;
	left:50%;
	top:-28px;
	transform:translateX(-50%);
}
</style>
<style  lang="less" rel="stylesheet/less">
.el-pager li{
	border:0;
	margin:0 2px;
}
.el-pager li:hover {
  color: #961436;
}
.el-pagination button:hover {
  color: #961436;
}
.el-pager li.active{
	  border-color: #961436;
    background-color: #961436;
}
.el-pager li.active:hover{
	color:white;
}
</style>