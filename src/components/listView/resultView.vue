<template>
  <div class="result-view">
    <p>{{currentPage}} {{searchText}}</p>
    <div v-if="listData.length">{{listData.length}}</div>
    <ul v-if="listData.length">
      <li v-for="item in listData">{{item.name.name_ch}}</li>
    </ul>

  </div>
</template>
<script type="text/ecmascript-6">
import { getSearchResult} from 'api/api.js'
import {mapGetters,mapMutations} from 'vuex'
  export default {
    name:'resultView',
    data(){
      return {
        listData:[],
      }
    },
    computed:{
      currentPage(){
        return this.$route.params.page
      },
      //--------------------
      ...mapGetters([
        'searchText'
      ])
    },
    methods:{
      searchDataGet(searchText,pageIndex){ // 获取数据
        getSearchResult(searchText,pageIndex).then((res)=>{
          //console.log(res);
          if(res.descption=="ok"){
            this.setTotalMount(res.matchedNum)
            this.listData = res.jsonData;
          }
        })
      },

      //-------------Mutations----------
      ...mapMutations({
        setTotalMount:'SET_TOTAL_MOUNT'
      })
    },
    watch:{
      currentPage(newPage){
        this.searchDataGet(this.searchText,newPage)
        console.log('改变：'+ newPage+'+'+ this.searchText)
      },
      searchText(newText){
        this.searchDataGet(newText,this.currentPage)
        console.log('搜索改变'+newText+'+'+ this.currentPage)
      }
    },
    created(){
      if(!this.searchText){
        this.$router.push({path:"/default"})
      }else{
        this.searchDataGet(this.searchText,this.currentPage)
        console.log('进入时'+ this.searchText+'+'+ this.currentPage)
      }

    },
    mounted(){

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
.result-view{
  width:100%;
  min-height:300px;
  border:1px solid red;

}
</style>
