import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/view/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
       path: '/goods',
       name: 'goods',
       component: () =>import('@/components/sub/goods/goods'),
     },
     {
         path: '/ratings',
         name: 'ratings',
         component: () =>import('@/components/sub/ratings/ratings'),
       },
  {
           path: '/seller',
           name: 'seller',
           component: () =>import('@/components/sub/seller/seller'),
         },

  ]
})

