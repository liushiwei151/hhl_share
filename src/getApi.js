import axios from 'axios'
import qs from 'qs'
 axios.defaults.baseURL = 'http://qrhhl.yunyutian.cn/huanghelou1916-ans/';   //配置接口地址
 axios.defaults.withCredentials = true;
 //POST传参序列化(添加请求拦截器)
 axios.interceptors.request.use((config) => {
     //在发送请求之前做某件事
     if(config.method  === 'post'){
         config.data = qs.stringify(config.data);
     }
     return config;
 },(error) =>{
     alert('错误的传参')
     return Promise.reject(error);
 });
 const productionList=(data)=>{
	 return axios.get('/wishWall/productionList',{
		params:{
			pageNum:1,
			pageSize:10,
		}
	})
 }
 const barrageList=(data)=>{
	 return axios.get('/homePage/barrageList')
 }
 const userProductionList=()=>{
	 return axios.get('/homePage/userProductionList')
 }
 const signln=()=>{
	 return axios.get('/prop/signln')
 }
 const upload=(data)=>{
	 return axios.post('file/upload',data)
 }
 const productionAdd=(data)=>{
	 return axios.post('/wishWall/productionAdd',data)
 }
 export default{
	 productionList,
	 barrageList,
	 userProductionList,
	 signln,
	 upload,
	 productionAdd
 }