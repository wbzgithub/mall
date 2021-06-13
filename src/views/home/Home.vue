<template>
	<div id="home">
		<nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
		<tab-control :titles="['流行','新款','精选']" 
									ref="tabcontrol2" 
									@tabClick="tabClick"
									v-show="isTabControl">
									</tab-control>
		<scroll class="content" ref="scroll" 
						@scrollPosition="contentScroll"
						@pullingUp="loadMore"
						:probe-type="3"
						:pull-up-load="isPullUpLoad">
			<home-swiper :banners='banners'
										class="home-swiper"
										@is-swiper-img-load="isSwiperImgLoad">
			 </home-swiper>
			<home-recommend :recommend="recommends"></home-recommend>
			<feature ></feature>
			<tab-control :titles="['流行','新款','精选']"
									@tabClick="tabClick"
			 ref="tabcontrol1" 
			  ></tab-control>
			<!-- <goods-list :goods="showGoods" @item-img-load="itemImgLoad"></goods-list> -->
			<goods-list :goods="showGoods" ></goods-list>
		</scroll>
		<back-top @Click.native="TopClick" v-show="isShowBackTop"></back-top>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import TabControl from 'components/content/tabConrol/TabControl'
	import Feature from './Homecommon/Feature.vue'
	import Scroll from 'components/common/scroll/Scroll'
	
	import HomeSwiper from './Homecommon/HomeSwiper.vue'
	import HomeRecommend from './Homecommon/HomeRecommend.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	import {getHomeMultidata, getHomeGoods} from 'network/home'
	export default{
		name:"Home",
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommend,
			Feature,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0 ,list:[]},
					'new':{page:0 ,list:[]},
					'sell':{page:0 ,list:[]}
				},
				currentType:'pop',
				isShowBackTop:false,
				isPullUpLoad:true,
				isTabControl:false,
				tabControlSetTop:null
			}
		},
		created() {
			//1.请求多个数据
			this.getHomeMultidata(),
			//2.请求商品数据
			this.getHomeGoods('pop'),
			this.getHomeGoods('new'),
			this.getHomeGoods('sell')
		},
		mounted() {
			//监听item中图片加载事件完成
			const refresh = this.debounce(this.$refs.scroll.refresh, 200)
			// let timer = null
			this.$bus.on('itemImgLoad',() => {
				refresh()	
			})
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			//防抖
			debounce(func, delay){
				let timer = null
				return function(...args){
					if(timer) clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this , args)
					},delay)
				}
			},
			//点击事件
			tabClick(index){
				switch(index){
					case 0:
					this.currentType = 'pop';
					break;
					case 1:
					this.currentType = 'new';
					break;
					case 2:
					this.currentType = 'sell';
					break;
				}
				this.$refs.tabcontrol1.curentIndex = index
				this.$refs.tabcontrol2.curentIndex = index
			},
			TopClick(){
				this.$refs.scroll.scrollTo(0,0)
			},
			contentScroll(position){
				//判断上拉箭头是否出现
				this.isShowBackTop = -position.y > 4000
				//判断tab-control是否出现
				this.isTabControl = (-position.y) > this.tabControlSetTop
			},
			//事件监听
			loadMore(){
				this.getHomeGoods(this.currentType)
			},
			// itemImgLoad(){
			// 	this.debounce(this.$refs.scroll.refresh(), 200)
			// },
			isSwiperImgLoad(){
				this.tabControlSetTop = this.$refs.tabcontrol1.$el.offsetTop
			},
			
			
			//网络请求
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page +1
				getHomeGoods(type,page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					this.$refs.scroll && this.$refs.scroll.finishPullUp()
				})
			}
		}
	}
</script>

<style scoped="">
	#home{
		position: relative;
	}
	.home-nav{
		background-color: pink;
		color: white;
		position: relative;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
