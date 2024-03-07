import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeApp from '../components/home/HomeApp.vue'
import AdminPages from '../components/admin/AdminPages.vue'
import ArticlesByCategory from '../components/article/ArticlesByCategory'
import ArticleById from '../components/article/ArticleById'
import AuthPage from '../components/auth/AuthPage'

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
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
},{
    name: 'auth',
    path: '/auth',
    component: AuthPage
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
})