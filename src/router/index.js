import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routerConfig';


const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;

