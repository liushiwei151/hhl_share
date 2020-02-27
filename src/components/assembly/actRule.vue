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
