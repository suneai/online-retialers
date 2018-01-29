<template>
  <div class="basic_info_wrap">
      <div class="title">{{basicInfo.title}}</div>
      <div class="sub_title">{{basicInfo.sub_title}}</div>
      <div class="tag_wrap">
          <span class="tag" v-for="(item , index) in basicInfo.tag" :key="index">{{item}}</span>
      </div>
      <div class="price">{{basicInfo.price | currency()}}</div>
  </div>
</template>

<script>
export default {
  props:['basicInfo']
}
</script>

<style lang="less" scoped>
.basic_info_wrap{
    box-sizing: border-box;
    padding: 0 0.3rem;
    overflow: hidden;
    margin-bottom: 0.2rem;
    .title{
        margin-top: 0.11rem;
       width:100%;
       font-size: 0.36rem;
       height: 0.76rem;
       line-height: 0.76rem;
       font-weight: 500;
       color:#363636;
    }
    .sub_title{
       width:100%;
       font-size: 0.24rem;
       line-height: 0.46rem;
       font-weight: 300;
       color:#777777; 
       margin-bottom: 0.2rem;
    }
    .tag_wrap{
        width:100%;
        overflow: hidden;
       .tag{
           float:left;
           display: block;
           box-sizing: border-box;
           font-size: 0.24rem;
           line-height: 0.32rem;
           padding:0 0.04rem;
           margin-right: 0.2rem;
           color: #a4a4a4;
            border: solid 0.01rem #a4a4a4;
            border-radius: 0.03rem;
       }
    }
    .price{
        height: 0.9rem;
        font-size: 0.36rem;
        line-height: 0.9rem;
         color: #ce1d19;
         font-weight: 300;
    }
}
</style>
