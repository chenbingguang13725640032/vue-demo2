import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/iconfont/iconfont.css"
import Vuex from "vuex"
import axios from "axios"
import "./mui/dist/css/mui.css"
import Mint from "mint-ui"
import loading from "./components/Subcomponents/loading.vue"
Vue.use(Mint)
Vue.prototype.$http = axios;
Vue.use(Vuex)

Vue.config.productionTip = false

var store = new Vuex.Store({
    state: {
        id: JSON.parse(localStorage.getItem("id")) || 285,
        nm: JSON.parse(localStorage.getItem("nm")) || "阳江"
    },
    mutations: {
        //点击城市关联vuex数据
        updateid(state, info) {
            state.id = info.id;
            state.nm = info.nm;
        },
        //定位点击关联vuex数据
        msgboxupdateid(state, info) {
            state.id = info.id;
            state.nm = info.nm;
        }
    }
})

Vue.component("loading", loading)

Vue.filter("img", (data, wh) => {
    return data.replace("w.h", wh)
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})