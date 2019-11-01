<template>
    <div>
        <navbar></navbar>
        <tabbar></tabbar>
        <ul class="ul">
          <update @tijiao="gettolist">
          <transition-group appear :duaction="500" tag="div">
             <li v-for="item in tolist" :key="item.id">
          <img :src="item.img | img(64 + '.' + 96)" alt="">
        <div class="div">
        <h1>
        {{item.nm}} 
          <img src="../../../../assets/下载.png" v-if="item.version"></img>
        </h1>
        <p>{{item.wish}} 人想看</p>
        <p>主演: {{item.star}}</p>
        <p>{{item.showInfo}}</p>
        </div>
        <p class="dw">
          <input type="button" value="预售">
        </p>
        </li>
         </transition-group>
       </update>
        </ul>
          
    </div>
</template>

<script>
    import navbar from "../../../Subcomponents/navbar"
    import tabbar from "../../../Subcomponents/tabbar"
    import mui from "../../../../mui/dist/js/mui.min.js"
    import update from "../../../Subcomponents/update"
    export default {
        name: "tobeshownsoon",
        data() {
            return {
                id:10,
                tolist:[],
               
            }
        },
        mounted(){
            mui.init({
			        swipeBack: true //启用右滑关闭功能
              });
        },
        created(){
          this.gettolist()
        },
        methods: {
            gettolist(){
                this.$http.get("/api/movieComingList?cityId=" + this.id).then(res=>{
                    res.data.data.comingList.forEach(item=>{
                      if(!item.showInfo){
                        item.showInfo = "即将上映"
                      }
                    })
                    this.tolist = res.data.data.comingList;
                   

                })
                .catch(err=>{
                    mui.alert("请求列表参数错误")
                })
            },
           
        },
        components: {
            navbar,
            tabbar,
            update
        }
    }
</script>

<style scoped lang="scss">
.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateY(110px);
}

.v-enter-active,
.v-leave-active{
  transition: all .3s ease;
}

.v-leave-active{
    position: absolute;
}

.v-move{
    transition: all .5s ease;
}



    .ul{
    list-style-type: none;
  
    li{
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #c8c6c6;
      padding: 12px 0;
      height: 113px;
     
      div{
        display: flex;
       justify-content: space-between;
        flex-direction: column;
        color: gray;
         font-size: 14px;
        margin-left: -3px;
        margin-right: 50px;

        span{
          color: #dddd24;
          font-weight: bold;
          font-size: 17px;
        }
        p{
          max-width: 129px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
         h1{
          
           img{
             width: 50px;
           }
            max-width: 135px;
            text-overflow: ellipsis;
            white-space: nowrap;
        font-size: 16px;
        font-weight: bold;
       color: black;
       margin: 0;
       display: flex;
       justify-content: space-between
      }
      p{
        margin: 0;
      }
      }
     
      img{
        width: 64px;
      }
      .dw{
        display: flex;
        align-items: center;
        margin: 0;
         input{
           text-align: center;
        color: white;
        width: 47px;
        height: 27px;
        background-color: #2d80ec;
        border: none;
        border-radius: 5px;
        outline: none;
       position: relative;
       z-index: -1;
       line-height: 0;
       padding: 0;
      }
      }
    }
  }


 
</style>