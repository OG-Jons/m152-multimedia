import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-purple/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "aos/dist/aos.css";

import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(router);

app.use(PrimeVue);

app.use(createMetaManager());

// Components
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {createMetaManager} from "vue-meta";


app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Button", Button);
router.isReady();
app.mount("#app");
