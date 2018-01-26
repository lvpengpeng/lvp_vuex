import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '@/pages/ShopCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ShopCar
    }
  ]
})
