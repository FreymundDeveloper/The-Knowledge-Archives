<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<HeaderMain title="The Knowledge Archives" :hideToggle="!user" :hideUserDropdown="!user" />
		<MenuMain v-if="user"/>
		<LoadingMain v-if="validatingToken" />
		<ContentMain v-else />
		<FooterMain />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios'
import { baseApiUrl, userKey } from '@/global'
import HeaderMain from './components/template/HeaderMain.vue';
import MenuMain from './components/template/MenuMain.vue';
import ContentMain from './components/template/ContentMain.vue';
import FooterMain from './components/template/FooterMain.vue';
import LoadingMain from './components/template/LoadingMain.vue';

export default {
	name: "App",
	components: { HeaderMain, MenuMain, ContentMain, FooterMain, LoadingMain },
	computed: mapState(['isMenuVisible', 'user']),
	data: function() {
		return { validatingToken: true }
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if (!userData) {
				this.validatingToken = false
				return this.$router.push({ name: 'auth' })
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (res.data) this.$store.commit('setUser', userData)
			else {
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas: 
			"header header"
			"menu content"
			"menu footer";
	}

	#app.hide-menu {
		grid-template-areas: 
			"header header"
			"content content"
			"footer footer";
	}
</style>