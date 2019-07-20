import {getToken} from "../../utils/auth";
import {login, logout, getInfo} from "../../api/user";
import router from '@/router'
import {Message} from "element-ui";

const state = {
  userId: '',
  username: '',
  password: '',
  avatar: '',
  token: getToken(),
  roles: [],
};

const mutations = {
  SET_USER_ID(state, userId) {
    state.userId = userId
  },
  SET_NAME(state, username) {
    state.username = username
  },
  SET_PASSWORD(state, password) {
    state.password = password
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ROLE(state, roles) {
    state.roles = roles
  }
}
const actions = {
  login({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        if (res.code === 20000) {
          const {data} = res;
          commit('SET_TOKEN', data.token);
          resolve('登入成功');
        } else {
          reject(new Error(res.message))
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      // TODO 通过getter尝试获取
      getInfo(state.token).then(res => {
        const {userId, username, password, avatar, roles} = res.data;
        commit('SET_USER_ID', userId);
        commit('SET_USERNAME', userId);
        commit('SET_AVATAR', userId);
        commit('SET_USER_ID', userId);
        commit('SET_USER_ID', userId);
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
