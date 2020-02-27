<template>
	<div class="wish">
		<div class="wish_box">
			<div class="img_box">
				<div v-for="(item,index) in imgUrl" class="img_box_div">
					<div class="wish_img">
						<img :src="item.url" alt="">
					</div>
				</div>
			</div>
			<div class="wish_btn" @click="goto_template"></div>
		</div>
	</div>
</template>

<script>
	import api from "@/getApi.js"
	export default {
		name: 'wish',
		data() {
			return {
				imgUrl: []
			}
		},
		created() {
			this.get_productionList();
			this.wait(true);
		},
		inject:['wait'],
		methods: {
			//调取许愿总单
			get_productionList() {
				let data={
					pageSize:1
				}
				api.productionList(data).then((res) => {
					if (res.data.code == 200) {
						this.wait(false)
						this.imgUrl = res.data.data.dataList
						console.log(res.data.data)
					} else {
						this.$layer.msg("接口错误")
					}
				}).catch((err) => {
					this.$layer.msg("接口错误")
				})
			},
			goto_template() {
				this.$router.push('my_template')
			}
		}
	}
</script>

<style scoped lang="less">
	.wish {
		background: url(../../static/wish/wish_bg.png) no-repeat;
		background-size: 100% 100%;
		width: 750px;
		height: 1334px;
		padding-top: 305px;
		box-sizing: border-box;

		.wish_box {
			background: url(../../static/wish/wish_box.png) no-repeat;
			background-size: 100% 100%;
			width: 702px;
			height: 963px;
			margin: 0 auto;
			position: relative;
			padding-top: 46px;
			padding-bottom: 25px;
			box-sizing: border-box;

			.img_box::-webkit-scrollbar {
				width: 0 !important
			}

			.img_box {
				display: flex;
				flex-wrap: wrap;
				height: 100%;
				overflow: scroll;
				-ms-overflow-style: none;

				.img_box_div {
					width: 33.3%;
					height: 274px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
				}
			}

			.wish_img {
				width: 209px;
				height: 274px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.wish_btn {
				background: url(../../static/wish/go_wish.png) no-repeat;
				background-size: 100% 100%;
				width: 406px;
				height: 85px;
				position: absolute;
				left: 148px;
				bottom: -42.5px;
			}
		}
	}
</style>
