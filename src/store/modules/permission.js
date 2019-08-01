import {asyncRoutes, staticRoutes} from "../../router";


const state = {
  // 用户可访问的路由
  routes: [],
  // 动态生成的路由
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, asyncRoutes) => {
    state.addRoutes = asyncRoutes;
    state.routes = staticRoutes.concat(asyncRoutes)
  }
};

const actions = {
  generateRoutes({commit}, role) {
    return new Promise((resolve, reject) => {
      // 权限路由
      let accessRoutes = [];
      if (role.indexOf('student') !== -1) {
        accessRoutes = asyncRoutes.concat({
          path: '*',
          component: () => import('@/views/error/404.vue')
        })
      } else {

      }
      commit('SET_ROUTES', accessRoutes);
      // permission.js获取
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
