import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { customAxios } from "./lib/customAxios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
