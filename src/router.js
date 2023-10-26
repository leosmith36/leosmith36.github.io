import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'
import Employment from './pages/Employment.vue'
import Resume from './pages/Resume.vue'
import Reading from './pages/Reading.vue'
import Blog from './pages/Blog.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	// {
	// 	path: '/projects',
	// 	name: 'Projects',
	// 	component: Projects,
	// },
	// {
	// 	path: '/contact',
	// 	name: 'Contact',
	// 	component: Contact,
	// },
	{
		path: '/employment',
		name: 'Employment',
		component: Employment,
	},
	// {
	// 	path: '/reading',
	// 	name: 'Reading',
	// 	component: Reading,
	// },
	// {
	// 	path: '/blog',
	// 	name: 'Blog',
	// 	component: Blog
	// },
	{
		path: '/:catchAll(.*)',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
