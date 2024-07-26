import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import { ROUTES_PATHES } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHES.HOME,
      name: ROUTES_PATHES.HOME,
      component: Home
    },
    {
      path: ROUTES_PATHES.COCKTAIL,
      name: ROUTES_PATHES.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTES_PATHES.COCKTAIL_RANDOM,
      name: ROUTES_PATHES.COCKTAIL_RANDOM,
      component: CocktailRandom
    },
    
  ]
})

export default router
