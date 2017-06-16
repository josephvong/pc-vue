<template>
  <div class="main">
    <div class="list">
      <!--<div class="content" v-for="item in items">-->
      <div class="content" v-for="(item,index) in items" :key="index">
        <div class="pic fl">
          <a href=""></a>
        </div>
        <div class="introduce fl">
          <h4>{{item.msg}}</h4>
          <div class="price">
            <span>{{item.pri}}</span>
            <span>原价9999元</span>
            <a>查看国外价格</a>
          </div>
          <div class="introduce-t">
						<span>
						酒品描述：这是一款很牛逼很牛逼的酒。。来自250世界，666星球的星球大战葡萄酒。。唉，我
编不下去~    假装这里有一个很牛逼很牛逼的介绍,酒品描述：这是一款很牛逼很牛逼的酒。。来自250世界，666星球的星球大战葡萄酒。。唉，我
编不下去~    假装这里有一个很牛逼很牛逼的介绍,酒品描述：（文字过多做隐藏）。
					</span>
          </div>
          <span class="nv">更多年份 >> </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        items:[{msg:'1111',pri:'2222'},{msg:'333',pri:'4444'},{msg:'555',pri:'666'}],
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .main{
    /*width: 81%;*/
    margin-left: 19%;
    .list{
      /*width: 90%;*/
      height:auto;
      padding: 2%;
      .content{
        width:90%;
        height:170px;
        margin: 20px auto;
        padding: 1%;
        background-color: lightgrey;
        >.pic{
          width:14%;
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
              margin-right: 4%;
              font-size: 120%;
              font-weight: bold;
              color: red;
            }
            span:nth-of-type(2){
              margin-right: 7%;
              font-size: 13px;
              text-decoration: line-through;
            }
            a{
              font-size: 14px;
            }
          }
          .introduce-t{
            width:100%;
            max-height:50%;
            overflow:hidden;
            margin-top: 5px;
            margin-bottom: 4px;
            span{
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>
