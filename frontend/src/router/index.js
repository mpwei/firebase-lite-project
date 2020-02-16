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
        component: () => import('../components/Layout/UserLayout'),
        children: [
            {
                component: () => import('../views/Home'),
                path: '/home',
                name: 'home',
                meta: {
                    Auth: false
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/posts',
                name: 'postList',
                component: () => import('../views/PostList'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/posts/:slug',
                name: 'posts',
                component: () => import('../views/Post'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/error',
                name: 'error',
                component: () => import('../views/Error'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/notfound',
                name: 'notFound',
                component: () => import('../views/NotFound'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/maintenance',
                name: 'maintenance',
                component: () => import('../views/Maintenance'),
                meta: {
                    Auth: false
                }
            },
        ]
    },
    //管理員頁面
    {
        path: '/',
        component: () => import('../components/Layout/AdminLayout'),
        children: [
            {
                path: '/manage/login',
                name: 'adminLogin',
                component: () => import('../views/manage/Login'),
                meta: {
                    Auth: false
                }
            },
            {
                path: '/manage/dashboard',
                name: 'DashBoard',
                component: () => import('../views/manage/Dashboard'),
                meta: {
                    Taxonomy: 'DashBoard',
                    Auth: true
                }
            },
            {
                path: '/manage/post/list',
                name: 'PostList',
                component: () => import('../views/manage/PostList'),
                meta: {
                    Taxonomy: 'Post',
                    Auth: true
                }
            },
            {
                path: '/manage/post/add',
                name: 'PostAdd',
                component: () => import('../views/manage/AddPost'),
                meta: {
                    Taxonomy: 'Post',
                    Auth: true
                }
            },
            {
                path: '/manage/post/edit/:slug/:doc',
                name: 'PostEdit',
                component: () => import('../views/manage/AddPost'),
                meta: {
                    Taxonomy: 'Post',
                    Auth: true
                }
            },
            {
                path: '/manage/post/category',
                name: 'PostCategory',
                component: () => import('../views/manage/PostCategory'),
                meta: {
                    Taxonomy: 'Post',
                    Auth: true
                }
            },
            {
                path: '/manage/post/add_category',
                name: 'PostAddCategory',
                component: () => import('../views/manage/PostAddCategory'),
                meta: {
                    Taxonomy: 'Post',
                    Auth: true
                }
            },
            {
                path: '/manage/post/edit_category/:slug/:doc',
                name: 'PostEditCategory',
                component: () => import('../views/manage/PostCategory'),
                meta: {
                    Taxonomy: 'Post',
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