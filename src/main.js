import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCanvasPoster from 'vue-canvas-poster'
import { rtdbPlugin } from 'vuefire'
import App from './App.vue'
import Home from './page/home/index'
import Certification from './page/certification/index'
import CertificationList from './page/certification-list/index'
import ErrorPage from './page/error-page/index'
import './quasar'
Vue.use(VueRouter)
// 注册组件库
Vue.use(vueCanvasPoster)
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: "/home", component: Home},
        {path: "/certification", component: Certification},
        {path: "/certification-list", component: CertificationList},
        {path: "/", redirect: "home"},
        {path: "*", component: ErrorPage}]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
})
