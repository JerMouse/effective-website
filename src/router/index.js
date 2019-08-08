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
      // 这里配置app-main路由出口
      {
        path: 'home',
        component: Home,
        meta: {
          name: '主页',
          isNeededAuthorized: false,
          isShow: true
        }
      },
      {
        path: 'introduction',
        component: () => import('@/views/introduction'),
        meta: {
          name: '简介',
          isNeededAuthorized: false,
          isShow: true
        }
      },
      {
        path: 'teacher_team',
        component: () => import('@/views/teacher_team'),
        meta: {
          name: '师资力量',
          isNeededAuthorized: false,
          isShow: true
        }
      }, {
        path: 'forget_password',
        component: () => import('@/views/forget_password'),
        meta: {
          name: '忘记密码',
          isNeededAuthorized: false,
          isShow: false
        }
      }, {
        path: 'teaching_resource',
        component: () => import('@/views/teaching_resource'),
        meta: {
          name: '教学资源',
          isNeededAuthorized: false,
          isShow: true
        }
      },
      {
        path: 'login',
        component: () => import('@/views/login'),
        meta: {
          name: '登录',
          isNeededAuthorized: false,
          isShow: false
        }
      }
    ]
  }, {
    path: '/401',
    component: () => import('@/views/error/401.vue'),
    meta: {
      name: '权限不足',
      isNeededAuthorized: false
    }
  }, {
    path: '*',
    component: () => import('@/views/error/404.vue'),
    meta: {
      name: '无此页面',
      isNeededAuthorized: false,
    }
  },
];

export const studentRoutes = [
  {
    path: '/homework',
    component: () => import('@/views/homework/index'),
    meta: {
      name: '作业',
      isNeededAuthorized: true,
      isShow: true
    }
  }
]
export const teacherRoutes = [
  {
    path: '/correct',
    component: () => import('@/views/correct/index'),
    meta: {
      name: '批改作业',
      isNeededAuthorized: true,
      isShow: true
    }
  }
]

export const navbarRoutes = []


const createRouter = () => new Router({
  base: '/',
  // require service support
  mode: 'history',
  // 回到浏览器的顶端
  scrollBehavior: () => ({y: 0}),
  routes: staticRoutes
});

const router = createRouter();

export default router
