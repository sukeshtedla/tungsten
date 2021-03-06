import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import "./filters";

import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
Vue.use(Datetime);

import Notifications from "vue-notification";
Vue.use(Notifications);

import Modal from "vue-js-modal";
Vue.use(Modal, { dynamic: true, injectModalsContainer: true });

import { Collapse } from "bootstrap-vue/es/components";
Vue.use(Collapse);

import VueMarkdown from "vue-markdown";
Vue.component("vue-markdown", VueMarkdown);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
