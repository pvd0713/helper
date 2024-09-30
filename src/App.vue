<script setup>
import { ref } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const auth = ref(false)
const isEnterOpen = ref(false)
const isRegisterOpen = ref(false)

const openEnter = () => {
  isEnterOpen.value = true
}

const closeEnter = () => {
  isEnterOpen.value = false
}

const openRegister = () => {
  isRegisterOpen.value = true
}

const closeRegister = () => {
  isRegisterOpen.value = false
}
</script>

<template>
  <div class="app">
    <Header :auth="auth" @openEnter="openEnter" />
    <main>
      <RouterView
        :auth="auth"
        :isEnterOpen="isEnterOpen"
        @openEnter="openEnter"
        @closeEnter="closeEnter"
        @openRegister="openRegister"
        @closeRegister="closeRegister"
        :isRegisterOpen="isRegisterOpen"
      ></RouterView>
    </main>
    <Footer />
  </div>

  
</template>

<style scoped lang="scss">
.app {
  width: 1300px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
