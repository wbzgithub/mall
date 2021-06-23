<template>
	<div class="home-swiper">
		<swiper >
			<swiper-item v-for='item in banners'>
				<a :href="item.link">
					<img :src="item.image" @load="isSwiperImgLoad"/>
				</a>
			</swiper-item>
		</swiper>
	</div>
	
</template>

<script>
	import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
	export default{
		name:'HomeSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			isSwiperImgLoad(){
				this.$emit('isSwiperImgLoad')
			},
		}
	}
</script>

<style scoped>
img{
	width:100%
}
</style>
