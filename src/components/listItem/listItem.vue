<template>
  <li class="list-item" >
    <div class="pic fl"  >
      <img :src="wineData.pic_url" :data-link="wineData.h5_url" @click.prevent="linkClick"/>
      <!-- <a href="javascript:;" :style="`background-image:'url(${wineData.pic_url})'`"></a> -->
    </div>
    <div class="introduce fr">
      <h4>{{wineData.name.name_ch}}  {{wineData.name.name_en}}</h4>
      <!--价格展示-->
      <div class="price" v-show="wineData.price || wineData.buy_info.length">
        <span v-show="wineData.price">{{wineData.price}}</span>
        <span v-show="wineData.buy_info.length" >商家：<em v-for="item in wineData.buy_info">{{item.retailer_name}}/{{item.price}}元</em> </span>
      </div>
      <!--地理-->
      <div class="geography">
        <ul>
          <li class="guojia" >
            <a href="javascript:;">
              <i class="iconfont"></i>{{wineData.country.name_ch}} / {{wineData.country.name_en}}
            </a>
          </li>
          <li class="chanqu">
            <a href="javascript:;">
              <i class="iconfont">&#xe603;</i>{{wineData.region.name_ch}} / {{wineData.region.name_en}}
            </a>
          </li>
          <li class="zichanqu" v-show="wineData.sub_region">
            <a href="javascript:;">
              <i class="iconfont">&#xe61a;</i>{{wineData.sub_region.name_ch}} / {{wineData.sub_region.name_en}}
            </a>
          </li>
          <li class="jiuzhuang" v-show="wineData.winery">
            <a href="javascript:;" >
              <i class="iconfont">&#xe60b;</i>{{wineData.winery.name_ch}} / {{wineData.winery.name_en}}
            </a>
          </li>
        </ul>
      </div>
      <!--葡萄品种-->
      <div class="variety">
        <span class="fl">葡萄品种 :</span>
        <ul>
          <li class="pz-1" v-for="item in wineData.grape">
            <a href="javascript:;">
              <i class="iconfont">&#xe613;</i>{{item.name_ch}} / {{item.name_en}}
            </a>
          </li>
          <!-- <li class="pz-2"><a href="javascript:;"><i class="iconfont">&#xe613;</i>小味儿多 / english</a></li>
          <li class="pz-3"><a href="javascript:;"><i class="iconfont">&#xe613;</i>品丽珠 / english</a></li> -->
        </ul>
      </div>
      <!--类型-->
      <div class="type">
        <span class="fl">酒类型 :</span>
        <ul>
          <li class=""><a href="javascript:;"><i class="iconfont">&#xe60d;</i>
          {{wineData.wine_type.name_ch}} / {{wineData.wine_type.name_en}}</a>
          </li>
        </ul>
      </div>
      <!--等级-->
      <div class="grade">
        <span class="fl">等级：</span>
        <ul>
          <li><a href=""><i class="iconfont">&#xe601;</i>{{wineData.winery_level.name_ch}} / {{wineData.winery_level.name_en}}</a></li>
        </ul>
      </div>
      <!--场合-->
      <div class="situation">
        <span class="fl">场合：</span>
        <ul>
          <li><a href=""></a><i class="iconfont">&#xe605;</i>{{wineData.occasion.name_ch}}</li>
        </ul>
      </div>
      <!--配餐-->
      <div class="pantry">
        <span class="fl">配餐：</span>
        <ul>
          <li><i class="iconfont">&#xe611;</i>{{wineData.recipe_pair.name_ch}}</li>
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

.list-item{
  width: 100%;
  height: 300px;
  margin: 20px auto;
  padding: 1%;
  border: 1px solid #ccc;
  > .pic {
    position: relative;
    min-width: 18%;
    height: 100%;
    padding: 0.5%;
    /*margin-right: 3%;*/
    > img {
      position: absolute;
      display: block;
      left: 0;top:0;
      width: 90%;
      height: 100%;
      // background:no-repeat center center;
      // background-size: cover;
    }
  }
  > .introduce {
    width: 80%;
    height: 100%;
    padding: 5px;
    span{
      color: #646464;
    }
    li {
      float: left;
      color:#000;
    }
    i {
      color: #c03c4e;
    }
    > h4 {
      display: block;
      width: 100%;
      height: 24px;
      overflow: hidden;
    }
    .price {
      margin-top: 5px;
      margin-bottom: 8px;
      span:nth-of-type(1) {
        margin-right: 15%;
        font-size: 120%;
        font-weight: bold;
        color: red;
      }
      span:nth-of-type(2) {
        font-size: 13px;
      }
      a {
        font-size: 14px;
      }
    }
    .geography.variety, .type, .grade, .situation, .pantry {
      margin-top: 8px;
    }
    .geography {
      width: 100%;
      height: 25px;
      > ul {
        > li {
          width: 24%;
          height: 100%;
          margin-right:1% ;
        }
      }
    }
    .variety {
      width: 100%;
      height: 25px;
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
    }
    .situation {
      width: 100%;
      height: 25px;
    }
    .pantry {
      width: 100%;
      height: 25px;
    }
    .more{
      margin-top: 8px;
      ul{
        li{
          margin-right: 8%;
        }
      }
    }
  }
}

</style>
