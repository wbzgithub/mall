<template>
	<div  ref="scrollContent">
		<div >
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import PullUp from '@better-scroll/pull-up'
	
	BScroll.use(PullUp)
	
	export default {
		name:'Scroll',
		components:{
			BScroll
		},
		props:{
			probeType:{
				type:Number,
				default: 0
			},
			pullUpLoad:{
				type: Boolean,
				default(){
					return true
				},
			}
		},
		data(){
			return {
				scroll:null
			}
		},
		mounted() {
			// 创建BScroll对象
			this.scroll = new BScroll(this.$refs.scrollContent , {
				click: true ,
				probeType: this.probeType ,
				pullUpLoad: this.pullUpLoad
			}),
			//2.监听滚动的位置
			this.scroll.on('scroll',(position) => {
				this.$emit('scrollPosition',position)
			}),
			//监听上啦
			this.scroll.on('pullingUp',(a) => {
				this.$emit('pullingUp',{})
			})
		},
		methods:{
			scrollTo(x , y , time=500){
				this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll.refresh()
			},
			getScrollY(){
				return this.scroll ? this.scroll.y : 0
			}
		}
	}
</script>

<style >
	
</style>
