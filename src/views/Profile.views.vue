<template>
<div>
<NavComponents/>
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    
    <address>
      <p>{{ user.firstname }} </p>
      <p>{{ user.name }}</p>
      <p> {{ user.email }}</p>
    </address>
    
    <div class="form-row">
      <router-link :to="'/'" class="button">Retour à l'accueil</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavComponents from '@/components/Nav.components.vue'
export default {
  name: "ProfileView",
  components:{
  NavComponents
  },
  computed: {
    ...mapState({
      user: "userInfos",
    }),
  },
 
};
</script>

<style scoped>

</style>