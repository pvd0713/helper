<script setup>
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/Header.vue'


const auth = ref(true)
</script>

<template>
  <Header :auth="auth" />
  <main>
    

    <RouterView :auth="auth" ></RouterView>
  </main>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
}
</style>
