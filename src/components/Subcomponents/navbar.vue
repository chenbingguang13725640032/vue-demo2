<template>
  <div style="position:fixed;top:50px;z-index:777">
      <div style="position:fixed;width:100%;">
      <ul class="nav">
          <router-link tag="li" to="/movie/city">
              <span>{{$store.state.nm}}</span>
              <i class="iconfont icon-daosanjiao-"></i>
          </router-link>
          <router-link  tag="li" to="/movie/wellreceived" >
              <span>正在热映</span>
          </router-link>
          <router-link  tag="li" to="/movie/tobeshownsoon">
              <span>即将上映</span>
          </router-link>
          <router-link  tag="li" to="/movie/search">
              <i class="iconfont icon-soushuo"></i>
          </router-link>
      </ul>
     </div>
  </div>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {
                flag: true
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        list-style-type: none;
        justify-content: space-around;
        height: 45px;
        line-height: 45px;
        background-color: #fff;
        font-size: 15px;
        font-weight: bold;
        color: gray;
        border-bottom: 1px solid rgb(223, 218, 218);
        
        .router-link-active {
            color: red;
            border-bottom: 2px solid red;
        }
        .ling {
            color: red;
            border-bottom: 2px solid red;
        }
        li:nth-child(1) {
            i {
                font-size: 13px;
            }
        }
        li:nth-child(4) {
            i {
                font-size: 18px;
                color: red;
            }
        }
    }
</style>