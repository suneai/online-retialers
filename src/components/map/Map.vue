<template>
  <div class="map_wrap">
      <div id="container" class="container"></div>
  </div>
</template>

<script>
// import AMap from 'AMap';   //在页面中引入高德地图

export default {
  data() {
    return {
        coordinate:{
            x : 116.397428,
            y : 39.90923
        }
    };
  },
  mounted() {
    this.showMap();
  },
  methods: {
    showMap(coordinate) {
      let map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 11,
        center: [ this.coordinate.x , this.coordinate.y ]
      });
     
    }
  }
};
</script>

<style lang="less" scoped>
.map_wrap {
  height: 100%;
}
.container {
  width: 7.5rem;
  height: 100%;
}
</style>
