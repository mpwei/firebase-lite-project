import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/manage',
        redirect: '/manage/login'
    },
    //訪客頁面
    {
        path: '/',
        component: () => import('../components/Layout/UserLayout.vue'),
        children: [
            {
                component: () => import('../views/Home.vue'),
                path: '/home',
                name: 'home',
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
                path: '/posts',
                name: 'postList',
                component: () => import('../views/PostList.vue'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/posts/:slug',
                name: 'posts',
                component: () => import('../views/Post.vue'),
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
                name: 'notFound',
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
        ]
    },
    //管理員頁面
    {
        path: '/',
        component: () => import('../components/Layout/AdminLayout.vue'),
        children: [
            {
                path: '/manage/login',
                name: 'adminLogin',
                component: () => import('../views/manage/Login.vue'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/manage/dashboard',
                name: 'dashboard',
                component: () => import('../views/manage/Dashboard.vue'),
                meta: {
                    Auth: true
                }
            },
        ]
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
    let CheckSuccess = true
    if (CheckSuccess) {
        _Next()
    }
});


export default router