import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Login from './views/Login.vue'
import Tabbar from './components/Tabbar.vue'
import Userlist from './views/Userlist.vue'
import Userdetails from './views/Userdetails.vue'
import Createuser from './views/Createuser.vue'
import Edituser from './views/Edituser.vue'

Vue.use(Router)

export default new Router ({
  // 定义路由
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login 
    },
    {
      path:'/',
      name:'index',
      redirect:'/home',
      component:Tabbar,
      children: [
        { path: '/home', component: Userlist },
        { path: '/users/userlist', component: Userlist },
        { path: '/users/userdetails/:id', component: Userdetails },
        { path: '/users/createuser', component: Createuser },
        { path: '/users/edituser/:id', component: Edituser }
      ]
    }
  ]
})