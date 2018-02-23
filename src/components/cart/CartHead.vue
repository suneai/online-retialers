<template>
  <div class="cart_head">
      <span class="title">我的购物车</span>
      <span class="edit" @click="changeEdit">{{edit?"编辑":"完成"}}</span>
  </div>
</template>

<script>
export default {
    props:["edit","changeEdit"]
}
</script>

<style lang="less" scoped>
.cart_head{
    height: 1rem;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    border-bottom: 0.01rem solid #e4e4e4;
    margin-bottom: 0.2rem;
    >.title{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.32rem;
        position: absolute;
        left: 0;
        top: 0;
    }
    >.edit{
        display: inline-block;
        margin: 0 0.4rem;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.32rem;
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>
