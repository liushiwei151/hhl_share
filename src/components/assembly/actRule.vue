<template>
	<div>
		<div class="rule" :class="{show:isShow}" @touchmove.prevent>
			<!-- home活动规则 -->
			<div class="rule_bg" v-if="showName==='home'">
				<div class="rule_btn" @click="close"></div>
			</div>
			<!-- 抖音详情 -->
			<div class="douyin_rule" v-if="showName==='douyin'">
				<div class="rule_douyin"></div>
				<div class="rule_close" @click="close"></div>
			</div>
			<!-- 签到成功 -->
			<div class="sign" v-if="showName==='sign'">
				<div>签到成功，获得XX楼币</div>
			</div>
			<!-- 分享引导页 -->
			<div class="share" v-if="showName==='share'" @click="close">
				<div class="share_jt">
				</div>
				<div class="share_text">
					<div><i>1</i><p>点击右上角</p></div>
					<div><i>2</i><p>选择分享</p></div>
				</div>
			</div>
			<!-- 未关注 -->
			<div class="unconcerned" v-if="showName==='unconcerned'">
				<div>
					<img src="https://pic.cwyyt.cn/upload/img/20200301/233301331_qrc.png" >
				</div>
				<p>关注前请仔细阅读<a href="https://www.baidu.com/">《沙龙服务条款》</a></p>
				<p>一经关注则视为同意</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"actRule",
		data(){
			return{
			}
		},
		props:{
			isShow:{
				type:Boolean,
				default:false
			},
			showName:{
				type:String,
				default:''
			}
		},
		methods:{
			close(){
				this.$emit("closeRule")
			}
		}
	}
</script>

<style scoped lang="less">
	.rule{
		position: fixed;
		color: #fff;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0;
		outline: 0;
		text-align: center;
		-ms-transform: scale(1.185);
		-webkit-transform: scale(1.185);
		transform: scale(1.185);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-perspective: 1096px;
		perspective: 1096px;
		background: rgba(0, 0, 0, 0.6);
		-webkit-transition: all 0.3s ease-in-out 0s;
		-o-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
		box-sizing: border-box;
		z-index: -100;
		display: flex;
		justify-content: center;
		align-items: center;
		//关注页面
		.unconcerned{
			width: 651px;
			height: 672px;
			background: url(../../../static/unconcerned.png) no-repeat;
			background-size: 100% 100%;
			box-sizing: border-box;
			padding-top: 220px;
			p{
				color: rgb(85,34,8);
				font-size: 24px;
				a{
					color: rgb(212,62,62);
					text-decoration: none;
				}
			}
			div{
				width: 241px;
				height: 241px;
				margin: 0 auto 20px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		//分享引导页
		.share{
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 20px;
			.share_text{
				float: right;
				height:480px ;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				font-size: 40px;
				div{
					display: flex;
					justify-content: left;
					align-items: center;
				}
				i{
					display: block;
					width: 50px;
					height:50px;
					background-color: rgb(250,92,93);
					border-radius: 50%;
					color: #fff;
					font-weight: 700;
					margin-right: 10px;
				}
			}
			.share_jt{
				width: 290px;
				height: 350px;
				background: url(../../../static/jiantou.png) no-repeat;
				background-size: 100% 100%;
				float: right;
			}
		}
		//签到
		.sign{
			width:651px ;
			height: 545px;
			background: url(../../../static/home/sign_then.png) no-repeat;
			background-size: 100% 100%;
			box-sizing: border-box;
			padding-top: 420px;
			text-align: center;
			div{
				font-size: 41px;
				color: rgb(90,34,23);
				font-weight: 700;
			}
		}
		//抖音活动规则
		.douyin_rule{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			.rule_douyin{
				background: url(../../../static/home/douyin_rule.png) no-repeat;
				background-size:100% 100% ;
				width: 687px;
				height: 1100px;
			}
			.rule_close{
				background: url(../../../static/home/douyin_close.png) no-repeat;
				background-size:100% 100% ;
				width: 406px;
				height: 85px;
				margin-top:20px ;
			}
		}
		//home页面活动规则
		.rule_bg{
			background: url(../../../static/home/actRule_bg.png) no-repeat;
			background-size:100% 100% ;
			width: 682px;
			height: 1101px;
			position: relative;
			.rule_btn{
				position: absolute;
				left: 156.5px;
				bottom: -33.5px;
				background: url(../../../static/home/actRule_close_btn.png) no-repeat;
				background-size:100% 100% ;
				width: 369px;
				height: 77px;
			}
		}
		
	}
	.show {
	  -webkit-transition-duration: 0.3s;
	  -o-transition-duration: 0.3s;
	  transition-duration: 0.3s;
	  -ms-transform: scale(1);
	  -webkit-transform: scale(1);
	  transform: scale(1);
	  overflow-x: hidden;
	  overflow-y: auto;
	  pointer-events: auto;
	  opacity: 1;
	  z-index: 100;
	}
</style>
