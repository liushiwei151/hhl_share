<template>
	<div id="app">
		<router-view v-if="isrouters"></router-view>
		<div class="wait" v-if="isWait">
			<div class="wait_img"></div>
		</div>
	</div>
</template>

<script>
	import api from '@/getApi.js'
	export default {
		name: 'App',
		data() {
			return {
				isrouters: true,
				isWait: false,
			}
		},
		mounted() {
			this.getwx()
		},
		provide() {
			return {
				onoff: this.isrouter,
				wait: this.wait_switch
			};
		},
		methods: {
			//获取微信权限
			getwx() {
				let that = this;
				let datas = {
					url: location.href.split('#')[0]
				};
				api.jsSign(datas)
					.then((res) => {
						if (res.data.code == 200) {
							console.log(res.data.data);
							that.wx_share(res.data.data);
						} else {
							that.$layer.msg('get权限数据失败1');
						}
					})
					
			},
			wx_share(e){
				let that = this;
				console.log('开始获取wx权限')
				that.wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: e.appid, // 必填，公众号的唯一标识
					timestamp: e.timestamp, // 必填，生成签名的时间戳
					nonceStr: e.nonceStr, // 必填，生成签名的随机串
					signature: e.signature, // 必填，签名
					jsApiList: [
						'onMenuShareTimeline',
						'onMenuShareAppMessage'
					] // 必填，需要使用的JS接口列表
				});
				console.log('wx获取权限结束');
				let url ="http://qrhhl.yunyutian.cn/huanghelou1916-center/wx/gCode?name=toAns"
				that.wx.ready(function() {
					// 分享朋友圈回调
					that.wx.onMenuShareTimeline({
						title: '湖北加油,我们一起更上一层楼！', // 分享标题
						link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'https://pic.cwyyt.cn/upload/img/20200302/1241194119_blessing.jpg', // 分享图标
						success: function() {
							// 用户点击了分享后执行的回调函数
							that.get_share()
						}
					});
					// 分享朋友回调
					that.wx.onMenuShareAppMessage({
						title: '湖北加油,我们一起更上一层楼！', // 分享标题
						desc: '湖北加油,我们一起更上一层楼！', // 分享描述
						link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'https://pic.cwyyt.cn/upload/img/20200302/1241194119_blessing.jpg', // 分享图标
						type: '', // 分享类型,music、video或link，不填默认为link
						dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						success: function() {
							// 用户点击了分享后执行的回调函数
							that.get_share()
						}
					});
				})
			},
			//分享加次数
			get_share(){
				api.share().then((res)=>{
					if(res.data.code==200){
						that.$layer.msg('分享成功');
					}else{
						that.$layer.msg('分享失败');
					}
				}).catch((err)=>{
					that.$layer.msg('分享失败');
				})
			},
			//等待刷新
			wait_switch(e) {
				this.isWait = e
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

	.wait {
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

		.wait_img {
			background: url(../static/loading.gif) no-repeat;
			background-size: 100% 100%;
			width: 100px;
			height: 100px;
		}
	}
</style>
