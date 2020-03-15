import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import VueCarousel from "vue-carousel";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookSquare,
  faYoutube,
  faBtc,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebookSquare, faYoutube, faBtc, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue, VueCarousel);
// Importing the global css file
import "@/assets/style.scss";

new Vue({
  render: h => h(App)
}).$mount("#app");
