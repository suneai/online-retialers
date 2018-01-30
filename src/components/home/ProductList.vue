<template>
  <div class="list_wrap">
    <div class="product_box" v-for="(item,index) in productList" :key="index" @click="skip(item)">
        <div class="img_wrap">
            <img :src="item.photo" :alt="item.title">
        </div>
        <div class="title">{{item.title | readMore(5,'...')}}</div>
        <div class="sub_title">{{item.sub_title | readMore(12,'...')}}</div>
        <div class="old_price">{{item.price | currency('$', 1)}}</div>
        <del>{{item.price | currency('$' , 1)}}</del>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import mixins from "../../mixins/index";
export default {
  mixins: [mixins],
  props: ["productList"],
  data() {
    return {
      list: []
    };
  },
  created() {},
  methods:{
      skip(item){
          this.$router.push({name:'ProductDetial' , query:{id:item.id}})
      }
  }
};
</script>

<style lang="less" scoped>
.list_wrap {
  margin-top: 0.2rem;
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  background-color: #fff;
  box-sizing: border-box;
  .product_box {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding: 0.3rem 0.2rem;
    box-sizing: border-box;
    > .img_wrap {
      width: 2.95rem;
      height: 2.95rem;
      > img {
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
      }
    }
    > .title {
      text-indent: 0.25rem;
      width: 100%;
      text-align: left;
      line-height: 0.86rem;
      font-size: 0.32rem;
      counter-reset: #363636;
      font-weight: 700;
    }
    > .sub_title {
      text-indent: 0.25rem;
      width: 100%;
      text-align: left;
      line-height: 0.4rem;
      font-size: 0.2rem;
      color: #777;
    }
    > .old_price {
      text-indent: 0.25rem;
      width: 100%;
      text-align: left;
      line-height: 0.4rem;
      color: crimson;
      font-size: 0.26rem;
    }
    > del {
      text-indent: 0.25rem;
      width: 100%;
      text-align: left;
      line-height: 0.4rem;
      color: #777;
      font-size: 0.26rem;
    }
  }
}
</style>

