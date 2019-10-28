<template>
  <div class="cinema-container">
      cinema
     <tabbar></tabbar>
  </div>
  
</template>

<script>
import tabbar from "../../Subcomponents/tabbar"
export default {
    name:"cinema",
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        tabbar
    }
}
</script>

<style scoped lang="scss">
.cinema-container{
    margin-top: -44px;
}
</style>