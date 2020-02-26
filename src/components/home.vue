<template>
	<div ref="box">
		<div class="home">
			<wall class="home_wall" @goto_wall="gotoWall"></wall>
			<div class="actRule_btn" @click="showRule(true,'home')"></div>
			<div class="home_box">
				<div class="box_Title">
					<div class="box_Title_left" @click="switch_web('left')" :class="title_switch?'title_pink':'title_white'">
						<div class="title_left_pink" v-show="!title_switch"></div>
						<div class="title_left_white" v-show="title_switch"></div>
					</div>
					<div class="box_Title_right" @click="switch_web('right')" :class="!title_switch?'title_pink':'title_white'">
						<div class="title_right_pink" v-show="title_switch"></div>
						<div class="title_right_white" v-show="!title_switch"></div>
					</div>
				</div>
				<div class="box_content">
					<!-- 我的祝福 -->
					<div v-show="!title_switch" class="my_blessing">
						<div v-for="(item,index) in imgUrl" :key="index" class="blessing_box">
							<div class="blessing_img"><img :src="item.url" alt="我的祝福"></div>
							<div class="examine">
								<img :src="item.isExamine?'../../static/home/pass.png':'../../static/home/ing.png'">
							</div>
						</div>
						<div class="blessing_template">
							<div> <img :src="template_img[0]"></div>
						</div>
					</div>
					<!-- 心愿道具 -->
					<div v-show="title_switch" class="wishProp">
						<div class="wishProp_sign">
							<div class="sign" @click="sign" :class="{gray:isSign}"></div>
						</div>
						<div class="wishProp_share"></div>
						<div class="wishProp_details" @click="showRule(true,'douyin')"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 活动规则 -->
		<act-rule :isShow="isRule" :showName="showRuleName" @closeRule="showRule(false)"></act-rule>
	</div>
</template>

<script>
	import wall from "@/components/assembly/wall.vue"
	import actRule from "@/components/assembly/actRule.vue"
	export default {
		name: "home",
		components: {
			wall,
			actRule
		},
		mounted() {
			//单纯在钩子中使用window.scrollTo无效即使使用this.$nextTick,
			//页面刷新和关闭时触发top事件
			window.addEventListener("beforeunload", this.top);
		},
		data() {
			return {
				// 切换内容
				title_switch: true,
				//是否签到
				isSign: false,
				//显示规则页面
				isRule: false,
				//显示哪个规则
				showRuleName:'',
				//照片地址
				imgUrl: [{'url':'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png','isExamine':false},
					{'url':'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png','isExamine':true},
					{'url':'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png','isExamine':false},
				],
				//模板图片
				template_img: ['../../static/home/template_img1.png', '../../static/home/template_img2.png']
			}
		},
		methods: {
			top() {
				window.scrollTo(0, 0);
			},
			switch_web(e) {
				if (e === 'left') {
					this.title_switch = false;
				} else if (e === 'right') {
					this.title_switch = true;
				}
			},
			// 点击签到
			sign() {
				this.isSign = true;
			},
			//显示规则
			showRule(e,f) {
				this.isRule = e;
				this.showRuleName=f;
			},
			//进入许愿墙
			gotoWall(){
				this.$router.push('wish')
			}
		}
	}
</script>

<style scoped lang="less">
	//通用属性
	.title_pink {
		background-color: #FF626A;
	}

	.title_white {
		background-color: rgb(249, 243, 225);
	}

	//滤镜变灰
	.gray {
		filter: grayscale(100%);
	}

	// 页面背景
	.home {
		background: url(../../static/home/bg.png) no-repeat;
		width: 750px;
		height: 1863px;
		background-size: 100% 100%;
		padding-top: 624px;
		box-sizing: border-box;
		position: relative;

		.actRule_btn {
			background: url(../../static/home/rule.png) no-repeat;
			background-size: 100% 100%;
			width: 133px;
			height: 154px;
			position: absolute;
			top: 470px;
			right: 33px;
		}

		//许愿墙
		.home_wall {
			margin: 0 auto;
		}

		// 我的祝福+道具
		.home_box {
			margin-top: 65px;
			position: relative;

			//标题
			.box_Title {
				display: flex;
				width: 650px;
				margin: 0 auto;
				justify-content: space-between;

				div {
					width: 318px;
					height: 106px;
					border-radius: 25px;
				}

				.box_Title_left {
					display: flex;
					justify-content: center;
					align-items: center;

					div {
						width: 178px;
						height: 42px;
					}

					.title_left_pink {
						background: url(../../static/home/my_blessing_pink.png) no-repeat;
						background-size: 100% 100%;
					}

					.title_left_white {
						background: url(../../static/home/my_blessing_white.png) no-repeat;
						background-size: 100% 100%;
					}
				}

				.box_Title_right {
					display: flex;
					justify-content: center;
					align-items: center;

					div {
						width: 178px;
						height: 42px;
					}

					.title_right_pink {
						background: url(../../static/home/wish_prop_pink.png) no-repeat;
						background-size: 100% 100%;
					}

					.title_right_white {
						background: url(../../static/home/wish_prop_white.png) no-repeat;
						background-size: 100% 100%;
					}
				}
			}

			//内容
			.box_content {
				position: absolute;
				top: 81px;
				width: 750px;
				height: 812px;
				background: url(../../static/home/home_bg.png) no-repeat;
				background-size: 100% 100%;
				padding-top: 20px;
				box-sizing: border-box;

				//我的祝福
				.my_blessing {
					display: flex;
					align-items: flex-start;
					flex-wrap: wrap;
					padding: 30px;
					box-sizing: border-box;
					overflow-y: scroll;
					height: 780px;

					.blessing_template {
						width: 50%;
						margin-bottom: 20px;
						display: flex;
						justify-content: center;
						div {
							width: 315px;
							height: 413px;

							img {
								width: 100%;
								height: 100%;
							}
						}
					}

					.blessing_box {
						width: 50%;
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-bottom: 20px;

						.blessing_img {
							width: 315px;
							height: 413px;

							img {
								width: 100%;
								height: 100%;
							}
						}

						.examine {
							width: 273px;
							height: 67px;
							margin-top: 10px;

							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}

				//心愿道具
				.wishProp {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					padding: 60px 0;
					box-sizing: border-box;
					width: 100%;
					height: 100%;

					div {
						width: 697px;
						height: 184px;
					}

					.wishProp_sign {
						background: url(../../static/home/sign.png) no-repeat;
						background-size: 100% 100%;
						position: relative;

						.sign {
							position: absolute;
							top: 10px;
							right: 10px;
							background: url(../../static/home/sign_btn.png) no-repeat;
							background-size: 100% 100%;
							width: 166px;
							height: 166px;
						}
					}

					.wishProp_share {
						background: url(../../static/home/home_share.png) no-repeat;
						background-size: 100% 100%;
					}

					.wishProp_details {
						background: url(../../static/home/home_details.png) no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}

	}
</style>
