import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import 'tailwindcss/tailwind.css' // 引入 Tailwind CSS

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      // 其他路由...
    ],
  })

createApp(App).use(router).mount('#app')
