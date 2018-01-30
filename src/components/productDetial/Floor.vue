<template>
  <div class="floor">
    <img :src="bg" alt="">
    <p class="text">{{paragraph}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: "",
      paragraph: ""
    };
  },
  created() {
    this.bg = this.$Mock.Random.dataImage("750x450");
    this.paragraph = this.$Mock.mock({
      data: "@cparagraph(10,30)"
    }).data;
  }
};
</script>

<style lang="less" scoped>
.floor {
  margin-bottom: 0.4rem;
  width: 7.5rem;
  > img {
    display: block;
    width: 100%;
    height: auto;
    padding: 0;
  }
  > p {
    width: 100%;
    font-size: 0.32rem;
    padding: 0.4rem 0.3rem;
    box-sizing: border-box;
    font-weight: 300;
    color: #363636;
    margin-bottom: 0.2rem;
    background-color: #fff;
  }
}
</style>
