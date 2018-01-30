<template>
  <div class="product_wrap">
     <Follow v-show="show_follow" :floorTatol="floor_tatol"></Follow>
     <Banner :bannerList="banner_list"></Banner> 
     <BasicInfo :basicInfo='basic_info'></BasicInfo>
     <div class="floor_tatol" v-for="(i , index) in floor_tatol" :key="index">
         <Floor></Floor>
     </div>
  </div>
</template>

<script>
import Follow from "../productDetial/Follow";
import Banner from "../productDetial/Banner";
import BasicInfo from "../productDetial/BasicInfo";
import Floor from "../productDetial/Floor";
export default {
  name: "ProductDetial",
  components: { Follow, Banner, BasicInfo, Floor },
  data() {
    return {
      show_follow: false,
      banner_list: [],
      basic_info: "",
      floor_tatol: 0,
      timer: "",
      dom_timer: ""
    };
  },
  created() {
    this.createBanner();
    this.createBasicInfo();
    this.createFloor();
  },
  mounted() {
    this.listenScroll();
  },
  methods: {
    createBanner() {
      for (let i = 0; i < 5; i++) {
        this.banner_list[i] = this.$Mock.Random.dataImage("750x750");
      }
    },
    createBasicInfo() {
      let tag_arr = ["@ctitle(4)"];
      this.basic_info = this.$Mock.mock({
        data: {
          title: "@ctitle(5,8)",
          "sub_title|8-15": "@ctitle",
          "tag|0-5": tag_arr,
          "price|100-10000": 100
        }
      }).data;
    },
    createFloor() {
      this.floor_tatol = this.$Mock.mock({
        "data|5-8": 3
      }).data;
    },
    //获取相应Dom元素
    getDom(banner_dom , basic_info_dom , follow_dom) {
        //所有楼层
        let floors_dom = document.querySelectorAll(".floor");

        this.$root.eventHub.$on("changeFollow", index => {
          let top = 0;
          for (let k = 0; k < index; k++) {
            top += floors_dom[k].offsetHeight;
          }
         if (index == 0) {
             document.body.scrollTop = banner_dom + basic_info_dom + top - follow_dom;
             document.documentElement.scrollTop = banner_dom + basic_info_dom + top - follow_dom;
             window.pageYOffset = banner_dom + basic_info_dom + top - follow_dom;
         }else{
             document.body.scrollTop = banner_dom + basic_info_dom + top;
             document.documentElement.scrollTop = banner_dom + basic_info_dom + top;
             window.pageYOffset = banner_dom + basic_info_dom + top;
         }
        });

        
    },
    //监听滚动条变化
    listenScroll() {

      clearInterval(this.timer);

      this.timer = setInterval(() => {
        let current_top = document.documentElement.scrollTop || document.body.scrollTop;

        let banner_dom = document.getElementById("product_banner").offsetHeight;
        let basic_info_dom = document.getElementById("basic_info_wrap").offsetHeight;
        let follow_dom = document.getElementById("follow_wrap").offsetHeight;

        if (current_top >= (banner_dom + basic_info_dom - follow_dom)) {

            this.show_follow = true;
            this.getDom(banner_dom , basic_info_dom , follow_dom);

        }else{
          this.show_follow = false;
        }
      }, 30);
    }
  }
};
</script>

