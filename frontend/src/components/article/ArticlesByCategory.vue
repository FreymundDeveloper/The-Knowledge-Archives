<template>
    <div class="articles-by-category">
        <TitleMain icon="fa fa-folder-o" :main="category.name" sub="Category" />
        <ul>
            <li v-for="article in articles" :key="article.id">
                {{ article.name }}
            </li>
        </ul>
        <div class="load-more">
            <button class="btn btn-lg btn-outline-primary" 
                v-if="loadMore" @click="getArticles">Load more articles</button>
        </div>
    </div>
</template>

<script>
import TitleMain from '../template/TitleMain.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'ArticlesByCategory',
    components: { TitleMain },
    data: function() {
        return {
            category: {},
            articles: [],
            page: 1,
            loadMore: true
        }
    },
    methods: {
        getCategory() {
            const url = `${baseApiUrl}/categories/${this.category.id}`
            axios(url).then(res => this.category = res.data)
        },
        getArticles() {
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
            axios(url).then(res => {
                this.articles = this.articles.concat(res.data)
                this.page++

                if(res.data.length === 0) this.loadMore = false
            })
        }
    },
    mounted() {
        this.category.id = this.$route.params.id
        this.getCategory()
        this.getArticles()
    }
}
</script>

<style>
    .articles-by-category ul {
        list-style-type: none;
        padding: 0px;
    }

    .articles-by-category .load-more {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>