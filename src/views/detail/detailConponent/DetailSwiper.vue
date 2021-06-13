<template>
	<div>
			<swiper class="detailSwiper">
				<swiper-item class="detailSwiperItem" v-for="item in DetailSwiperImg" >
					<img :src="item" @load="imgLoad"/>
				</swiper-item>
			</swiper>
		
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	
	export default {
		name:'DetailSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			DetailSwiperImg:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			imgLoad(){
				this.$bus.emit('DetailItemImgLoad')
			}
		}
	}
</script>

<style scoped>
	.detailSwiperItem {
		height: 21.875rem;
	}
	.detailSwiperItem img{
		width: 100%;
	}
</style>
