import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import wish from '@/components/wish'
import my_template from '@/components/my_template'
import template_web from '@/components/template_web'
import test from '@/components/test'
import my_blessing from '@/components/my_blessing'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/wish',
			name: 'wish',
			component: wish
		},
		{
			path:'/my_template',
			name:'my_template',
			component:my_template
		},
		{
			path:'/template_web',
			name:'template_web',
			component:template_web
		},
		{
			path:'/my_blessing',
			name:'my_blessing',
			component:my_blessing
		},
		{
			path:'/test',
			name:'test',
			component:test
		}
	],
	/*scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
		    return savedPosition
		  } else {
		    return { x: 0, y: 0 }
		  }
	}*/
})
