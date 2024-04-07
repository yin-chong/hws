export const routes = [
    {
        path: '',
        redirect: 'index',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue') 
    },
];