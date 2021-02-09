import vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: 'msite'
    }
  ]
})
