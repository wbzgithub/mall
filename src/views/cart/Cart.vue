<template>
	<div class="cart">
		<nav-bar class="cart-navbar">
			<template #center>购物车({{cartLength}})</template>
		</nav-bar>
		<scroll class="cart-scroll" ref="scroll">
			<cart-list></cart-list>
		</scroll>
		<cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import CartList from './Cartcommon/CartList.vue'
	import { mapGetters } from 'vuex'
	import CartBottomBar from './Cartcommon/CartBottomBar.vue'
	
	export default{
		name:"Cart",
		components:{
			NavBar,
			Scroll,
			CartList,
			CartBottomBar
		},
		computed:{
			...mapGetters(['cartLength'])
		},
		activated() {
			this.$refs.scroll.refresh()
		},
	}
</script>

<style scoped>
	.cart{
		height: 100vh;
		overflow: hidden;
	}
	.cart-navbar{
		background-color: var(--color-tint);
		color: white;
		font-weight: 500;
		position: relative;
		z-index: 9;
	}
	.cart-scroll{
		height: calc(100% - 133px);
		overflow: hidden;
	}
	.cart-bottom-bar{
		position: relative;
		bottom: 0px;
	}
</style>
