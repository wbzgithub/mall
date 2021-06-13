<template>
	<div class="tab-bar-item" @click="itemClick">
		
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			link:String,
			activeColor:{
				type:String,
				default:"red"
			}
		},
		// data() {
		// 	return {
		// 		isActive:true,
		// 	}
		// },
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.link) !== -1
			},
			activeStyle() {
				return this.isActive? {color:this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.link)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		box-shadow: 0 -3px 2px 1px rgba(100,100,100,0.1);
	}
	.tab-bar-item img{
		height: 28px;
		width: 40px;
	}
</style>
