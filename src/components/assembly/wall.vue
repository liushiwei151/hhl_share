<template>
	<!-- 心愿墙 -->
	<div class="wall ">
		<div class="goto_wall" @click="gotoWall"></div>
		<transition-group name="slide" tag="ul">
			<li v-for="(item,index) in tanmu" :key="item.worksId">
				{{item.memberId}} : {{item.remark}}
			</li>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: "wall",
		data() {
			return {
				//模拟心愿墙内容
			}
		},
		props:{
			tanmu:{
				default:[]
			},
		},
		computed: {
			id(){
				let word =[]
				for(let i =0;i<this.tanmu.length;i++){
					let a=this.tanmu[i].memberId+this.tanmu[i].remark+i
					word.push(a)
				}
				return word
			}
		},
		mounted() {
			this.autoPlay();
		},
		methods: {
			//自动播放
			autoPlay() {
				let length = this.tanmu.length;
				if(length>0){
					setTimeout(() => {
						let a = this.tanmu.shift();
						setTimeout(()=>{
							this.tanmu.push(a);
						},3000)
						this.autoPlay();
					}, 2000)
				}else{
					setTimeout(()=>{
						this.autoPlay()
					},1000)
				}
				
			},
			gotoWall(){
				//进入许愿墙
				this.$emit('goto_wall')
			}
		}
	}
</script>

<style lang="less" scoped>
	ul{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 148px;
		width: 100%;
		overflow: hidden;
		// padding-left: 80px;
		box-sizing: border-box;
	}
	li{
		list-style-type: none;
		font-size: 28px;
		margin-bottom:5px ;
		text-align: left;
		width: 100%;
	}
	

	//文字滚动效果
	.slide-enter-active,
	.slide-leave-active {
		transition: all 3s linear;
	}
	.slide-leave-active{
		position: absolute;
	}
	.slide-enter {
		// transform: translateY(40px) ;
		opacity: 0.5;
	}

	.slide-enter-to {
		opacity: 1;
	}

	.slide-leave-to {
		// transform: translateY(-40px) ;
		opacity: 0;
	}
	.slide-move {
		transition: all 2s;
	}
	//轮播文字
	.textBox {
		width: 100%;
		height: 100px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		text-align: center;

		.text {
			width: 100%;
			position: absolute;
			bottom: 0;
			margin-top: 10px;
			color: rgb(200, 130, 45);
			font-size: 30px;
		}
	}

	//心愿墙背景
	.wall {
		background: url(../../../static/home/wall.png) no-repeat;
		width: 651px;
		height: 298px;
		background-size: 100% 100%;
		box-sizing: border-box;
		padding: 100px 50px 50px 50px;
		position: relative;
		.goto_wall{
			background: url(../../../static/home/goto_wall.png) no-repeat;
			width: 382px;
			height: 77px;
			background-size: 100% 100%;
			position: absolute;
			top: 5px;
			left: 134.5px;
		}
	}
	
</style>
