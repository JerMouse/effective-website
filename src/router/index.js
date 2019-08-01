import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

import Home from '@/views/home';

Vue.use(Router);

//  这里添加常量(每个用户都可以访问的路由)路由
export const staticRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      // 这里配置app-main对应router-view的子路由
      {
        path: 'home',
        component: Home
      },
      {
        path: 'introduction',
        component: () => import('@/views/introduction')
      },
      {
        path: 'login',
        component: ()=> import('@/views/login')
      },
      {
        path: 'teacher_team',
        component: () => import('@/views/teacher_team')
      }, {
        path: '401',
        component: () => import('@/views/error/401.vue')
      }, {
        path: 'forget_password',
        component: () => import('@/views/forget_password')
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: '/homework',
    component: () => import('@/views/homework/index')
  }
]


const createRouter = () => new Router({
  // require service support
  mode: 'history',
  // 回到浏览器的顶端
  scrollBehavior: () => ({y: 0}),
  routes: staticRoutes
});

const router = createRouter();

export default router
