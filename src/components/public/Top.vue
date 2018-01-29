<template>
  <div class="back_bar">
      <a href="javascript:window.history.back();">{{back}}</a>
  </div>
</template>

<script>
export default {
   data(){
       return{
           back:''
       }
   },
   mounted(){

       window.addEventListener('scroll' , this.listenScroll);

   },
   methods:{
       listenScroll(){
           let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           scrollTop>0? this.back = '返回': this.back = 'back';
       }
   }
}
</script>

<style lang="less" scoped>
  .back_bar{
    position: fixed;
    z-index: 3000;
    left: 0;top: 0;
    width: 6.9rem;
    height: 0.9rem;
    padding: 0 0.3rem;
    background: rgba(222,222,222,0.3);
    display: flex;
    align-items: center;
    >a{
      float: left;
      color: #000;
    }
  }
</style>
