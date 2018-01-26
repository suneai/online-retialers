<template>
  <div class="register_wrap">
      <Back></Back>
      <div class="user_info_wrap">
          <input class="user_name" v-model="user_name" type="text" placeholder="请输入电话号码" autocomplete="off"/>
          <input class="user_pw" v-model="user_pw" type="password" placeholder="请输入密码" autocomplete="off"/>
      </div>
      <div class="submit_btn" :style="btn_color | btnChangeColor" @click="submit">提交</div>
  </div>
</template>

<script>
import Back from "../public/BackBar";
export default {
  components:{Back},
  data(){
      return{
          user_name:'',
          user_pw:'',
          btn_color:1
      }
  },
  filters:{
      btnChangeColor(number){
          switch (number) {
              case 1:
                  return "opacoty:0;"
                  break;
              case 2:
                  return "opacoty:0.6;"
                  break;
              case 3:
                  return "opacoty:1;"
                  break;
              default:
                  break;
          }

      }
  },
  methods:{
      submit(){
          
          this.$router.push({name:'Home' , qurey:{user_name : this.user_name}})
      }
  }
}
</script>
<style lang="less" scoped>

.user_info_wrap{
    margin-top: 4rem;
    overflow: hidden;
    >input{
        height: 1rem;
        display: block;
        width:5rem;
        padding: 0;
        margin: 0.2rem auto;
        outline: 0 none;
        border: 0 none;
        background: transparent;

    }
}
.submit_btn{
    width: 5rem;
    height: 1rem;
    background-color: #0f0;
    // opacity: 0.5;
    margin: 4rem auto;
    text-align: center;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #fff;
    border-radius: 8px;
}
</style>

