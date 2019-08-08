import router from './router';
import store from "./store";
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth";


router.beforeEach(async (to, from, next) => {
    // get token from Cookie
    const hasToken = getToken();
    if (hasToken) {
      // if have token , we get the role by token(no login)
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
    }
    // if no logged ,only can access static routes
    next()
  }
);

