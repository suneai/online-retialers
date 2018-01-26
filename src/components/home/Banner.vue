<template>
  <div class="banner_wrap">
      <mt-swipe class="home_banner" :auto="10000" :showIndicators="true">
          <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
              <img :src="item.banner_src" :alt="item.title">
          </mt-swipe-item>  
      </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["bannerList"]
};
</script>

<style lang="less" scoped>
.home_banner {
  height: 4.5rem;
  width: 7.5rem;
  overflow: hidden;
  position: relative;
  > .mint-swipe-items-wrap {
    .mint-swipe-item {
      overflow: hidden;

      > img {
        display: block;
        width: 7.5rem;
        height: 4.5rem;
        padding: 0;
        margin: 0;
      }
    }
  }
  > .mint-swipe-indicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
    > .mint-swipe-indicator {
      width: 0.2rem;
      height: 0.2rem;
      background-color: #fff;
      &.is-active {
        background-color: #ff0;
      }
    }
  }
}
</style>
