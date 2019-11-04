<template>
  <div id="app">
    <div class="header">
      <i class="iconfont icon-fanhui" @click="go" v-show="flag"></i>
      <h1 v-if="flag">影片详情</h1>
      <h1 v-else>陈炳光vue-webapp2</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import mui from "./mui/dist/js/mui.min.js";
export default {
  name: "App",
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    switch (this.$route.path) {
      case "/movie/wellreceived":
        this.flag = false;
        break;
      case "/movie/city":
        this.flag = false;
        break;
      case "/movie/tobeshownsoon":
        this.flag = false;
        break;
      case "/movie/search":
        this.flag = false;
        break;
      case "/cinema":
        this.flag = false;
        break;
      case "/my":
        this.flag = false;
        break;
      default:
        this.flag = true;
    }
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    this.messagebox();
  },
  methods: {
    messagebox() {
      this.$http.get("/api/getLocation").then(res => {
        var that = this;
        var num = JSON.parse(localStorage.getItem("id"));
        var city = JSON.parse(localStorage.getItem("nm"));
        num = res.data.data.id;
        city = res.data.data.nm;
        if (res.data.data.id === that.$store.state.id) {
          return;
        }
        mui.confirm(
          res.data.data.nm,
          "当前城市定位",
          ["取消", "确认"],
          function(e) {
            if (e.index == 1) {
              localStorage.setItem("id", JSON.stringify(num));
              localStorage.setItem("nm", JSON.stringify(city));
              that.$store.commit("msgboxupdateid", {
                id: res.data.data.id,
                nm: res.data.data.nm
              });
              location.reload();
            }
          }
        );
      });
    },
    go() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      switch (newVal) {
        case "/movie/wellreceived":
          this.flag = false;
          break;
        case "/movie/city":
          this.flag = false;
          break;
        case "/movie/tobeshownsoon":
          this.flag = false;
          break;
        case "/movie/search":
          this.flag = false;
          break;
        case "/cinema":
          this.flag = false;
          break;
        case "/my":
          this.flag = false;
          break;
        default:
          this.flag = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  padding-bottom: 50px;
  padding-top: 94px;
  height: 100%;

  .header {
    width: 100%;
    height: 50px;
    background-color: #e54847;
    position: fixed;
    top: 0;
    z-index: 888;
    i {
      display: inline-block;
      font-size: 15px;
      font-weight: bold;
      color: #eae7e7;
      position: absolute;
      top: 13px;
      left: 10px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
      color: white;
      font-weight: 400;
      line-height: 50px;
      margin: 0;
      z-index: 999;
    }
  }
}

//   .v-enter{
//     opacity: 0;
//     transform: translateX(100%);

//   }

//  .v-leave-to {
//     opacity: 0;
//     transform: translateX(-100%);

//  }

//   .v-enter-active,
//   .v-leave-active{
//     transition: all .2s ease;
//   }
</style>
