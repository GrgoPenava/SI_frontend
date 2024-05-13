import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./Router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import ApiService from "./Services/ApiService";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@hcaptcha/vanilla-hcaptcha";
//@ts-ignore
import moment from "moment";

const pinia = createPinia();
const toastOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  transition: "Vue-Toastification__bounce",
  toastClassName: "custom",
  bodyClassName: ["custom"],
  maxToasts: 15,
  newestOnTop: true,
  draggable: true,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
};
const app = createApp(App);
app.use(pinia);
app.use(Toast, toastOptions);

const backendUrl = "https://localhost:8081/";
ApiService.init(backendUrl);

function renderApp() {
  app.use(router).use(PrimeVue).mount("#app");
}

renderApp();
