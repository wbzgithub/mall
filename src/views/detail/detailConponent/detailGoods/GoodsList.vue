<template>
	<div class="goods">
		<!-- <goods-list-item v-for="item in goods" :goods-item="item" @item-img-load="itemImgLoad"></goods-list-item> -->
		<goods-list-item v-for="item in goods" :goods-item="item" ></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	
	export default{
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		},
		methods:{
			// itemImgLoad(){
			// 	this.$emit('itemImgLoad')
			// }
		}
	}
</script>

<style scoped>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
	}
</style>
