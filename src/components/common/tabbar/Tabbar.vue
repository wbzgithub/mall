<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:"Tabbar"
	}
</script>


<style>
	#tab-bar{
		display: flex;
		height: 3.0625rem;
		background-color: #f3f3f3;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		cursor: pointer;
		z-index: 9;
	}
	
</style>
