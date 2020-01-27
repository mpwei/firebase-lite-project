import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: import('../views/Home.vue'),
        meta: {
            Auth: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            Auth: false
        }
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('../views/Error.vue'),
        meta: {
            Auth: false
        }
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            Auth: false
        }
    },
    {
        path: '/maintenance',
        name: 'maintenance',
        component: () => import('../views/Maintenance.vue'),
        meta: {
            Auth: false
        }
    },
    //未符合路由，導向404頁面
    {
        path: '*',
        redirect: '/notfound'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((_To, _From, _Next) => {
    // let Root = router.app
    let CheckSuccess = true

    if (CheckSuccess) {
        _Next()
    }
});

export default router