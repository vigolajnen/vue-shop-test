import { createApp } from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/router";

import "@/assets/styles/styles.scss";

createApp(App).use(router).use(store).mount("#app");
