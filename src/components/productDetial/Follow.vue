<template>
  <div id="follow_wrap" class="follow_wrap">
    <span class="tip icon-more-copy iconfont" v-if="isMore"></span>
    <div class="follow_box">
      <ul class="follow_content" :style="this.width | contentWidth(floorTatol)">
        <li class="follow" v-for="(item,index) in tab_list" :key="index" :class="{active:index === number}" @click="checkTab(item , index)">
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["floorTatol"],
  data() {
    return {
      tab_list: [],
      width: 0,
      number: 0,
      isMore:false
    };
  },
  filters: {
    contentWidth(width, length) {
      return `width:${width * length}rem;`;
    }
  },
  created() {
    this.width = 1.2;
    this.createdTab();
    this.ifMore(this.floorTatol);
  },
  methods: {
    createdTab() {
      for (let i = 0; i < this.floorTatol; i++) {
        this.tab_list.push({
          title: "楼层" + i,
          index: i
        });
      }
    },
    checkTab(item, index) {
      this.number = index;
      this.$root.eventHub.$emit("changeFollow", index);
    },
    ifMore(index){
      if (index > 5) {
        this.isMore = true;
        setTimeout(() => {
          this.isMore = false;
        }, 1200);
      }

    }
  }
};
</script>


<style lang="less" scoped>
.follow_wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 1rem;
  background-color: #fff;
  opacity: 0.8;
  width: 7.5rem;
  overflow: hidden;
  .tip{
    position: absolute;
    animation: tips 1.2s linear;
    top: 50%;
    transform: translateY(-50%);
  }
  @keyframes tips {
    25%{
      right: 0.1rem;
    }
    50%{
      right: 0;
    }
    75%{
      right: 0.1rem;
    }
    100%{
      right: 0;
    }
  }
  .follow_box {
    width: 7.5rem;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .follow_content {
      height: 1rem;
      overflow-x: auto;
      .follow {
        height: 1rem;
        float: left;
        text-align: center;
        line-height: 1rem;
        color: #000;
        width: 1.2rem;
        &.active {
          color: #f00;
        }
      }
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
