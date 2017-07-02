<template>
  <div class="main list-view">
    <div class="content" v-for="(item,index) in items" :key="index">
      <div class="pic fl">
        <a href="javascript:;"></a>
      </div>
      <div class="introduce fr">
        <h4>{{item.msg}}</h4>
        <!--价格展示-->
        <div class="price">
          <span>{{item.pri}}</span>
          <span>商家：淘宝 99元 / 亚马逊100元 / 京东300元</span>
        </div>
        <!--地理-->
        <div class="geography">
          <ul>
            <li class="guojia"><a href="javascript:;"><i class="iconfont"></i>国家 /
english</a></li>
            <li class="chanqu"><a href="javascript:;"><i
                    class="iconfont">&#xe603;</i>卡斯蒂利亚-拉曼恰 / Castilla La Mancha</a></li>
            <li class="zichanqu"><a href="javascript:;"><i
                    class="iconfont">&#xe61a;</i>子产区 / english</a></li>
            <li class="jiuzhuang"><a href="javascript:;"><i
                    class="iconfont">&#xe60b;</i>酒庄 / english</a></li>
          </ul>
        </div>
        <!--葡萄品种-->
        <div class="variety">
          <span class="fl">葡萄品种 :</span>
          <ul>
            <li class="pz-1"><a href="javascript:;"><i class="iconfont">&#xe613;</i>赤
霞珠 / english</a></li>
            <li class="pz-2"><a href="javascript:;"><i class="iconfont">&#xe613;</i>小
味儿多 / english</a></li>
            <li class="pz-3"><a href="javascript:;"><i class="iconfont">&#xe613;</i>品
丽珠 / english</a></li>
          </ul>
        </div>
        <!--类型-->
        <div class="type">
          <span class="fl">酒类型 :</span>
          <ul>
            <li class=""><a href="javascript:;"><i class="iconfont">&#xe60d;</i>红葡萄
酒 / english</a></li>
            <li class=""><a href="javascript:;"><i class="iconfont">&#xe607;</i>甜型 /
english</a></li>
          </ul>
        </div>
        <!--等级-->
        <div class="grade">
          <span class="fl">等级：</span>
          <ul>
            <li><a href=""><i class="iconfont">&#xe601;</i>法国产区葡萄酒 /AOP(AOC)</a></li>
          </ul>
        </div>
        <!--场合-->
        <div class="situation">
          <span class="fl">场合：</span>
          <ul>
            <li><a href=""></a><i class="iconfont">&#xe605;</i>情侣&nbsp;聚会&nbsp;自饮&nbsp;商务</li>
          </ul>
        </div>
        <!--配餐-->
        <div class="pantry">
          <span class="fl">配餐：</span>
          <ul>
            <li><i class="iconfont">&#xe611;</i>奶油肌肉、海鲜、鸡鸭、肉、人、烧烤、麻辣烫、砂锅粥、三文鱼、</li>
          </ul>
        </div>
        <!--更多-->
        <div class="more">
          <ul>
            <li><a href=""><i class="iconfont">&#xe619;</i>查看更多信息</a></li>
            <li><a href=""><i class="iconfont">&#xe61b;</i>更多年份和商家</a></li>
            <li><a href=""><i class="iconfont">&#xe60a;</i>查看国外价格</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
	name:'listView',
    props:{
      prop:{
      	type:String
      },
    },
    data(){
        return {
            items:[
                {msg:'#大师级酿酒师# 新西兰 莫阿纳霍克斯湾木图长相思干白葡萄酒',pri:'￥99.00元'},
                {msg:"#大红虾三杯奖# 意大利Moscato D'Asti DOCG选择木马起泡葡萄酒",pri:'￥99.00元'},
                {msg:'盲品神器 法国隆河高端村级自然酒 蒙塔内干红葡萄酒',pri:'￥99.00元'},
                  ],
               }
       },created(){

        },
        methods: {

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
  a{color:#000;}
  li{word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
   }
    .main {
      .content {
        width: 100%;
        height: 300px;
        margin: 20px auto;
        padding: 1%;
        border: 1px solid #ccc;
        > .pic {
          min-width: 18%;
          height: 100%;
          padding: 0.5%;
          /*margin-right: 3%;*/
          > a {
            display: block;
            width: 100%;
            height: 100%;
            background: url("jiu.jpg") no-repeat center center;
            background-size: cover;
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
    }
</style>
