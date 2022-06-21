import { createWebHistory, createRouter } from "vue-router";
import LoginRegisterView from "@/views/LoginRegister.vue";
import ProfileView from "@/views/Profile.vue";

const routes = [
  { 
    name: 'login',
    path: '/', 
    component: LoginRegisterView,
  },
  { 
    name: 'profile',
    path: '/profile', 
    component: ProfileView, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;