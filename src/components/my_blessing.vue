<template>
	<div class="blessing">
		<div class="my_blessing">
			<viewer :images="imgUrl" class="scroll">
				<div v-for="(item,index) in imgUrl" :key="index" class="blessing_box">
					<div class="blessing_img"><img :src="item.url" alt="我的祝福"></div>
					<div class="examine">
						<div style="background-image:url('./static/home/pass.png');background-size: 100% 100%;" v-if="item.isCheck==1"></div>
						<div style="background-image:url('./static/home/ing.png');background-size: 100% 100%;" v-if="item.isCheck==0"></div>
						<div style="background-image:url('./static/home/no_pass.png');background-size: 100% 100%;" v-if="item.isCheck==-1"></div>
					</div>
				</div>
			</viewer>
			<div class="back" @click="back"></div>
		</div>
	</div>
</template>

<script>
	import api from "@/getApi.js"
	export default{
		name:'my_blessing',
		data(){
			return{
				imgUrl:[
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":-1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":0},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
					{"url":'https://pic.cwyyt.cn/upload/img/20200228/000713713_21.png',"isCheck":1},
				],
				isPass:['./static/home/pass.png','./static/home/no_pass.png','./static/home/ing.png'],
			}
		},
		inject:['wait'],
		created() {
			this.get_userProductionList()
		},
		methods:{
			back(){
				this.$router.push('/')
			},
			//获取用户祝福接口
			get_userProductionList(){
				this.wait(true);
				api.userProductionList().then((res)=>{
					this.wait(false);
					if(res.data.code==200){
						if(res.data.data.isSubscribe===false){
							this.$layer.msg("未关注")
						}else{
							this.imgUrl=res.data.data
						}
					}else{
						this.$layer.msg("接口错误")
					}
				}).catch((err)=>{
					this.$layer.msg("接口错误")
				})
			},
		}
	}
</script>

<style scoped lang="less">
	.blessing{
		width: 750px;
		height: 1334px;
		background: url(../../static/1916.png) no-repeat;
		background-size: 100% 100%;
		padding-top: 56px;
		box-sizing: border-box;
		.my_blessing{
			width: 696px;
			height: 1201px;
			background: url(../../static/blessing_bg.png) no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
			padding-top: 145px;
			box-sizing: border-box;
			padding-bottom: 50px;
			position: relative;
			.back{
				position: absolute;
				bottom: -42.5px;
				left: 145px;
				width:406px ;
				height: 85px;
				background: url(../../static/back.png) no-repeat;
				background-size: 100% 100%;
			}
			.scroll{
				display: flex;
				flex-wrap: wrap;
				overflow: scroll;
				height: 100%;
				width: 100%;
			}
			.blessing_box{
				width: 50%;
				height: 488px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 20px;
				.blessing_img{
					width: 308px;
					height: 403px;
					margin-bottom: 20px;
					img{
						width: 100%;
						height: 100%;
					}
					
				}
				.examine{
					div{
						width: 266px;
						height: 65px;
					}
				}
			}
		}
	}
</style>
