import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/style/main.scss";

new Vue({
  store,
  el: "#app",
  router: router,
  render: (h) => h(App),
  vuetify,
}).$mount("#app");
