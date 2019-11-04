<template>
  <div>
    <navbar></navbar>
    <tabbar></tabbar>
    <loading :isshow="isloading"></loading>
    <div class="city-body">
      <div class="hot-city">
        <h2>热门城市</h2>
        <ul>
          <li
            v-for="item in hotcitylist"
            :key="item.id"
            @click="cities(item.id,item.nm)"
          >{{item.nm}}</li>
        </ul>
      </div>
      <div class="sort-city">
        <div class="city-block" v-for="item in citylist" :key="item.index">
          <h2 ref="h2">{{item.index}}</h2>
          <ul>
            <li
              v-for="every in item.list"
              :key="every.id"
              @click="cities(every.id,every.nm)"
            >{{every.nm}}</li>
          </ul>
        </div>
      </div>
      <div class="index-city">
        <ul>
          <li v-for="(item,i) in citylist" :key="item.index" @click="cityjump(i)">{{item.index}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../../Subcomponents/navbar";
import tabbar from "../../../Subcomponents/tabbar";
export default {
  name: "city",
  data() {
    return {
      citylist: [],
      hotcitylist: [],
      isloading: true
    };
  },
  created() {
    this.getcitylist();
  },
  methods: {
    getcitylist() {
      this.$http.get("/api/cityList").then(res => {
        var list = res.data.data.cities;
        var arr = [];
        var city = [];
        var newarr2 = [];
        list.forEach(item => {
          arr.push(item.py[0].toUpperCase());
          city.push({
            nm: item.nm,
            id: item.id,
            one: item.py[0].toUpperCase()
          });
          if (item.isHot == 1) {
            newarr2.push(item);
          }
        });
        this.hotcitylist = newarr2; //热门城市分类
        console.log(this.hotcitylist);
        var set = new Set(arr);
        set = Array.from(set);
        var newarr = [];
        set.forEach(item => {
          newarr.push({ index: item, list: [] });
        });
        for (var i = 0; i < newarr.length; i++) {
          var naitem = newarr[i];
          for (var j = 0; j < city.length; j++) {
            if (city[j].one === naitem.index) {
              naitem.list.push(city[j]);
            }
          }
        }
        newarr.sort((a, b) => {
          if (a.index > b.index) {
            return 1;
          } else if (a.index < b.index) {
            return -1;
          } else {
            return 0;
          }
        });
        this.citylist = newarr;
        this.isloading = false; //以城市首字母拼音分类好的数据，以城市块分类
        console.log(this.citylist);
      });
    },
    cityjump(i) {
      var h2 = this.$refs.h2;
      document.documentElement.scrollTop = document.body.scrollTop = 1;
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = h2[i].offsetTop - 95;
      } else if (document.body.scrollTop) {
        document.body.scrollTop = h2[i].offsetTop - 95;
      }
    },
    cities(id, nm) {
      localStorage.setItem("id", JSON.stringify(id));
      localStorage.setItem("nm", JSON.stringify(nm));
      this.$store.commit("updateid", { id: id, nm: nm });
      this.$router.push("wellreceived");
    }
  },
  components: {
    navbar,
    tabbar
  }
};
</script>

<style scoped lang="scss">
.city-body {
  background-color: rgb(252, 229, 229);

  .hot-city {
    padding-top: 20px;
    h2 {
      margin: 0;
      background-color: #dcd7d7;
      font-size: 14px;
      line-height: 28px;
      padding-left: 12px;
      font-weight: 400;
    }
    ul {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;

      li {
        width: 103px;
        margin: 16px 0 0 11px;
        background-color: white;
        text-align: center;
        line-height: 29px;
        border-radius: 3px;
        border: 1px solid gainsboro;
        font-weight: 400;
      }
    }
  }
  .sort-city {
    .city-block {
      margin-top: 20px;
      h2 {
        margin: 0;
        background-color: #dcd7d7;
        font-size: 14px;
        line-height: 28px;
        padding-left: 12px;
        font-weight: 400;
      }
      ul {
        padding-left: 11px;
        margin-top: 8px;
        list-style-type: none;
        li {
          line-height: 30px;
        }
      }
    }
  }
  .index-city {
    background-color: white;
    height: 100%;
    width: 22px;
    text-align: center;
    font-size: 16px;
    position: fixed;
    right: 0;
    top: 94px;

    ul {
      padding: 25px 0;
      list-style-type: none;
      li {
        height: 22px;
        width: 21px;
      }
    }
  }
}
</style>