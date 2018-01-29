<template>
  <div id="app">
    <Top v-if="$route.meta.top"></Top>
    <router-view/>
  </div>
</template>

<script>
import Top from "@/components/public/Top";
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{Top}
}
</script>

<style lang="less">
@import "assets/less/ba.less";
#app {
  // background-color: #a4aaa4;
  
}
</style>
