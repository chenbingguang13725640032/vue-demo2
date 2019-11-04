<template>
  <div class="cinema-container">
    <tabbar></tabbar>
    <loading :isshow="isloading"></loading>
    <div class="cinemanav">
      <div>
        <span>全城</span>
        <i class="iconfont icon-daosanjiao-"></i>
      </div>
      <div>
        <span>品牌</span>
        <i class="iconfont icon-daosanjiao-"></i>
      </div>
      <div>
        <span>特色</span>
        <i class="iconfont icon-daosanjiao-"></i>
      </div>
    </div>
    <div class="cinemabody">
      <ul>
        <update @tijiao="getcinemalist">
          <transition-group appear :ducation="500">
            <li v-for="item in cinemalist" :key="item.id">
              <p>
                {{item.nm}}
                <span>{{item.sellPrice}}</span>
                <span>元起</span>
              </p>
              <p>{{item.addr}}</p>
              <span class="sp1">{{item.distance}}</span>
              <p>
                <!-- 遍历对象，i是键，itemcard是值 -->
                <span
                  :class="i | formatcardclass"
                  v-for="(itemcard,i) in item.tag"
                  :key="i"
                >{{i | formatcard}}</span>
              </p>
            </li>
          </transition-group>
        </update>
      </ul>
    </div>
  </div>
</template>

<script>
import tabbar from "../../Subcomponents/tabbar";
import update from "../../Subcomponents/update";
export default {
  name: "cinema",
  data() {
    return {
      cinemalist: [],
      isloading: true
    };
  },
  created() {
    this.getcinemalist();
  },
  methods: {
    getcinemalist() {
      this.$http
        .get("/api/cinemaList?cityId=" + this.$store.state.id)
        .then(res => {
          var msg = res.data.data.cinemas;
          for (var i = 0; i < msg.length; i++) {
            var mit = msg[i].tag;
            for (var key in mit) {
              if (mit[key] != 1) {
                delete mit[key];
              }
            }
          }
          this.cinemalist = msg;
          this.isloading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    formatcard: function(data) {
      var arr = [
        { key: "allowRefund", value: "改签" },
        { key: "endorse", value: "退" },
        { key: "sell", value: "折扣卡" },
        { key: "snack", value: "小吃" }
      ];
      for (var i = 0; i < arr.length; i++) {
        if (data === arr[i].key) {
          return arr[i].value;
        }
      }
    },
    formatcardclass: function(data) {
      var arr = [
        { key: "allowRefund", value: "cardy" },
        { key: "endorse", value: "cardb" },
        { key: "sell", value: "cardy" },
        { key: "snack", value: "cardb" }
      ];
      for (var i = 0; i < arr.length; i++) {
        if (data === arr[i].key) {
          return arr[i].value;
        }
      }
    }
  },
  components: {
    tabbar,
    update
  }
};
</script>

<style scoped lang="scss">
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(125px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-leave-active {
  position: absolute;
}

.v-move {
  transition: all 0.5s ease;
}

.cinema-container {
  margin-top: -44px;
  .cinemanav {
    display: flex;
    justify-content: space-around;
    line-height: 46px;
    border-bottom: 1px solid #d2d0d0;
    i {
      font-size: 12px;
    }
  }
  .cinemabody {
    ul {
      li {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #d2d0d0;
        p {
          margin: 0;
        }
        p:nth-child(1) {
          font-size: 16px;
          color: black;
          margin-bottom: 8px;
          span:nth-child(1) {
            font-size: 19px;
            color: #f14646;
          }
          span:nth-child(2) {
            font-size: 14px;
            color: #f14646;
          }
        }
        p:nth-child(2) {
          font-size: 13px;
        }
        .sp1 {
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
          color: grey;
        }
        p:last-child {
          margin-top: -10px;
          margin-left: -8px;
          .cardy {
            color: #d6d64a;
            border: 1px solid #d6d64a;
            border-radius: 3px;
            padding: 2px 1px;
            font-weight: bold;
            margin-left: 0.5em;
          }
          .cardb {
            color: #6060e2;
            border: 1px solid #6060e2;
            border-radius: 3px;
            padding: 2px 1px;
            font-weight: bold;
            margin-left: 0.5em;
          }
        }
      }
    }
  }
}
</style>