<template>
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    
    <address>
      <p>{{ user.firstname }} </p>
      <p>{{ user.name }}</p>
      <p> {{ user.email }}</p>
    </address>
    
    <div class="form-row">
      <button @click="logout()" class="button">Déconnexion</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProfileView",
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push("/profile");
      return;
    }
    this.$store.dispatch("getUserInfos");
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