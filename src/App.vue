<template>
  <div id="app">
   <div class="header">
     <h1>陈炳光vue-webapp2</h1>
   </div>
      <router-view></router-view>
  </div>
</template>

<script>
import mui from "./mui/dist/js/mui.min.js"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){
    mui.init({
				swipeBack: true //启用右滑关闭功能
      });
      this.messagebox();
  },
  methods:{
    messagebox(){
     this.$http.get("/api/getLocation").then(res=>{
      var that = this;
      var num = JSON.parse(localStorage.getItem("id"));  
      var city = JSON.parse(localStorage.getItem("nm"));
      num = res.data.data.id;
      city = res.data.data.nm;
      if(res.data.data.id === that.$store.state.id){
              return;
          }
      mui.confirm(res.data.data.nm, '当前城市定位', ['取消','确认'], function(e) {
					if (e.index == 1) {
           localStorage.setItem("id",JSON.stringify(num));
           localStorage.setItem("nm",JSON.stringify(city)); 
           that.$store.commit("msgboxupdateid",{id:res.data.data.id,nm:res.data.data.nm})
           location.reload();
					} 
        })
       })   
    }
  }
}
</script>

<style scoped lang="scss">
  #app{
    padding-bottom: 50px;
    padding-top: 94px;
    height: 100%;
    
    .header{
      width: 100%;
      height: 50px;
      background-color: #e54847;
      position: fixed;
      top: 0;
      z-index: 888;
      h1{
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
