import { createStore } from 'vuex';
import 'es6-promise/auto';
import API from '../../env.js';
import createPersistedState from "vuex-persistedstate";

const axios = require('axios');
const instance = axios.create({
  baseURL: API.baseURL
});

let user = localStorage.getItem('user');
if(!user){
  user = {
    userId: -1,
    token: ''
  };
} else {
  try {
    user = JSON.parse(user);
  } catch (error) {
    user = {
      userId: -1,
      token: ''
    };
  }
  
}
// Create a new store instance.
const store = createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      name:'',
      firstname: '',
      email:'',
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user){
      instance.defaults.headers.common['Authorization'] = user.token;
      state.user = user;
    },
    userInfos: function (state, userInfos){
      state.userInfos = userInfos;
    },
    logout: function (state){
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
    }
  },
  actions: {
    login: ({ commit }, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
          .then((res) => {
            commit('setStatus', '');
            commit('logUser', res.data)
            resolve(res)
          })
          .catch((error) => {
            commit('setStatus', 'error_login');
            reject(error)
          });
      })
    },
    register: ({ commit }, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/register', userInfos)
          .then((res) => {
            commit('setStatus', 'created');
            resolve(res)
          })
          .catch((error) => {
            commit('setStatus', 'error_create');
            reject(error)
          });
      })
    },
    getUserInfos: ({commit}) => {
      instance.get('/user')
      .then((res) => {
        commit('userInfos', res.data);
      })
      .catch((error) => {
      });
    }


  }
})

export default store;