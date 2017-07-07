<template>
  <li class="list-item" >
    <div class="pic fl">
      <img :src="wineData.pic_url" :data-link="wineData.h5_url" @click.prevent="linkClick"/>
    </div>
    <div class="introduce">
        <!--酒名称-->
       <div class="title">
         <h5>
           <a :href="wineData.h5_url"  target="_blank">
             <span v-html="wineData.name.name_ch" v-if="wineData.name.name_ch"></span>
             <span v-html="wineData.name.name_en"></span>
           </a>
         </h5>
         <p v-show="wineData.price || wineData.buy_info.length">
           <span v-show="wineData.price"><i>￥</i>{{wineData.price}}.00</span>
         </p>
       </div>

        <!--价格展示-->
        <div class="shangjia" v-if="wineData.retailers.length">
          商家：
            <span v-for="(item, index) in wineData.retailers" v-html="wineData.retailers[index].name_ch"></span>
        </div>

        <!--地理-->
        <div class="geography">
          <ul>
            <li class="guojia" v-if="wineData.country.name_ch">
                <i class="iconfont">&#xe606;</i>
              <span v-html="wineData.country.name_ch"></span>/<span v-html="wineData.country.name_en"></span>
            </li>
            <li class="chanqu" v-show="wineData.region.name_ch">
                <i class="iconfont">&#xe603;</i>
              <span v-html="wineData.region.name_ch"></span>/<span v-html="wineData.region.name_en"></span>
            </li>
            <li class="zichanqu" v-show="wineData.sub_region" v-if="wineData.sub_region.name_ch">
                <i class="iconfont">&#xe61a;</i>
              <span v-html="wineData.sub_region.name_ch"></span>/<span v-html="wineData.sub_region.name_en"></span>
            </li>
            <li class="jiuzhuang" v-show="wineData.winery" v-if="wineData.winery.name_ch">
                <i class="iconfont">&#xe60b;</i>
              <span v-html="wineData.winery.name_ch"></span>/<span v-html="wineData.winery.name_en"></span>
            </li>
          </ul>
        </div>

        <!--葡萄品种-->
        <div class="variety" v-show="wineData.grape">
          <span class="fl"><i class="iconfont">&#xe613;</i>
            葡萄品种：
          </span>
          <ul>
            <li class="pz-1" v-for="item in wineData.grape">
             <span v-html="item.name_ch"></span>/<span v-html="item.name_en"></span>
            </li>
          </ul>
        </div>

        <!--类型-->
        <div class="type" v-if="wineData.wine_type.name_ch">
          <p>
            <i class="iconfont">&#xe60d;</i>
            酒类型：<span v-html="wineData.wine_type.name_ch"></span>/<span v-html="wineData.wine_type.name_en"></span>
          </p>
        </div>

        <!--等级-->
        <div class="grade" v-show="wineData.winery_level.name_ch">
          <p v-show="wineData.region_level.name_ch">
            <i class="iconfont">&#xe601;</i>
            产地等级：<span v-html="wineData.region_level.name_ch"></span>/<span v-html="wineData.region_level.name_en"></span>
          </p>
          <p v-show="wineData.region_level.name_ch">
            <i class="iconfont">&#xe60c;</i>
            酒庄等级：<span v-html="wineData.winery_level.name_ch"></span>/<span v-html="wineData.winery_level.name_en"></span>
          </p>
          <p v-show="wineData.level.name_ch">
            <i class="iconfont">&#xe610;</i>
            酒款等级：<span v-html="wineData.level.name_ch"></span>/<span v-html="wineData.level.name_en"></span>
          </p>
        </div>

        <!--场合-->
        <!--<div class="situation" v-if="wineData.occasion.name_ch">-->
          <!--<p class="fl">-->
            <!--<i class="iconfont">&#xe605;</i>-->
            <!--场合：<span v-html="wineData.occasion.name_ch"></span>-->
          <!--</p>-->
        <!--</div>-->

        <!--配餐-->
        <!--<div class="pantry" v-if="wineData.recipe_pair.name_ch">-->
          <!--<p class="fl">-->
            <!--<i class="iconfont">&#xe611;</i>-->
            <!--配餐：<span v-html="wineData.recipe_pair.name_ch"></span>-->
          <!--</p>-->
        <!--</div>-->

        <!--更多-->
        <!--<div class="more">-->
          <!--<ul>-->
            <!--<li><a :data-link="wineData.h5_url" @click.prevent="linkClick"><i class="iconfont">&#xe619;</i>查看更多信息</a></li>-->
            <!--<li><a><i class="iconfont">&#xe61b;</i>更多年份和商家</a></li>-->
            <!--<li><a :data-link="wineData.h5_checkPrice" @click.prevent="linkClick"><i class="iconfont">&#xe60a;</i>查看国外价格</a></li>-->
          <!--</ul>-->
        <!--</div>-->
    </div>
  </li>
</template>
<script type="text/ecmascript-6">
export default {
	name:'listView',
  props:{
    wineData:{
      type:Object,
      default:{}
    },
  },
  data(){
	  return {
    }
  },
  created(){
  },
  methods:{
    linkClick(event){
      if(event.target.getAttribute('data-link')){
        window.open(event.target.getAttribute('data-link'));
      }
    }
  }
}
</script>
<style>
  /*字体标红*/
  em.search-k-w{
    color:#BE344E !important;
    font-weight: bold;
  }
</style>
<style scoped lang="less" rel="stylesheet/less">
  li{word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
  i{color:#BE344E;margin-right: 4px;}

.list-item{
  width:100%;
  border-bottom: 1px solid #ccc;
  .pic{
    width:130px;
    height:170px;
    padding: 2px;
    margin:8px 0px;
    overflow: hidden;
    float: left;
    >img{
      width: 100%;
      height: 100%;
    }
  }
  .introduce{
    margin-left: 150px;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    color: #666;
    li {
      float: left;
    }
    .title{
      > h5 {
        display: inline-block;
        margin-bottom: 5px;
        width: 100%;
        font-weight: normal;
        overflow: hidden;
        font-size: 16px;
        >a{
        }:hover{color:#BE344E!important; }
        span:nth-of-type(1){
          color: #333;
        }
        span:nth-of-type(2){
          color:#ccc;
          font-size: 14px;
        }
      }
      >p{
        display: inline-block;
        position: absolute;
        right:5%;
        >span{
          color:#BE344E;
          font-size: 20px;
          >i{
            font-size: 14px;
          }
        }
      }
    }
    .shangjia {
        margin-right: 5px;
        >span{
          display: inline-block;
          margin-right:8px;
          font-size: 13px;
        }
    }
    .geography {
      width: 100%;
      line-height:30px;
      > ul {
        > li {
          width:auto;
          height: 100%;
          margin-right:12% ;
        }
      }
    }
    .variety {
      width: 100%;
      word-break:keep-all;/* 不换行 */
      white-space:nowrap;/* 不换行 */
      overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      line-height:20px;
      ul {
        > li {
          width:auto;
          margin-right:1% ;
        }
      }
    }
    .type {
      width: 100%;
      margin-top:7px;
      line-height: 20px;
      ul {
        > li {
          width: 24%;
          height: 100%;
          margin-right:1% ;
        }
      }
    }
    .grade {
      width: 100%;
      margin-top: 7px;
      >p{
        margin-top: 7px;
      }
    }
    /*.situation {*/
      /*width: 100%;*/
      /*margin-top:5px;*/
    /*}*/
    /*.pantry {*/
      /*width: 100%;*/
      /*margin-top:5px;*/
      /*line-height:20px;*/
    /*}*/
    /*.more{*/
      /*margin-top: 5px;*/
    /*}*/
  }
}
</style>
