<template>
  <div class="default-view">
    <div class="default">默认<br/>空白</div>
  </div>
</template>
<script type="text/ecmascript-6">
  import listView from '../list/listItem.vue'
  export default {
    name:'defaultView',
    data(){
      return {

      }
    },
  components:{
    listView
  },
    methods:{
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
.default-view{
  position: relative;
  width:100%;
  height:900px;
  .default{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
    width:800px;
    height:800px;
    line-height: 400px;
    font-size: 380px;
    font-weight: bold;
    color:red
  }
}
</style>
