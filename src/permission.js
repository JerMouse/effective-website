import router from './router';
import store from "./store";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth";

NProgress.configure({
  showSpinner: false
});
// all roles can access
const whiteList = ['/home', '/introduction', '/teacher_team', '/teaching_resource', '/login', '/forget_password', '/404', '401'];

router.beforeEach(async (to, from, next) => {
  // if the route matches one of whiteList,then go ahead
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    }
    // access some routes needed permission
    else {
      // get token from Cookie
      const hasToken = getToken();

      if (hasToken) {
        // if have token, we get the role by token
        if (store.getters.role.length > 0 && store.getters.role) {
          //go ahead
          next()
        } else {
          // fetch user's info
          const {
            role
          } = await store.dispatch('user/getInfo');

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', role);

          // dynamically add accessible routes
          router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({
            ...to,
            replace: true
          })
        }
      } else {
        // navigate '/login' to get token
        next('/login')
      }
    }
  }
)

