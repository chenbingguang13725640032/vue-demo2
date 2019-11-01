<template>
  <div>
      <mt-loadmore  ref="loadmore"  :top-method="loadTop" :topPullText="topPullText" :topDropText="topDropText" :topLoadingText="topLoadingText"> 
          <slot></slot>
           </mt-loadmore>
  </div>
</template>

<script>
export default {
    name:"update",
    data(){
        return {
             topPullText:"",
            topDropText:"刷新中。。。",
            topLoadingText:"刷新完成"
        }
    },
  methods:{
       loadTop(){   
                this.$emit("tijiao")
                this.$refs.loadmore.onTopLoaded(); 
              }
  }
    
}
</script>

<style>

</style>