<template>
  <div class="foot_wrap">
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
    &.add_cart {
      width: 40%;
      color: #000;
      background-color: rgba(225, 0, 223, 0.6);
    }
    &.go_play {
      width: 60%;
      color: #fff;
      background-color: rgba(050, 200, 0, 0.6);
    }
  }
}
</style>
