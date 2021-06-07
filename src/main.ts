import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios; // prototype에 axios 추가

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
