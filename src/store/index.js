import Vue from 'vue';
import Vuex from 'vuex';

const API_URL =  'http://localhost:3000';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setState(state, data) {
      state[data.key] = data.value;
    }
  },
  actions: {
    request(context, {path, state}) {
      fetch(`${API_URL}/${path}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          context.commit('setState', {key: state, value: data});
        });
    }
  },
  modules: {
  },
});
