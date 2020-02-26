<template>
	<div class="wish">
		<div class="wish_box">
			<div class="img_box">
				<div v-for="(item,index) in imgUrl" class="img_box_div">
					<div class="wish_img">
						<img :src="item" alt="">
					</div>
				</div>
			</div>
			<div class="wish_btn"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'wish',
		data() {
			return {
				imgUrl: ['https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
					'https://pic.cwyyt.cn/upload/img/20200225/1158525852_moni.png',
				]
			}
		},
		methods: {}
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
			.img_box::-webkit-scrollbar { width: 0 !important }
			.img_box {
				display: flex;
				flex-wrap: wrap;
				height: 100%;
				overflow: scroll;
				 -ms-overflow-style: none;
				.img_box_div {
					width: 33.3%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom:20px ;
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
