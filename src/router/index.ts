import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/routes/Home.vue'
import Page from '../components/routes/Page.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/page', component: Page },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router