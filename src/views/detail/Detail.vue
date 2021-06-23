<template>
	<div id="detail" :key="iid" >
		<detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
		<div class="wraper">
			<scroll class="content" ref="detailscroll" 
			:probe-type="3" @scrollPosition="contentScroll" >
				<detail-swiper :DetailSwiperImg="DetailSwiperImg"></detail-swiper>
				<detail-bace-info :goods="goods"></detail-bace-info>
				<detail-shop :shop="shop"></detail-shop>
				<detail-image-info :detail-info="detailinfo" @DetailImageload="DetailImageload"></detail-image-info>
				<detail-param-info :param-info="paramInfo" ref="params" ></detail-param-info>
				<detail-coment :comment-info="commentInfo" ref="comment"></detail-coment>
				<goods-list :goods="recommends" ref="recommends"></goods-list>
			</scroll>
			<detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
		</div>
		<toast :messages="message" :show="show"></toast>
	</div>
</template>

<script>
	import DetailNavBar from './detailConponent/DetailNavBar'
	import DetailSwiper from './detailConponent/DetailSwiper'
	import DetailBaceInfo from './detailConponent/DetailBaceInfo'
	import DetailShop from './detailConponent/DetailShop'
	import DetailImageInfo from './detailConponent/DetailImageInfo.vue'
	import DetailParamInfo from './detailConponent/DetailParamInfo.vue'
	import DetailComent from './detailConponent/DetailComment.vue'
	import GoodsList from './detailConponent/detailGoods/GoodsList.vue'
	import DetailBottomBar from './detailConponent/DetailBottomBar.vue'
	import Toast from 'components/common/toast/Toast.vue'
	
	import Scroll from 'components/common/scroll/Scroll'
	
	
	import {getDetail, getRecommend ,Goods , GoodsParam ,Shop} from 'network/detail.js'
	
	export default{
		name:'Detail',
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaceInfo,
			DetailShop,
			DetailImageInfo,
			DetailParamInfo,
			DetailComent,
			GoodsList,
			DetailBottomBar,
			Toast,
			
			Scroll,

		},
		data(){
			return {
				iid:null,
				DetailSwiperImg:[],
				goods:{},
				shop:{},
				detailinfo: {},
				paramInfo: {},
				commentInfo: {},
				recommends: [],
				titleTopY: [],
				getThemeTopy: null,
				currentIndex: 0,
				show: false,
				message: ''
			}
		},
		created() {
			//保存传入的iid
			this.iid = this.$route.params.iid
			//根据iid请求详细数据
			getDetail(this.iid).then(res => {
				//1.获取顶部的轮播图数据
				const data = res.result
				this.DetailSwiperImg = data.itemInfo.topImages
				//2.获取商品信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				//3.创建店铺信息的对象
				this.shop = new Shop(data.shopInfo)
				//4.保存商品的详情数据
				this.detailinfo = data.detailInfo
				//5.获取参数信息
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
				//6.获取评论信息
					this.commentInfo = data.rate.list[0]
			})
			getRecommend().then((res) => {
				this.recommends = res.data.list
			})
			this.getThemeTopy = this.debounce(()=>{
				this.$nextTick(() => {
					//获取不同组件的offsetTop
					this.titleTopY = [];
					this.titleTopY.push(0);
					this.titleTopY.push(this.$refs.params.$el.offsetTop );
					this.titleTopY.push(this.$refs.comment.$el.offsetTop );
					this.titleTopY.push(this.$refs.recommends.$el.offsetTop );
					this.titleTopY.push(Number.MAX_VALUE);
					// console.log(this.titleTopY);
				});
			},100)
		},
		mounted() {
			//监听item中图片加载事件完成
			const refresh = this.debounce(this.$refs.detailscroll.refresh, 200)
			let timer = null
			this.$bus.on('DetailItemImgLoad',() => {
				refresh()	
			})
			this.$bus.on('itemImgLoad',() => {
				refresh()	
			})
		},
		methods:{
			debounce(func, delay){
				let timer = null
				return function(...args){
					if(timer) clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this , args)
					},delay)
				}
			},
			DetailImageload() {
				this.$refs.detailscroll.refresh()
				//图片加载获取offsettop
				this.getThemeTopy()
			},
			titleClick(index){
				//点击再获取offsettop
				this.getThemeTopy()
				//根据点击的index滚到到指定的高度
				this.$refs.detailscroll.scrollTo(0,-this.titleTopY[index],100)
			},
			contentScroll(position){
				let length = this.titleTopY.length
				for(let i = 0 ; i < length ;i++){
					if(this.currentIndex !== i &&(i < length - 1 && -position.y >= this.titleTopY[i] && -position.y < this.titleTopY[i + 1]
					)|| (i === length - 1 && -position.y >= this.titleTopY[i])){
						this.currentIndex = i
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}
			},
			addCart(){
				// 获取购物车需要展示的信息
				const product = {}
				product.image = this.DetailSwiperImg[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.realPrice;
				product.iid = this.iid;
				//将商品添加到购物车里
				this.$store.dispatch('addCart', product).then(res => {
					this.message = res
					this.show = true
					setTimeout(() => {
						this.show = false
					},1500)
				})
			}
		}
	}
</script>

<style scoped>
	#detail{
		position: relative;
		z-index: 10;
		background-color: #FFFFFF;
	}
	.wraper{
		height: 100vh;
		overflow: hidden;
	}
	.content{
		height: calc(100% - 102px);
	}
</style>
