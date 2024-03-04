<template>
    <div class="admin-pages">
        <TitleMain icon="fa fa-cogs" main=" System Administration" 
            sub="Registrations & Administrative Information Control" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Articles" active>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title="Categories" active>
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Users" active>
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
  </div>
</template>

<script>
import TitleMain from '../template/TitleMain.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'

export default {
    name: 'AdminPages',
    components: { TitleMain, ArticleAdmin, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>