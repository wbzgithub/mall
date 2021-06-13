<template>
	<div>
		<tab-bar> 
		<tab-bar-item link="/home" >
			<template v-slot:item-text>
				<div>首页</div>
			</template>
				<template v-slot:item-icon>
					<img  src="~assets/img/tabbar/icon01.png" alt="">
				</template>
				<template v-slot:item-icon-active>
					<img src="~assets/img/tabbar/icon01_active.png" alt="">
				</template>
		</tab-bar-item>
		
		<tab-bar-item link="/category" >
			<template v-slot:item-text>
				<div>分类</div>
			</template>
				<template v-slot:item-icon>
					<div><img src="~assets/img/tabbar/icon02.png" alt=""></div>
				</template>
				<template v-slot:item-icon-active>
					<div><img src="~assets/img/tabbar/icon02_active.png" alt=""></div>
				</template>
		</tab-bar-item>
		
		<tab-bar-item link="/cart" >
			<template v-slot:item-text>
				<div>购物车</div>
			</template>
				<template v-slot:item-icon>
					<div><img  src="~assets/img/tabbar/icon03.png" alt=""></div>
				</template>
				<template v-slot:item-icon-active>
					<div><img src="~assets/img/tabbar/icon03_active.png" alt=""></div>
				</template>
		</tab-bar-item>
		
		<tab-bar-item link="/profile" >
			<template v-slot:item-text>
				<div>我的</div>
			</template>
				<template v-slot:item-icon>
					<div><img  src="~assets/img/tabbar/icon04.png" alt=""></div>
				</template>
				<template v-slot:item-icon-active>
					<div><img src="~assets/img/tabbar/icon04_active.png" alt=""></div>
				</template>
		</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from "@/components/common/tabbar/Tabbar.vue"
	import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
