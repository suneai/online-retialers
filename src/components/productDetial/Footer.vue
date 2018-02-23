<template>
  <div class="foot_wrap">
      <router-link class="to_cart" tag="div" to="/cart">我的购物车</router-link>
      <div class="add_cart">加入购物车</div>
      <div class="go_play">立即购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {},
    goPlay() {}
  }
};
</script>

<style lang="less" scoped>
.foot_wrap {
  height: 1rem;
  background-color: #fff;
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #000;
  > div {
    height: 100%;
    float: left;
    text-align: center;
    line-height: 1rem;
    &.to_cart{
      width: 30%;
      color: #000;
      background-color: rgba(225, 202, 0, 0.6);
    }
    &.add_cart {
      width: 30%;
      color: #000;
      background-color: rgba(225, 0, 223, 0.6);
    }
    &.go_play {
      width: 40%;
      color: #fff;
      background-color: rgba(050, 200, 0, 0.6);
    }
  }
}
</style>
