<template>
  <div>
    <div class="default-view">
      default
	</div>
    <listView></listView>
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
  width:100%;
  height:300px;
  border:1px solid green;

}
</style>
