<template>
	<div class="template">
		<div v-for="item in 4" class="template_box">
			<div class="template_img">
				<img :src="'./static/template/bg'+item+'.png'" >
			</div>
			<div class="template_btn" @click="goto_web(item)">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'my_template',
		data(){
			return {
				template_data:[]
			}
		},
		methods:{
			goto_web(e){
				this.$router.push({path:'/template_web',query:{webId:e}})
			}
		}
	}
</script>

<style scoped lang="less">
	.template{
		background: url(../../static/template/template_bg.png) no-repeat;
		background-size: 100% 100%;
		width:750px ;
		height: 1334px;
		padding-top: 162px;
		padding-bottom: 100px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		.template_box{
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.template_btn{
				width: 284px;
				height: 69px;
				margin-top: 10px;
				background:url(../../static/template/do_btn.png) no-repeat;
				background-size: 100% 100%;
				
			}
			.template_img{
				width: 330px;
				height: 432px;
				background-color: #fff;
				overflow: hidden;
				border-radius: 50px;
			}
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
