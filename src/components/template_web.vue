<template>
	<div class="template_web" :style="{'backgroundColor':template_img[webId-1].color}">
		<div v-for="(item,index) in template_img" v-if="(index+1)==webId" :key="index" class="web" style="background-color: #fff;"
		 @click="imgClick">
			<canvas id="template_bg"></canvas>
		</div>
		<div class="word">
			<textarea maxlength="100" placeholder="输入祝福的话语" v-model="blessing"></textarea>
		</div>
		<div class="template_btn">
			<div class="btn_true" @click="upload"></div>
			<div class="btn_res" @click="reset"></div>
		</div>
		<input style="display: none" type="file" id='uploadFile' accept="image/*" @change="readLocalFile()">
	</div>
</template>

<script>
	import api from '@/getApi.js'
	export default {
		name: 'template_web',
		data() {
			return {
				//祝福的话
				blessing: "",
				webId: 1,
				// 模板图片和背景颜色
				template_img: [{
					'imgs': './static/template/bg1.png',
					color: 'rgb(166,217,233)'
				}, {
					'imgs': './static/template/bg2.png',
					color: 'rgb(255,192,63)'
				}, {
					'imgs': './static/template/bg3.png',
					color: 'rgb(255,156,168)'
				}, {
					'imgs': './static/template/bg4.png',
					color: 'rgb(154,222,207)'
				}],
				//canvas对象
				canvas: '',
				//画布对象
				context: "",
				//背景图片
				bg_img: '',
				//添加图片
				add_img: '',
				//canvas适配比例
				imgwidth: "",
				imgheight: '',
				// 拍摄图片base64
				imgs: '',
				//是否上传
				isUp:false
			}
		},
		created() {
			this.webId = this.$route.query.webId;
		},
		mounted() {
			this.init();
		},
		inject: ['onoff','wait'],
		methods: {
			//上传图片文件并上传祝福语和图片地址
			upload() {
				if(this.isUp==false){
					this.$layer.msg('点击添加照片');
					return
				}
				if(this.blessing==""){
					this.$layer.msg('祝福语不能为空');
					return
				}
				let temSrc = this.canvas.toDataURL("image/png");
				let time = new Date()
				let name = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "_" + time.getHours() + time.getMinutes() +
					time.getSeconds() + "_";
				const bytes = window.atob(temSrc.split(",")[1]);
				const arr = [];
				const bytesLength = bytes.length;
				for (let i = 0; i < bytesLength; i += 1) {
					arr.push(bytes.charCodeAt(i));
				}
				const blob = new Blob([new Uint8Array(arr)], {
					type: "image/png"
				});

				const formData = new FormData();
				// 后端接收二进制数据
				formData.append("file", blob, `${name}.png`);
				this.wait(true);
				
				/*let config = {
				        //添加请求头
				        headers: { "Content-Type": "multipart/form-data" },
				        //添加上传进度监听事件
				        onUploadProgress: e => {
				          var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
				          console.log(completeProgress)
				        }
				      };
					  api.upload(formData,config).then((res)=>{
						  console.log(res)
					  }).catch((err)=>{
						  console.log(err)
					  })*/
				fetch("http://qrhhl.yunyutian.cn/huanghelou1916-ans/file/upload", {
						method: "POST",
						body: formData
					}).then(response => response.json())
					.catch((error) =>{
						this.$layer.msg("接口错误")
					} )
					.then((res) =>{
						if(res.code==200){
							let a={
								url:res.data,
								remark:this.blessing
							}
							api.productionAdd(a).then((res)=>{
								console.log(res.data)
								if(res.data.code==200){
									this.$router.push('my_blessing')
								}else if(res.data.code==500){
									this.$layer.msg(res.data.msg);
									setTimeout(()=>{
										this.$router.push('my_blessing')
									},1000)
								}else{
									this.$layer.msg("接口错误")
								}
								this.wait(false)
							}).catch(()=>{
								this.$layer.msg("接口错误")
							})
						}else{
							this.$layer.msg("接口错误")
						}
					} )
			},
			//重新拍照
			reset() {
				this.isUp=false
				this.onoff();
			},
			//触发上传点击
			imgClick() {
				document.getElementById("uploadFile").click();
			},
			readLocalFile() {
				let that = this;
				this.isUp=true;
				let localFile = document.getElementById("uploadFile").files[0];
				let content
				let reader = new FileReader();
				reader.onload = function(event) {
					content = event.target.result;
					that.imgs = content
					that.synthesis_img()
				}
				reader.onerror = function(event) {
					alert('error')
				}
				content = reader.readAsDataURL(localFile, "UTF-8");
				var sss = document.getElementById("uploadFile").value;
			},
			//绘制照片
			drawImgs(img) {
				console.log(img)
				let that = this;
				that.context.save();
				that.context.drawImage(
					img, //规定要使用的图像、画布或视频。
					0,
					0, //开始剪切的 x 坐标位置。
					img.width,
					img.height, //被剪切图像的高度。
					0,
					0, //在画布上放置图像的 x 、y坐标位置。
					that.canvas.width,
					that.canvas.height //要使用的图像的宽度、高度
				);
				that.context.restore();

			},
			//合成图片
			synthesis_img() {
				let that = this;
				let img = new Image();
				img.src = this.imgs;
				img.onload = function() {
					that.drawImgs(img);
					img.src = that.template_img[that.webId - 1].imgs;
					img.onload = function() {
						that.drawImgs(img)
					}
				}
			},
			// 初始化canvas
			init() {
				let that = this;
				this.imgs = ""
				this.canvas = document.getElementById('template_bg');
				this.context = this.canvas.getContext('2d');
				this.canvas.width = this.canvas.offsetWidth * 3;
				this.canvas.height = this.canvas.offsetHeight * 3;
				this.imgwidth = document.body.clientWidth / 750;
				this.imgheight = document.body.clientHeight / 1334;
				this.bg_img = new Image();
				this.bg_img.src = this.template_img[this.webId - 1].imgs;
				this.bg_img.onload = function() {
					that.drawImgs(that.bg_img)
					that.add_img = new Image();
					that.add_img.src = "./static/template/add_img.png"
					that.add_img.onload = function() {
						that.draw_add();
					}
				}

			},
			//绘制背景图片
			// draw_bg(){
			// 	let that = this;
			// 	that.context.save();
			// 	this.context.drawImage(
			// 		that.bg_img, //规定要使用的图像、画布或视频。
			// 		0,
			// 		0, //开始剪切的 x 坐标位置。
			// 		this.bg_img.width,
			// 		this.bg_img.height, //被剪切图像的高度。
			// 		0,
			// 		0, //在画布上放置图像的 x 、y坐标位置。
			// 		this.canvas.width ,
			// 		this.canvas.height//要使用的图像的宽度、高度
			// 	);
			// 	that.context.restore();
			// },
			// 绘制添加图标
			draw_add() {
				let that = this;
				that.context.save();
				this.context.drawImage(
					that.add_img, //规定要使用的图像、画布或视频。
					0,
					0, //开始剪切的 x 坐标位置。
					this.add_img.width,
					this.add_img.height, //被剪切图像的高度。
					this.canvas.width / 2 - this.add_img.width * this.imgwidth * 3 / 2,
					this.canvas.height / 2 - this.add_img.height * this.imgheight * 3 / 2, //在画布上放置图像的 x 、y坐标位置。
					this.add_img.width * this.imgwidth * 3,
					this.add_img.height * this.imgheight * 3 //要使用的图像的宽度、高度
				);
				that.context.restore();
			}
		}
	}
</script>

<style scoped lang="less">
	.template_web {
		width: 750px;
		height: 1334px;
		padding-top: 16px;
		box-sizing: border-box;

		.template_btn {
			display: flex;
			justify-content: space-around;

			.btn_true {
				background: url(../../static/template/true_btn.png) no-repeat;
				background-size: 100% 100%;
				width: 281px;
				height: 77px;
			}

			.btn_res {
				background: url(../../static/template/res_btn.png) no-repeat;
				background-size: 100% 100%;
				width: 281px;
				height: 77px;
			}
		}

		.word {
			width: 615px;
			height: 166px;
			margin: 15px auto 50px;

			textarea {
				width: 100%;
				height: 100%;
				border: none;
				border-radius: 25px;
				font-size: 26px;
				padding: 30px;
				box-sizing: border-box;
			}

			textarea::-webkit-input-placeholder {
				color: rgb(203, 203, 203);
			}
		}

		.web {
			width: 719px;
			height: 934px;
			margin: 0 auto;
			overflow: hidden;
			border-radius: 100px;

			canvas {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
