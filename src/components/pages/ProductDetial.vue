<template>
  <div class="product_wrap">
     <Banner :bannerList="banner_list"></Banner> 
     <BasicInfo :basicInfo='basic_info'></BasicInfo>
     <div class="floor_tatol" v-for="(i , index) in floor_tatol" :key="index">
         <Floor></Floor>
     </div>
  </div>
</template>

<script>
import Banner from "../public/Banner";
import BasicInfo from "../productDetial/BasicInfo";
import Floor from "../productDetial/floor/Floor_01";
export default {
    name:'ProductDetial',
    components:{Banner , BasicInfo , Floor},
    data(){
        return{
            banner_list:[],
            basic_info:'',
            floor_tatol:0
        }
    },
    created(){
        this.createBanner();
        this.createBasicInfo();
        this.createFloor();
    },
    methods:{
        createBanner(){
            for (let i = 0; i < 5; i++) {
                this.banner_list[i] =  this.$Mock.Random.dataImage('750x750');              
            }
        },
        createBasicInfo(){
            let tag_arr = ["@ctitle(4)"]
            this.basic_info = this.$Mock.mock({
                "data":{
                    "title":"@ctitle(5,8)",
                    "sub_title|8-15":"@ctitle",
                    "tag|0-5":tag_arr,
                    "price|100-10000":100
                }
            }).data;
        },
        createFloor(){
            this.floor_tatol = this.$Mock.mock({
                "data|5-8":3
            }).data;
        }

    }
  
}
</script>

