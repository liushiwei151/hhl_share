// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import wx from 'weixin-js-sdk'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999,
　　　　　toolbar: true
} })

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs
Vue.prototype.$layer = layer(Vue)
Vue.prototype.wx=wx

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
