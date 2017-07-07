<template>
  <div class="result-view">
      <correctWord v-show="correctShow" :correctLetter="correctLetter" @wrongWordClick="onWrongWordClick">
      </correctWord>
    <noResult v-show="!listData.length"></noResult>
    <ul class="result-list" v-if="listData.length">
      <listItem v-for="(item,index) in listData" :wineData="item" :key="index"></listItem>
    </ul>
    <relateWord :relateWordArr="relateWordData"></relateWord>
  </div>
</template>
<script type="text/ecmascript-6">
import { getObjSearchResult} from 'api/api.js'
import {mapGetters,mapMutations} from 'vuex'

import listItem from 'components/listItem/listItem'
import noResult from 'base/noResult/noResult'
import relateWord from 'components/relateWord/relateWord'
import correctWord from 'components/correctWord/correctWord'
  export default {
    name:'resultView',
    data(){
      return {
        listData:[],  // 结果列表数据
        relateWordData:[],  // 关联词语 列表数据
        correctLetter:"",   // 纠错词
        correctShow:false   // 控制 纠错提示 的显示

      }
    },
    computed:{
      currentPage(){
        return this.$route.params.page
      },
      //--------------------
      ...mapGetters([
        'searchData',// 搜索数据
        'buyOnly',    // 是否 仅选择购买
      ])
    },
    methods:{
      searchDataGet(searchData,pageIndex,buyOnly,is_correct,is_alias){ // 获取数据
        getObjSearchResult(searchData,pageIndex,buyOnly,is_correct,is_alias).then((res)=>{
          if(res.description=="ok"){
            this.setTotalMount(res.matchedNum) // 定义 匹配总数，控制分页的显示
            this.listData = res.jsonData;   // 定义数据列表
            this.relateWordData = res.wordRelated  // 定义 关联词 （列表底部）
            this.correctLetter = res.wordOnSearch  // 定义 纠错词
            this.correctShow = res.wordOnSearch==res.wordOnInput?false:true  //判断是否显示纠错提示
            document.body.scrollTop = 0;  // 回到页面顶部
          }
        })
      },

      onWrongWordClick(){ //
        this.searchDataGet(this.searchData,this.currentPage,this.buyOnly,0,0)
      },

      //-------------Mutations----------
      ...mapMutations({
        setTotalMount:'SET_TOTAL_MOUNT'  // 根据返回的匹配总条数，改变 store中的totalMount 的属性（控制分页的变化）
      })
    },
    watch:{  // 监听数据的改变进行搜索
      currentPage(newPage){
        this.searchDataGet(this.searchData,newPage,this.buyOnly)
        //console.log('改变：'+ newPage+'+'+ this.searchText)
      },
      searchData(newData){
        this.searchDataGet(newData,this.currentPage,this.buyOnly)
        if(!newData.text && !newData.obj){ // 搜索数据为空（双空），回到默认页面
          this.$router.push({path:"/default"})
        }
      },
      buyOnly(newBuyOnly){
        this.searchDataGet(this.searchData,this.currentPage,newBuyOnly)
      },

    },
    components:{
      listItem,noResult,relateWord,correctWord
    },
    created(){
      if(!this.searchData.text && !this.searchData.obj){ // 搜索数据为空（双空），回到默认页面
        this.$router.push({path:"/default"})
      }else{
        this.searchDataGet(this.searchData,this.currentPage,this.buyOnly) // 进入组件 时 执行搜索
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
    padding:10px 0;
  }
}
</style>
