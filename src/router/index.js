import Vue from 'vue'
import Router from 'vue-router'
import cinema from "../components/Tabbar/Cinema/cinema.vue"
import my from "../components/Tabbar/My/my.vue"
import movie from "../components/Tabbar/Movie/movie.vue"
import wellreceived from "../components/Tabbar/Movie/Film/wellreceived.vue"
import tobeshownsoon from "../components/Tabbar/Movie/Film/tobeshownsoon.vue"
import city from "../components/Tabbar/Movie/Film/city.vue"
import search from "../components/Tabbar/Movie/Film/search.vue"
import movieinfo from "../components/Tabbar/Movie/Info/movieinfo.vue"
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/movie" },
    { path: "/movie", redirect: "/movie/wellreceived" },
    { path: "/movie/wellreceived", component: wellreceived, name: wellreceived },
    { path: "/movie/city", component: city },
    { path: "/movie/tobeshownsoon", component: tobeshownsoon },
    { path: "/movie/search", component: search },
    { path: "/cinema", component: cinema },
    { path: "/my", component: my },
    { path: "/movie/wellreceived/movieinfo/1/:id", component: movieinfo, name: "wellmovieinfo" },
    { path: "/movie/tobeshownsoon/movieinfo/2/:id", component: movieinfo, name: "tobemovieinfo" }
  ]
})
