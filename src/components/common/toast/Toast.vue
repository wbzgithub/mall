<template>
	<div class="toast">
		<div v-show="show">
			{{messages}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'Toast',
		props:{
			messages:{
				type:String,
				default: 'adasdasdsdadas'
			},
			show:{
				type:Boolean,
				default:false
			}
		},
		
	}
</script>

<style scoped>
	.toast {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50% , -50%);
		background-color: rgba(20,20,20,0.3);
		box-shadow: 0 0px 5px 1px #878787;
		color: white;
		
	}
</style>
