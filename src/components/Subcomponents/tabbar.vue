<template>
  <div>
    <div class="fotter">
      <router-link class="f" tag="div" to="/movie">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link class="f" tag="div" to="/cinema">
        <i class="iconfont icon-icon-cinemas"></i>
        <p>影院</p>
      </router-link>
      <router-link class="f" tag="div" to="/my">
        <i class="iconfont icon-Icon_wode"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.fotter {
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 2px solid #d6d5d3;
  position: fixed;
  z-index: 222;
  bottom: 0;
  display: flex;
  justify-content: space-around;

  .router-link-active {
    color: red;
  }
  .f {
    text-align: center;
    padding: 4px 0;

    i {
      display: inline-block;
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>