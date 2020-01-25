import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      Auth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      Auth: false
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((_To, _From, _Next) => {
  // let Root = router.app;
  let CheckSuccess = true;
console.log(_To)
  if (CheckSuccess) {
    _Next()
  }
});

export default router