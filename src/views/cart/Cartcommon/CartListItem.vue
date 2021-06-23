<template>
	<div class="content">
		<div class="check" @click="checkClick">
			<check-button class="check-bottom" :is-checked="product.isChecked"></check-button>
		</div>
		<div class="nav-img"><img :src="product.image"></div>
		<div class="section">
			<p>{{product.title}}</p>
			<p>{{product.desc}}</p>
			<div class="shop-bottom">
				<span>￥{{product.price}}</span>
				<span class="count">x{{product.count}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import CheckButton from "@/components/content/checkButton/CheckButton";
	export default{
		name:'CartListItem',
		props:{
			product:Object
		},
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList'])
		},
		methods:{
			checkClick(){
				this.product.isChecked = !this.product.isChecked
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 3px;
		border: 1px solid #d3d3d3;
		overflow: hidden;
	}
	.check{
		float: left;
		position: relative;
		margin-right: 5px;
	}
	.check-bottom{
		position: relative;
		top: 50px;
	}
	li{
		list-style: none;
	}
	.nav-img {
		height: 120px;
		width: 80px;
		border-radius: 20px;
		overflow: hidden;
		float: left;
	}
	img{
		height: 100%
	}
	
	.section{
		overflow: left;
		margin-top: 15px;
		margin-left: 5px;
	}
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 25px;
	}
	 span{
		color: red;
		margin-bottom: 5px;
	}
	.shop-bottom{
		display: flex;
		justify-content:space-between
	}
	.count{
		color: #000000;
		
	}
</style>
