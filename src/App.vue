<template>
  <div id="nav">
		<!-- <keep-alive>
			<router-view></router-view>
		</keep-alive> -->
		<router-view v-slot="{ Component }" :key="key" >
		  <keep-alive exclude="Detail">
		    <component :is="Component" />
		  </keep-alive>
		</router-view>
		<main-tab-bar></main-tab-bar>
  </div>
  
</template>

<script>
	import MainTabBar from "./components/content/mainTabBat/MainTabBar.vue"
	export default {
		name: 'App',
		components: {
			MainTabBar
		},
		computed:{
			key(){
				return this.$route.path
			}
		}
	}
</script>



<style>
@import '~assets/css/bace.css';
</style>
