import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueCanvasPoster from 'vue-canvas-poster'

Vue.use(VueRouter)
// 注册组件库
Vue.use(vueCanvasPoster)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
