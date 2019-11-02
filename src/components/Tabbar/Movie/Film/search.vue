<template>
  <div>
     <navbar></navbar>
     <tabbar></tabbar>
     <div class="search">
       <i class="iconfont icon-search"></i>
       <input type="text" id="ip1" v-model="msg">
     </div>
     <div class="tree">
       <span>电影/电视剧/综艺</span>
     </div>
     <div class="searchmovie">
       <ul>
         <transition-group appear :duaction="500">
         <li class="listitem" v-for="item in searchlist" :key="item.id">
           <img :src="item.img | img(64 + '.' + 88)" alt="">
           <div class="info">
             <p>
               <span>{{item.nm}}</span>
               <span>{{item.sc}}</span>
             </p>
             <p>{{item.enm}}</p>
             <p>{{item.cat}}</p>
             <p>{{item.frt}}</p>
           </div>
         </li>
         </transition-group>
       </ul>
     </div>
     </div>
 
</template>

<script>
import navbar from "../../../Subcomponents/navbar"
import tabbar from "../../../Subcomponents/tabbar"

export default {
    name:"search",
    data(){
        return {
          msg:"",
          searchlist:[],
          timeId:null
        }
    },
    methods:{

    },
   
    watch:{
      "msg":function(newVal){
        clearTimeout(this.timeId);
          this.timeId = setTimeout(()=>{
          this.$http.get("/api/searchList?cityId= " + this.$store.state.id + "&kw=" + newVal).then(res=>{
          if(!res.data.data.movies){
            return;
          }
          this.searchlist = res.data.data.movies.list;
        })
        },500)
      }
    },
    components:{
      navbar,
      tabbar
    }
}
</script>

<style scoped lang="scss">
.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateY(100%)
}

.v-enter-active,
.v-leave-active{
  transition: all .5s ease;
}

.v-leave-active{
	position: absolute;
}

.v-move{
	transition: all .5s ease;
}

  .search{
    height: 47px;
    width: 100%;
    background-color: rgb(236, 235, 232);
     line-height: 47px;
     padding: 0 10px;
    position: relative;
     border-bottom: 1px solid rgb(207, 205, 205);
     z-index: 1;
     i{
       display: inline;
     position: absolute;
     top: 2px;
     left: 21px;
     }
    #ip1{
      height: 20px;
      padding: 15px 0 15px 33px;
     margin-bottom: 0;
      font-size: 14px;
      
    }
  }

  

  .tree{
    width: 100%;
    span{
      display: block;
      font-size: 15px;
      padding: 9px 15px;
      border-bottom: 1px solid rgb(199, 196, 196);
      color: rgb(114, 111, 111);
      font-weight: bold;
    }
  }

  .searchmovie{
    border-bottom: 2px solid #d0cccc;
    .listitem{
      display: flex;
      padding: 10px  0;
      margin: 0 20px;
      border-top: 1px solid #e0dada;
      list-style-type: none;
    img{
      width: 64px;
    }
    .info{
      padding-left: 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
    
      p{
        margin: 0;
        width: 100%;
        line-height: 22px;
        font-size: 14px;
        color: black;
       max-width: 141px;
      overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
        span:nth-child(2){
          position: absolute;
          color: orange;
          right: 16px;
        }
        span{
          font-size: 18px;
        }
      }
    }
     }
  }
</style>