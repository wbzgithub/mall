<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommendItem">
			<a :href="item.link">
				<img :src="item.image" />
				<p>{{item.title}}</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommend:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		width: 100%;
		text-align: center;
	}
	.recommendItem{
		width: 25%;
		padding: 2px;
		border-bottom: solid #bbbbbb;
		box-sizing: border-box;
		float: left;
	}
	 img{
		width: 100%;
		margin-bottom: 2px;
	}
</style>
