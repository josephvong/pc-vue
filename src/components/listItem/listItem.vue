<template>
  <li class="list-item" >
    <div class="pic fl"  >
      <img :src="wineData.pic_url" :data-link="wineData.h5_url" @click.prevent="linkClick"/>
      <!-- <a href="javascript:;" :style="`background-image:'url(${wineData.pic_url})'`"></a> -->
    </div>
    <div class="introduce">
      <h4>{{wineData.name.name_ch}}  {{wineData.name.name_en}}</h4>
      <!--价格展示-->
      <div class="price" v-show="wineData.price || wineData.buy_info.length">
        <span v-show="wineData.price">￥{{wineData.price}}.00元</span>
        <span v-show="wineData.buy_info.length" >商家：<em v-for="item in wineData.buy_info">{{item.retailer_name}}/{{item.price}}元</em> </span>
      </div>
      <!--地理-->
      <div class="geography">
        <ul>
          <li class="guojia" v-if="wineData.country.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe606;</i>{{wineData.country.name_ch}} / {{wineData.country.name_en}}
            </a>
          </li>
          <li class="chanqu" v-if="wineData.region.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe603;</i>{{wineData.region.name_ch}} / {{wineData.region.name_en}}
            </a>
          </li>
          <li class="zichanqu" v-show="wineData.sub_region" v-if="wineData.sub_region.name_ch">
            <a href="javascript:;">
              <i class="iconfont">&#xe61a;</i>{{wineData.sub_region.name_ch}} / {{wineData.sub_region.name_en}}
            </a>
          </li>
          <li class="jiuzhuang" v-show="wineData.winery" v-if="wineData.winery.name_ch">
            <a href="javascript:;" >
              <i class="iconfont">&#xe60b;</i>{{wineData.winery.name_ch}} / {{wineData.winery.name_en}}
            </a>
          </li>
        </ul>
      </div>
      <!--葡萄品种-->
      <div class="variety" v-show="wineData.grape">
        <span class="fl"><i class="iconfont">&#xe613;</i>葡萄品种 :</span>
        <ul>
          <li class="pz-1" v-for="item in wineData.grape">
            <a href="javascript:;">
              {{item.name_ch}} / {{item.name_en}}
            </a>
          </li>
        </ul>
      </div>
      <!--类型-->
      <div class="type" v-if="wineData.wine_type.name_ch">
        <span class="fl"><i class="iconfont">&#xe60d;</i>酒类型 :</span>
        <ul>
          <li class=""><a href="javascript:;">
          {{wineData.wine_type.name_ch}} / {{wineData.wine_type.name_en}}</a>
          </li>
        </ul>
      </div>
      <!--等级-->
      <div class="grade" v-if="wineData.winery_level.name_ch">
        <span class="fl"><i class="iconfont">&#xe601;</i>等级：</span>
        <ul>
          <li><a href="">{{wineData.winery_level.name_ch}}/{{wineData.winery_level.name_en}}</a></li>
        </ul>
      </div>
      <!--场合-->
      <div class="situation" v-if="wineData.occasion.name_ch">
        <span class="fl"><i class="iconfont">&#xe605;</i>场合：</span>
        <ul>
          <li><a href=""></a>{{wineData.occasion.name_ch}}</li>
        </ul>
      </div>
      <!--配餐-->
      <div class="pantry" v-if="wineData.recipe_pair.name_ch">
        <span class="fl"><i class="iconfont">&#xe611;</i>配餐：</span>
        <ul>
          <li>{{wineData.recipe_pair.name_ch}}</li>
        </ul>
      </div>
      <!--更多-->
      <div class="more">
        <ul>
          <li><a :data-link="wineData.h5_url" @click.prevent="linkClick"><i class="iconfont">&#xe619;</i>查看更多信息</a></li>
          <li><a><i class="iconfont">&#xe61b;</i>更多年份和商家</a></li>
          <li><a :data-link="wineData.h5_checkPrice" @click.prevent="linkClick"><i class="iconfont">&#xe60a;</i>查看国外价格</a></li>
        </ul>
      </div>
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
  /*height:320px;*/
  margin:auto;
  /*margin-left: 3%;*/
  /*padding-top: 20px;*/
  padding: 2%;
  /*padding-bottom: 20px;*/
  border-top: 1px solid #ccc;
  .pic{
    width:180px;
    height:8.2%;
    padding: 2px;
    overflow: hidden;
    position: absolute;
    >img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .introduce{
    margin-left: 220px;
    width: 80%;
    height: 100%;
    /*padding: 5px;*/
    span{
      color: #333;
    }
    li {
      float: left;
      >a{
        color:#333;
        cursor: pointer;
      }
    }
    > h4 {
      display: block;
      width: 100%;
      height: 24px;
      font-weight: normal;
      overflow: hidden;
      font-size: 20px;
    }
    /*div{*/
      /*margin-top: 8px;*/
    /*}*/
    .price {
      span:nth-of-type(1) {
        margin-right: 15%;
        font-size: 120%;
        color:#BE344E;
      }
      span:nth-of-type(2) {
        font-size: 13px;
      }
    }
    .geography {
      width: 100%;
      height: 25px;
      margin-top: 10px;
      > ul {
        > li {
          width: 22%;
          height: 100%;
          margin-right:1% ;
        }
      }
    }
    .variety {
      width: 100%;
      height: 25px;
      margin-top: 10px;
      word-break:keep-all;/* 不换行 */
      white-space:nowrap;/* 不换行 */
      overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      ul {
        > li {
          width: 24%;
          height: 100%;
          margin-right:1% ;
        }
      }
    }
    .type {
      width: 100%;
      height: 25px;
      margin-top: 10px;
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
      height: 25px;
      margin-top: 10px;
    }
    .situation {
      width: 100%;
      height: 25px;
      margin-top:10px;
    }
    .pantry {
      width: 100%;
      height: 25px;
      margin-top: 10px;
    }
    .more{
      margin-top: 10px;
      ul{
        li{
          margin-right: 8%;
        }
      }
    }
  }
}
</style>
