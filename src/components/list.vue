<template>
  <div class="main">
    <div class="list">
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
			<span>酒品描述：这是一款很牛逼很牛逼的酒。。来自250世界，666星球的星球大战葡萄酒。。唉，我
编不下去~    假装这里有一个很牛逼很牛逼的介绍,酒品描述：这是一款很牛逼很牛逼的酒。。来自250世界，666星球的星球大战葡萄酒。。</span>
          </div>
          <div id="nv" @click="toggle(item)">
            <span class="nv" >更多年份:>></span>
            <ul v-show="item.status">
              <li v-for="(item,index) in nv" :key="index">{{item.nv}}</li>
            </ul>
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
      	status:false,
		  nv: [
		  	{nv:'2012年'},
			{nv:'2000年'},
			{nv:'1985年'},
			{nv:'未知年份'},
          ],
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
		  //切换滑块
		  toggle: function(item) {
			  if(typeof item.status=='undefined' ){
				  this.$set(item,'status',false);
			  }
			  else{
				  item.status=!item.status;
			  }
		  },
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
          #nv{
            width:100px;
            height:auto;
            position: absolute;
            >span{
            }
            ul{
              display: block;
              background-color: #fff;
            }
          }:hover{cursor:pointer;}
        }
      }
    }
  }
</style>
