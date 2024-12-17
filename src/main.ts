import 'normalize.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Lazyload } from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 注册时可以配置额外的选项
app.use(Lazyload, {
  lazyComponent: true,
})

app.mount('#app')
