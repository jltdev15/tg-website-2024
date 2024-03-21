import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseCard from "./ui/Base-Card.vue";

const app = createApp(App);

app.use(router);
app.component("base-card", BaseCard);
app.mount("#app");
