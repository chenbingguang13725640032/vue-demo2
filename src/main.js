import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/iconfont/iconfont.css"
import Vuex from "vuex"
import axios from "axios"
import "./mui/dist/css/mui.css"
import Mint from "mint-ui"
Vue.use(Mint)
Vue.prototype.$http = axios;
Vue.use(Vuex)

Vue.config.productionTip = false

var store = new Vuex.Store({
    state: {

    },
    mutations: {

    }
})

Vue.filter("img", (data, wh) => {
    return data.replace("w.h", wh);
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>' 
})