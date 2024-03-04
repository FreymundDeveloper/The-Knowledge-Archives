<template>
  <div class="home">
        <TitleMain icon="fa fa-home" main=" Dashboard" sub="The Knowledge Archives" />
        <div class="stats">
          <StatApp title="Categories" :value="stat.categories" icon="fa fa-folder" color="#d54d50" />
          <StatApp title="Articles" :value="stat.articles" icon="fa fa-file" color="#3bc480" />
          <StatApp title="Users" :value="stat.users" icon="fa fa-user" color="#3282cd" />
        </div>
  </div>
</template>

<script>
import TitleMain from '../template/TitleMain.vue'
import StatApp from './StatApp.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'HomeApp',
    components: { TitleMain, StatApp },
    data: function() {
      return {
        stat: {}
      }
    },
    methods: {
      getStats() {
        axios.get(`${baseApiUrl}/stats`).then(response => this.stat = response.data)
      }
    },
    mounted() {
      this.getStats()
    }
}
</script>

<style>
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>