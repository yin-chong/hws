import { createApp } from 'vue';
// import './styles/var.scss';
import './style.css';
import 'element-plus/es/components/message/style/css'
import App from './App.vue';
import router from './router/index';
import processApiConfig from "./api/api";
import { apiConfig } from "./api/apiConfig/apiConfig";
import { createPinia } from 'pinia'

const env = process.env.NODE_ENV;
const isOpenMock = true; // 全局Mock开关 true开启
if(env != 'production' && isOpenMock) import('./mock/index'); // 只在非生产环境下使用Mock

const app =createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router).mount('#app')
app.config.globalProperties.$api = processApiConfig(apiConfig);
