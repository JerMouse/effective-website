import {getToken, removeToken, setToken} from "../../utils/auth";
import {getInfo, login} from "../../api/user";

const state = {
  userId: '',
  username: '',
  password: '',
  avatar: '',
  token: getToken(),
  role: '',
};

const mutations = {
  SET_USER_ID(state, userId) {
    state.userId = userId
  },
  SET_USER_NAME(state, username) {
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
  SET_ROLE(state, role) {
    state.role = role
  },
  LOGOUT(state) {
    state.userId = ''
    state.username = ''
    state.password = ''
    state.avatar = ''
    state.role = ''
    removeToken()
  }
};
const actions = {
  login({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        if (res.code === 20000) {
          const {data} = res;
          commit('SET_TOKEN', data);
          setToken(data)
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
      getInfo(state.token).then(res => {
        if (res.code === 20000) {
          const data = res.data;
          const {userId, username, avatar, password, role} = data;

          commit('SET_USER_ID', userId);
          commit('SET_USER_NAME', username);
          commit('SET_AVATAR', avatar);
          commit('SET_PASSWORD', password);
          commit('SET_ROLE', role);
          resolve(res.data)
        } else {
          reject(new Error(res.message))
        }
      })
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
