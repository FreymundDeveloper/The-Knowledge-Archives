import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeApp from '../components/home/HomeApp.vue'
import AdminPages from '../components/admin/AdminPages.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeApp
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
})