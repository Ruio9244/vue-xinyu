import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCanvasPoster from 'vue-canvas-poster'
import { rtdbPlugin } from 'vuefire'
// import * as firebase from "firebase/app";
import 'firebase/firestore';
import './quasar'

import App from './App.vue'
import Home from './page/home/index'
import Certification from './page/certification/index'
import CertificationList from './page/certification-list/index'
import ErrorPage from './page/error-page/index'


Vue.use(VueRouter);
// 注册组件库
Vue.use(vueCanvasPoster);
Vue.use(rtdbPlugin);
Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: "/home", name: 'Home', component: Home},
        {path: "/certification", name: 'Certification', component: Certification},
        {path: "/certification-list", name: 'CertificationList', component: CertificationList},
        {path: "/", redirect: "home"},
        {path: "*", component: ErrorPage}]
});

/*const firebaseConfig = {
    apiKey: "AIzaSyAIuEiZvQwvPnpafgfMmNMD-cps-Y5Yjqw",
    authDomain: "nlxinyu.firebaseapp.com",
    databaseURL: "https://nlxinyu.firebaseio.com",
    projectId: "nlxinyu",
    storageBucket: "nlxinyu.appspot.com",
    messagingSenderId: "572066920993",
    appId: "1:572066920993:web:1452c71d76aaa6887fc160",
    measurementId: "G-PR0D9Q2PF2"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();*/

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');
