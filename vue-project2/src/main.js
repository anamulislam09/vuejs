import { createApp } from "vue";
// import App from "./App1.vue";
import App from "./Event1.vue";
import router from "./router";

// import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
