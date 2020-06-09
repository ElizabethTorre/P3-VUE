import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home.vue'
import TemasView from '@/views/Temas.vue'
import QuestionsView from '@/views/Questions.vue'

Vue.use(VueRouter)

export default new VueRouter( {
	routes: [
		{
			path:'/',
			name: 'Home',
			component: HomeView
		},
		{
			path:'/temas/:areaSelect',
			name: 'Temas',
			component: TemasView,
			props: true
		},
		{
			path:'/questions/:areaSelect/:temaSelect',
			name: 'Questions',
			component: QuestionsView,
			props: true
		}
	]
})

//  const routes = [
//  {
//    path: '/',
//    name: 'Home',
//    component: Home
//  },
//  {
//    path: '/about',
//    name: 'About',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//  },
//  {
//    path: '/temas',
//    name: 'Temas',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/Temas.vue')
//  }
//]

//const router = new VueRouter({
//  mode: 'history',
//  base: process.env.BASE_URL,
//  routes
//})

//export default router
