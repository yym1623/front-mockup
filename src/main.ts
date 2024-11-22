import { createApp } from 'vue'
import App from '@/App.vue'

// css
import "@/style.css";
import "@/assets/tailwind.css";

// primevue
import PrimeVue from "primevue/config";
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';
import "primeicons/primeicons.css";
// router
import router from '@/routers'

const app = createApp(App);

app.use(PrimeVue, {
	theme: 'none', // primevue default -> tailwindcss change (파일로 관리)
});


app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);
app.mount('#app')
