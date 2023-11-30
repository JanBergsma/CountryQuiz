import WelcomeScreen from '@/views/WelcomeSreen.vue'
import QuestionView from '@/views/questionView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeScreen
    },
    {
      path: '/capital',
      name: 'capital',
      component: QuestionView,
      props: { questionKind: 'capital' }
    },
    {
      path: '/flag',
      name: 'flage',
      component: QuestionView,
      props: { questionKind: 'flag' }
    }
  ]
})

export default router
