<template>
  <div class="result-view">
   <!--  <p>{{currentPage}} {{searchText}}</p>
    <div v-if="listData.length">{{listData.length}}</div> -->
    <noResult v-show="!listData.length"></noResult>
    <ul class="result-list" v-if="listData.length">
      <listItem v-for="(item,index) in listData" :wineData="item" :key="index"></listItem>
    </ul>
    <relateWord :relateWordArr="relateWordData"></relateWord>
  </div>
</template>
<script type="text/ecmascript-6">
import { getSearchResult} from 'api/api.js'
import {mapGetters,mapMutations} from 'vuex'

import listItem from 'components/listItem/listItem'
import noResult from 'base/noResult/noResult'
import relateWord from 'components/relateWord/relateWord'
  export default {
    name:'resultView',
    data(){
      return {
        listData:[],  // 结果列表数据
        relateWordData:[]  // 关联词语 列表数据

      }
    },
    computed:{
      currentPage(){
        return this.$route.params.page
      },
      //--------------------
      ...mapGetters([
        'searchText',
        'buyOnly'
      ])
    },
    methods:{
      searchDataGet(searchText,pageIndex,buyOnly){ // 获取数据
        getSearchResult(searchText,pageIndex,buyOnly).then((res)=>{
          if(res.description=="ok"){
            this.setTotalMount(res.matchedNum)
            this.listData = res.jsonData;
            this.relateWordData = res.wordRelated
            document.body.scrollTop = 0;
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
        this.searchDataGet(this.searchText,newPage,this.buyOnly)
        console.log('改变：'+ newPage+'+'+ this.searchText)
      },
      searchText(newText){
        this.searchDataGet(newText,this.currentPage,this.buyOnly)
        console.log('搜索改变'+newText+'+'+ this.currentPage)
      },
      buyOnly(newBuyOnly){
        this.searchDataGet(this.searchText,this.currentPage,newBuyOnly)
      }
    },
    components:{
      listItem,noResult,relateWord
    },
    created(){
      if(!this.searchText){
        this.$router.push({path:"/default"})
      }else{
        this.searchDataGet(this.searchText,this.currentPage,this.buyOnly)
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
  .result-list{
    padding:10px;
  }
}
</style>
