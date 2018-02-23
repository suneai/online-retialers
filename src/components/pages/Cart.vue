<template>
  <div class="cart_wrap">
    <CartHead :edit="edit"></CartHead>
    <cartList :cartList="cartList"></cartList>
  </div>
</template>

<script>
import CartHead from "../cart/CartHead";
import cartList from "../cart/cartList";
export default {
  components: { CartHead , cartList},
  data() {
    return {
      cartList: [],
      edit: true
    };
  },
  created() {
      this.createdCartList()
  },
  methods: {
    changeEdit(){
        this.edit = !this.edit;
        if (this.edit) {
            //显示编辑
        }else{
            //完成
        }
    },
    createdCartList() {
        let src = this.$Mock.Random.dataImage('220x220');
        let num = this.$Mock.Random.natural(5,20)
        let list = [];
        for (let i = 0; i < num; i++) {
            let obj = {
                title:this.$Mock.Random.csentence(5, 8),
                img_src: src,
                type:this.$Mock.Random.natural(1,3),//1.正常销售 2.失效 3.下架
                total:this.$Mock.Random.natural(1,5),
            }
            list.push(obj)
        }
        this.cartList = list
    }
  }
};
</script>

<style lang="less" scoped>

</style>
