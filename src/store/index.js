import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      { title: "PROFILE", link: { name: "profile" } },
      { title: "SKILLS", link: { name: "skills" } },
      { title: "WORKS", link: { name: "works" } }
    ]
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    }
  }
});
