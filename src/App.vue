<script setup>
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const auth = ref(false)
</script>

<template>
  <div class="app">
    <Header :auth="auth" />
    <main>
      <RouterView :auth="auth"></RouterView>
    </main>
  </div>

  <Footer />
</template>

<style scoped lang="scss">
.app{
  max-width: 1300px;
  // min-height: 100vh;
  margin: 0 auto;
  /* padding: 2rem; */
  font-weight: normal;
  // display: flex;
  // flex-direction: column;

}
</style>
