<template>
<div>
<NavComponents/>

<GamesComponents/>
</div>
</template>

<script>
import GamesComponents from '@/components/Games.components.vue'
import NavComponents from '@/components/Nav.components.vue'
export default {
  name: "GamesView",
  components: {
  GamesComponents,
  NavComponents
  },
  methods: {
    
  },
};
</script>

<style scoped>
</style>