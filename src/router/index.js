import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Rocommended  from "@/view/rocommended";
import Chat  from "@/view/chat";
import Search  from "@/view/search";
import My from '@/view/my'
import Login from '@/view/login'
import Detail from '@/view/detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:"hot",
          component: () => import('@/view/home/hot')
        },
        {
          path:'clothing',
          component: () => import('@/view/home/clothing')
        },
        {
          path:"/home",
          redirect:'/home/hot'
        }
      ]
    },
    {
      path:'/rocommended',
      component:Rocommended
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/chat',
      component:Chat,
      meta:{requiredAuth:true}
    },
    {
      path:'/my',
      component:My,
      meta:{requiredAuth:true}
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
