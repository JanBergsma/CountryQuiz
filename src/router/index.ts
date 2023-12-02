import QuestionView from '@/views/QuestionView.vue'
import ResultsView from '@/views/ResultsView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/capital',
      name: 'capital',
      component: QuestionView,
      props: { questionKind: 'capital' }
    },
    {
      path: '/flag',
      name: 'flag',
      component: QuestionView,
      props: { questionKind: 'flag' }
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    }
  ]
})

export default router
