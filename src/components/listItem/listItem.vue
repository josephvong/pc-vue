<template>
  <li class="list-item" >
    <div class="pic fl">
      <img :src="wineData.pic_url" :data-link="wineData.h5_url" @click.prevent="linkClick"/>
    </div>
    <div class="introduce">
      <h5><a :data-link="wineData.h5_url" @click.prevent="linkClick" >
        <span v-html="wineData.name.name_ch"></span>  <span v-html="wineData.name.name_eh"></span></a></h5>
      <!--价格展示-->
      <div class="price" v-show="wineData.price || wineData.buy_info.length">
        <span v-show="wineData.price">￥{{wineData.price}}.00元</span>
        <!--<span v-show="wineData.buy_info.length" >商家：<em v-for="item in wineData.buy_info">{{item.retailers}}/{{item.price}}元</em> </span>-->
        <span class="shangjia" v-show="wineData.retailers">商家：<span v-html="wineData.retailers"></span></span>
      </div>
      <!--地理-->
      <div class="geography">
        <ul>
          <li class="guojia" v-if="wineData.country.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe606;</i><span v-html="wineData.country.name_ch"></span>/ <span v-html="wineData.country.name_en"></span>
            </a>
          </li>
          <li class="chanqu" v-if="wineData.region.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe603;</i><span v-html="wineData.region.name_ch"></span><span v-html="wineData.region.name_en"></span>/
            </a>
          </li>
          <li class="zichanqu" v-show="wineData.sub_region" v-if="wineData.sub_region.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe61a;</i><span v-html="wineData.sub_region.name_ch"></span>/<span v-html="wineData.sub_region.name_en"></span>
            </a>
          </li>
          <li class="jiuzhuang" v-show="wineData.winery" v-if="wineData.winery.name_ch">
            <a href="javascript:;" >
              <i class="iconfont">&#xe60b;</i><span v-html="wineData.winery.name_ch"></span>/<span v-html="wineData.winery.name_en"></span>
            </a>
          </li>
        </ul>
      </div>
      <!--葡萄品种-->
      <div class="variety" v-show="wineData.grape">
        <span class="fl"><i class="iconfont">&#xe613;</i>葡萄品种：</span>
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
        <p v-show="wineData.winery_level.name_ch">
          <i class="iconfont">&#xe601;</i>
          产地等级：<span v-html="wineData.winery_level.name_ch"></span>/<span v-html="wineData.winery_level.name_en"></span>
        </p>
        <p v-show="wineData.region_level.name_ch">
          <i class="iconfont">&#xe60c;</i>
          酒庄等级：<span v-html="wineData.region_level.name_ch"></span>/<span v-html="wineData.region_level.name_en"></span>
        </p>
        <p v-show="wineData.winery_level.name_ch">
          <i class="iconfont">&#xe610;</i>
          酒款等级：<span v-html="wineData.winery_level.name_ch"></span>/<span v-html="wineData.winery_level.name_en"></span>
        </p>
      </div>
      <!--场合-->
      <div class="situation" v-if="wineData.occasion.name_ch">
        <span class="fl">
          <i class="iconfont">&#xe605;</i>
          场合：<span v-html="wineData.occasion.name_ch"></span>
        </span>
      </div>
      <!--配餐-->
      <div class="pantry" v-if="wineData.recipe_pair.name_ch">
        <span class="fl">
          <i class="iconfont">&#xe611;</i>
          配餐：<span v-html="wineData.recipe_pair.name_ch"></span>
        </span>
      </div>
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
      change:"<em></em>>"
    }
  },
  created(){
//	  this.change ="<em></em>"
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
    color: blue !important;
  }
</style>
<style scoped lang="less" rel="stylesheet/less">
  /*字体图标*/
  @font-face {
    font-family: 'iconfont';
    src: url('../../../static/iconfont/iconfont.eot');
    src: url('../../../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../../static/iconfont/iconfont.woff') format('woff'),
    url('../../../static/iconfont/iconfont.ttf') format('truetype'),
    url('../../../static/iconfont/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  i{color:#BE344E;margin-right: 4px;}
  li{word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }


.list-item{
  width:100%;
  margin:0 30px;
  padding: 1%;
  border-bottom: 1px solid #ccc;

  .pic{
    width:115px;
    height:140px;
    padding: 2px;
    margin-top: 5px;
    overflow: hidden;
    position: absolute;
    >img{
      width: 100%;
      height: 100%;
    }
  }
  .introduce{
    margin-left: 150px;
    width: 100%;
    height: 100%;
    span{
      color: #333;
    }
    li {
      float: left;
      >a{
        color:#333;
      }
    }
    > h5 {
      display: block;
      margin-bottom: 5px;
      width: 100%;
      font-weight: normal;
      overflow: hidden;
      font-size: 16px;

    }:hover{cursor: pointer;}
    .price {
      span:nth-of-type(1) {
        margin-right: 15%;
        font-size: 17px;
        color:#BE344E;
      }
      .shangjia{
        >span{
          font-size: 13px;
          color:#333;
        }

      }
    }
    .geography {
      width: 100%;
      height: auto;
      margin-top: 5px;
      /*margin-bottom: 30px;*/
      > ul {
        height: 20px;
        > li {
          width: auto;
          height: 100%;
          margin-right:3% ;
        }
      }
    }
    .variety {
      width: 100%;
      height: 20px;
      margin-top:5px;
      word-break:keep-all;/* 不换行 */
      white-space:nowrap;/* 不换行 */
      overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      ul {
        > li {
          width:auto;
          height: 100%;
          margin-right:1% ;
        }
      }
    }
    .type {
      width: 100%;
      height: 20px;
      margin-top:5px;
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
      margin-top: 5px;
      >p{
        margin-top: 5px;
      }
    }
    .situation {
      width: 100%;
      height: 20px;
      margin-top:5px;
    }
    .pantry {
      width: 100%;
      height: 20px;
      margin-top:5px;
    }
    .more{
      margin-top: 5px;
    }
  }
}
</style>
