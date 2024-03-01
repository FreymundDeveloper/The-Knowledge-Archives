<template>
	<div id="app">
		<HeaderMain title="The Knowledge Archives" :hideToggle="false" />
		<MenuMain />
		<ContentMain />
		<FooterMain />
	</div>
</template>

<script>
import HeaderMain from './components/template/HeaderMain.vue';
import MenuMain from './components/template/MenuMain.vue';
import ContentMain from './components/template/ContentMain.vue';
import FooterMain from './components/template/FooterMain.vue';

export default {
	name: "App",
	components: { HeaderMain, MenuMain, ContentMain, FooterMain }
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
</style>