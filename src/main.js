import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCanvasPoster from 'vue-canvas-poster'
import App from './App.vue'
import Home from './page/home/index'
import Certification from './page/certification/index'
import ErrorPage from './page/error-page/index'
Vue.use(VueRouter)
// 注册组件库
Vue.use(vueCanvasPoster)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: "/", component: Home},
        {path: "/certification", component: Certification},
        {path: "*", component: ErrorPage}]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
})
