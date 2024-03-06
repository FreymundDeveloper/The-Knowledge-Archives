<template>
    <div class="articles-by-category">
        <TitleMain icon="fa fa-folder-o" :main="category.name" sub="Category" />
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
        }
    },
    mounted() {
        this.category.id = this.$route.params.id
        this.getCategory()
    }
}
</script>

<style>

</style>