<template>
  <transition mode="out-in">
    <div>
      <div class="info-header">
        <div class="bgfilter" :style="bgimg"></div>
        <img :src="info.img" alt />
        <div class="right">
          <span>{{info.nm}}</span>
          <span>{{info.enm}}</span>
          <span>{{info.sc}}</span>
          <span>{{info.cat}}</span>
          <span>{{info.src}} / {{info.dur}}分钟</span>
          <span>{{info.pubDesc}}</span>
        </div>
      </div>
      <div class="info-body">{{info.dra}}</div>
      <div class="hidden">
        <div
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <!--这里放置真实显示的DOM内容-->
            <img
              v-for="(item,index) in info.photos"
              :key="index"
              :src="item | img(70 + '.' + 100)"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import mui from "../../../../mui/dist/js/mui.min.js";
export default {
  name: "movienfo",
  data() {
    return {
      id: this.$route.params.id,
      info: {},
      bgimg: {}
    };
  },
  created() {
    this.getinfolist();
  },
  mounted() {
    this.$nextTick(() => {
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0008, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        bounce: true,
        scrollX: true,
        indicators: true
      });
    });
  },
  methods: {
    getinfolist() {
      this.$http
        .get("/api/detailmovie?movieId=" + this.id)
        .then(res => {
          this.info = res.data.data.detailMovie;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    "info.img": function(newVal) {
      this.info.img = newVal.replace("w.h", 108 + "." + 150);
      this.bgimg = {
        "background-image": "url(" + newVal.replace("w,h", 148, 208) + ")"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.info-header {
  height: 200px;
  width: 100%;

  margin-top: -45px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;

  .bgfilter {
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }
  img {
    width: 108px;
    height: 150px;
  }
  .right {
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
      color: #e5e2e2;
      font-size: 15px;
    }
    span:first-child {
      font-size: 20px;
      color: white;
    }
  }
}

.info-body {
  padding: 10px 10px 30px;
  font-weight: bold;
}

.hidden {
  padding: 0 10px;
}
.mui-scroll {
  img {
    width: 70px;
    height: 100%;
    margin-right: 10px;
  }
}
</style>