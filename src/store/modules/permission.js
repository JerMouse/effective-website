import {staticRoutes, asyncRoutes} from "../../router";

//
function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return false;
  }
}

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
  generateRoutes({commit}, roles) {
    return new Promise((resolve, reject) => {
      // 权限路由
      let accessRoutes = [];
      if (roles.includes('teacher')) {

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
