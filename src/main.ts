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

// primevue - theme
// import AppState from './plugins/appState.js';
// import Noir from '@/presets/Noir';
// import ThemeSwitcher from './components/ThemeSwitcher.vue';

// router
import router from '@/routers'

const app = createApp(App);

app.use(PrimeVue, {
	// unstyled - ex) primevue 내장 스타일 추가하지않기 -> tailwind같은 외장꺼 사용 (중복되지 않게끔)
	// unstyled: true,
	// theme: {
	// 	preset: Noir,
	// 	options: {
	// 		prefix: 'p',
	// 		darkModeSelector: '.p-dark',
	// 	// 	cssLayer: {
	// 	// 		name: 'primevue',
	// 	// 		order: 'tailwind-base, primevue, tailwind-utilities'
	// 	// }
	// 	}
	// }
	theme: 'none' // primevue default -> tailwindcss change
});

// app.component('ThemeSwitcher', ThemeSwitcher);
// app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);
app.mount('#app')
