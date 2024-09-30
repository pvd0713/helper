<script setup>
import UnderHeader from '@/components/UnderHeader.vue'
import CatalogSearch from '@/components/CatalogSearch.vue'
import TopBlock from '@/components/TopBlock.vue'
import SpecialBlock from '@/components/SpecialBlock.vue'
import PopularBlock from '@/components/PopularBlock.vue'
import RecommendedBlock from '@/components/RecommendedBlock.vue'
import Enter from '@/components/Enter.vue'
import Register from '@/components/Register.vue'
import CatalogModal from '@/components/CatalogModal.vue'
import { ref } from 'vue'

defineProps({
  auth: Boolean,
  isEnterOpen: Boolean,
  isRegisterOpen: Boolean
})

const isCatalogOpen = ref(false)

const openCatalogOpen = () => {
    isCatalogOpen.value = true;
};

const closeCatalogOpen = () => {
    isCatalogOpen.value = false;
};


const emit = defineEmits(['openEnter', 'closeEnter', 'openRegister', 'c'])
</script>

<template>

    <UnderHeader :auth="auth" />
    <CatalogSearch @openCatalogOpen="openCatalogOpen" />
    <TopBlock />
    <SpecialBlock />
    <PopularBlock />
    <RecommendedBlock />
    <Enter
      v-if="isEnterOpen"
      @closeEnter="emit('closeEnter')"
      @openRegister="emit('openRegister')"
    />
    <Register
      v-if="isRegisterOpen"
      @closeRegister="emit('closeRegister')"
      @openEnter="emit('openEnter')"
    />
    <CatalogModal v-if="isCatalogOpen" @closeCatalogOpen="closeCatalogOpen" />

</template>

<style scoped lang="scss"></style>
