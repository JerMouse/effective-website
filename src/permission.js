import router from './router';
import store from "./store";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth";

NProgress.configure({
  showSpinner: false
});

const whiteList = ['/home', '/introduction', '/teacher_team', '/teaching_resource','/login',''];

router.beforeEach(async (to, from, next) => {
    // 如果匹配的路由为游客的路由，则放行
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    }
    // 进入需要某些权限的路由
    else {
      // 获取Cookie中的token
      const hasToken = getToken();

      if (hasToken) {
        // Cookie中有token,则获取相应的roles
        if (store.getters.roles.length > 0 && store.getters.role) {
          // 放行
          next()
        } else {
          // 获取role
          const {roles} = await store.dispatch('/user/getInfo');
          // 根据roles获取动态路由
          const accessRoutes = await store.dispatch('permission/generateRoutes');
          router.addRoutes(accessRoutes);
          // 添加动态路由,执行管道函数
          next()
        }
      } else {
        // 没有token则进入登入界面获取token
        next('/login')
      }
    }
  }
)

// // 获取到后台的token
// if (hasToken) {
//   if (hasToken) {
//     // 获取了后台Cookie不用登入
//     if (to.path === 'login') {
//       next({path:'/'})
//     } else {
//
//     }
//   }
// }
// // 没有Cookie
// else {
//   // 如果是去登入界面的话
//   if (to.path === '/login') {
//     next()
//   } else {
//     next(`/login?redirect=${to.path}'`)
//   }
// }
