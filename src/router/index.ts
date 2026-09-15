const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Game/Home.vue')
        }
    ]
})

export default router
