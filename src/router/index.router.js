import { createWebHistory, createRouter } from "vue-router";
import LoginRegisterView from "@/views/LoginRegister.views.vue";
import ProfileView from "@/views/Profile.views.vue";
import GamesView from "@/views/Games.views.vue";

const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: LoginRegisterView,
  },
  { 
    name: 'profile',
    path: '/profile', 
    component: ProfileView, 
    props:true 
  },
  {
    name: 'games',
    path: '/',
    component: GamesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;