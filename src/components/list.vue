<template>
  <div class="main">
    <div class="list">
      <div class="content" v-for="(item,index) in items" :key="index">
        <div class="pic fl">
          <a href="javascript:;"></a>
        </div>
        <div class="introduce fl">
          <h4>{{item.msg}}</h4>
          <div class="price">
            <span>{{item.pri}}</span>
            <span>商家：淘宝 99元 / 亚马逊100元 / 京东300元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        items:[
        	{msg:'#大师级酿酒师# 新西兰 莫阿纳霍克斯湾木图长相思干白葡萄酒',pri:'￥99.00元'},
            {msg:"#大红虾三杯奖# 意大利Moscato D'Asti DOCG选择木马起泡葡萄酒",pri:'￥99.00元'},
            {msg:'盲品神器 法国隆河高端村级自然酒 蒙塔内干红葡萄酒',pri:'￥99.00元'},
			{msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
            {msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
            {msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
			{msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
            {msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
            {msg:'很长很长的酒名介绍------',pri:'￥99.00元'},
			{msg:'很长很长的酒名介绍------',pri:'￥99.00元'}
        ],
      }
    },methods:{
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .main{
    margin-left: 15%;
    .list{
      height:auto;
      padding: 2%;
      .content{
        width:90%;
        height:245px;
        margin: 20px auto;
        padding: 1%;
        border: 1px solid #ccc;
        >.pic{
          width:17%;
          height:100%;
          margin-right: 3%;
          background-color:lightgrey;
          >a{
            display: block;
            width:100%;
            height:100%;
            background: url("../../static/images/2.jpg") no-repeat center center;
            background-size: cover;
          }
        }
        >.introduce{
          width: 80%;
          height:100%;
          padding: 5px;
          >h4{
            display: block;
            width:100%;
            height:24px;
            overflow: hidden;
          }
          .price{
            margin-top: 5px;
            span:nth-of-type(1){
              margin-right: 15%;
              font-size: 120%;
              font-weight: bold;
              color: red;
            }
            span:nth-of-type(2){
              font-size: 13px;
            }
            a{
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
