<template>
	<div class="wraper">
	<p>分类</p>
	</div>
</template>

<script>
	import BSscroll from '@better-scroll/core'
	
	export default{
		name:"Category",
		data(){
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BSscroll('.wraper')
		}
	}
</script>

<style>

</style>
