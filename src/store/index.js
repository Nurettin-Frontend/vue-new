import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    state: {
      sideWidth: "10px",
    },
    getters: {
      sideWidth(state) {
        return state.sideWidth;
      },
    },
    mutations: {
      TOGGLE_SIDE(state) {
        if (state.sideWidth == "250px") {
          state.sideWidth = "10px";
        } else {
          state.sideWidth = "250px";
        }
      },
    },
    actions: {
      toggleSide({commit}){
        commit("TOGGLE_SIDE")
      }
    },
    modules: {},
  });

  return Store;
}
