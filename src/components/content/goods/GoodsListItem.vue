<template>
	<div class="goodsItem" @click="itemClick">
		<img :src="goodsItem.show.img" @load="imgLoad" />
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">￥{{goodsItem.price}}</span>
			<span class="collect">收藏量{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				ImgLoadDebounce: null ,
			}
		},
		created() {
			this.ImgLoadDebounce = this.debounce(() => {
				this.$bus.emit('itemImgLoad')
				// console.log('000')
			}, 0)
		},
		methods:{
			debounce(func, delay){
				let timer = null
				return function(...args){
					if(timer)clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this , args)
					},delay)
				}
			},
			imgLoad(){
				// this.$bus.emit('itemImgLoad')
				this.ImgLoadDebounce();
			},
			itemClick(){
				this.$router.push('/detail/'+ this.goodsItem.iid)
			},
		},
	}
</script>

<style scoped>
	.goodsItem{
		width: 48%;
		padding-bottom: 40px;
		position: relative;
	}
	.goods-item img{
		width: 100%;
		border-radius: 5px;
	}
	.goods-info{
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	.goods-info p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}
	.goods-info .price{
		color: var(--color-high-text);
		margin-right: 20px;
	}
	.goods-info .collect {
		position: relative;
	}
	.goods-info .collect::before{
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		
	}
</style>
