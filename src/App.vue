<template>
	<div id="app">
		<router-view v-if="isrouters"></router-view>
		<div class="wait" v-if="isWait">
			<div class="wait_img"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				isrouters:true,
				isWait:false
			}
		},
		provide(){
			return {
				onoff: this.isrouter,
				wait:this.wait_switch
			};
		},
		methods:{
			//等待刷新
			wait_switch(e){
				this.isWait=e
			},
			//开关路由刷新
			isrouter() {
				this.isrouters = false;
				this.$nextTick(function() {
					this.isrouters = true;
				});
			},
		}
		/*mounted() {
			this.$nextTick(()=>{
							 document.documentElement.scrollTop=0
			})
		}*/
	}
</script>

<style lang="less">
	body,
	html,
	p,
	ul {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.wait{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 100;
		opacity: 0.6;
		background-color: black;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.wait_img{
			background: url(../static/loading.gif) no-repeat;
			background-size: 100% 100%;
			width: 100px;
			height: 100px;
		}
	}
</style>
