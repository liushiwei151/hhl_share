import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import wish from '@/components/wish'

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
