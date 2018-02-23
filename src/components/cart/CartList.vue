<template>
  <div class="cart_list">
      <ul>
          <li v-for="(item,index) in cartList" :key="index">
            <div class="img_wrap">
                <img src="" alt="">
            </div> 
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:["cartList"],
    created(){
        console.log(this.cartList)
    }
  
}
</script>

<style lang="less" scoped>

</style>


