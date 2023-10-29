import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Employment from './pages/Employment.vue'
import Hobbies from './pages/Hobbies.vue'
import Running from './pages/hobbies/Running.vue'
import Reading from './pages/hobbies/Reading.vue'
import Projects from './pages/Projects.vue'
import PortfolioWebsite from './pages/projects/PortfolioWebsite.vue'

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
	{
		path: '/employment',
		name: 'Employment',
		component: Employment,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
	},
	{
		path: '/portfolio-website',
		name: 'Portfolio Website',
		component: PortfolioWebsite,
	},
	{
		path: '/hobbies',
		name: 'Hobbies',
		component: Hobbies
	},
	{
		path: '/running',
		name: 'Running',
		component: Running
	},
	{
		path: '/reading',
		name: 'Reading',
		component: Reading
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
