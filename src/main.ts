import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import routes from 'voie-pages';

import App from './App.vue';

import './index.css';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app');
