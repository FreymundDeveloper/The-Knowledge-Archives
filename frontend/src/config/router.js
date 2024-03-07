import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeApp from '../components/home/HomeApp.vue'
import AdminPages from '../components/admin/AdminPages.vue'
import ArticlesByCategory from '../components/article/ArticlesByCategory'
import ArticleById from '../components/article/ArticleById'
import AuthPage from '../components/auth/AuthPage'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: HomeApp
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
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

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } 
    else next()
})

export default router