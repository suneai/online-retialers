<template>
  <div class="home_wrap">
    <Back></Back>
    <Banner :bannerList="banner_list"></Banner>
    <ProductList :productList="product_list"></ProductList>
  </div>
</template>

<script>
import Back from "../public/BackBar";
import Banner from "../home/Banner";
import ProductList from "../home/ProductList";
export default {
  components: { Back, Banner, ProductList },
  data() {
    return {
      banner_list: [],
      product_list: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let banner_src = this.$Mock.Random.dataImage("750x450");
      this.banner_list = this.$Mock.mock({
        "banner_list|1-3": [
          {
            "title|1-5": "",
            banner_src: banner_src
          }
        ]
      }).banner_list;
      let product_src = this.$Mock.Random.dataImage("295x295");
      this.product_list = this.$Mock.mock({
        "product_list|1-10": [
          {
            "id|+1": 1,
            "title|1-9": "@cname",
            "sub_title|10-20": "@cname",
            photo: product_src,
            "price|+2": 998,
            "discount|0-1": 1 //Boolean值
          }
        ]
      }).product_list;
    }
  }
};
</script>


<style lang="less" scoped>
.home_wrap{
  background-color: #e4e4e4;
}

</style>



