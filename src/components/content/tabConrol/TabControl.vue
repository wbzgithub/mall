<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item"
		:class="{active: index === curentIndex}" @click="itemClick(index)">
		<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				curentIndex : 0
			}
		},
		methods:{
			itemClick(index){
				this.curentIndex = index
				this.$emit('tabClick',index)
			},

		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		background-color: #fff;
		position: relative;
		z-index: 9;
	}
	.tab-control-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
		text-align: center;
		box-shadow: 0 5px 1px rgba(100,100,100,0.2);
	}
	.active{
		color: var(--color-high-text);
	}
	.active span{
		border-bottom: 3px solid var(--color-tint);
	}
</style>
