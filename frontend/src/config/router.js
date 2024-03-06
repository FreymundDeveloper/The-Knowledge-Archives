import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeApp from '../components/home/HomeApp.vue'
import AdminPages from '../components/admin/AdminPages.vue'
import ArticlesByCategory from '../components/article/ArticlesByCategory'
import ArticlesById from '../components/article/ArticleById'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeApp
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
},{
    name: 'articlesByCategory',
    path: '/category/:id/articles',
    component: ArticlesByCategory
},{
    name: 'ArticlesById',
    path: '/articles/:id',
    component: ArticlesById
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
})