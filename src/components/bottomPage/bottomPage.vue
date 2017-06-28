<template>
<el-row>
	  <el-col :span="20" :offset="6" v-if="totalMount"><!-- :page-size="totalPage" -->
		  <el-pagination
	      @current-change="handleCurrentChange"
	      :page-size="10"
	      :current-page.sync="currentPage"
	      layout="prev, pager, next, jumper"
	      :total="totalMount">
	    </el-pagination>
	  </el-col>
</el-row>
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
		//--------------------
		...mapGetters([
			'totalMount'
		])
	},
	methods:{
    handleCurrentChange(val) {
    	this.$router.push({ path: `/result/${val}`})
      //console.log(`当前页: `);
    }
	},
	components:{

	},
	created(){

	},
	mounted(){

	}
}
</script>
<style scoped lang="less" rel="stylesheet/less">



</style>
