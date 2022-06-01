import Home from './views/Home.vue';
import NotFound from './components/NotFound.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'notFound', path: '/:pathMatch(.*)*', component: NotFound }
]
