<template>
  <div id="app">
   <div class="header">
     <h1>陈炳光vue-webapp2</h1>
   </div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
  #app{
    padding-bottom: 50px;
    .header{
      width: 100%;
      height: 50px;
      background-color: #e54847;
     
      h1{
        text-align: center;
        font-size: 18px;
        color: white;
        font-weight: 400;
        line-height: 50px;
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
