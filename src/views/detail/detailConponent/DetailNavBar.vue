<template>
	<div id="detail" >
		<nav-bar class="navbar">
			<template v-slot:left>
				<div class="goBack" @click="goBack">
					<img src="~assets/img/detail/goBack.png" />
				</div>
			</template>
			<template v-slot:center class="title">
				<div class="title">
					<div v-for="(item,index) in title" 
					class="titleItem" :class="{activeItem:currentIndex === index}"
					@click="itemClick(index)">{{item}}</div>
				</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	export default {
		name:'DetailNavBar',
		components:{
			NavBar
		},
		data(){
			return{
				title:['商品','参数','评论','推荐'],
				currentIndex:0,
			}
		},
		methods:{
			itemClick(index){
				this.curentIndex = index
				this.$emit('titleClick',index)
			},
			goBack(){
				this.$router.back()
			}
		}
	}
	
</script>

<style scoped>
  #detail .nav-bar .title{
		display: flex;
	}
	.titleItem{
		flex: 1;
		font-size: 15px;
	}
	.activeItem{
		color: #Ff0101;
	}
	.goBack img{
		width: 70%;
	}
</style>
