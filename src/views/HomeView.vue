<script setup>

import UnderHeader from '@/components/UnderHeader.vue'
import CatalogSearch from '@/components/CatalogSearch.vue'
import TopBlock from '@/components/TopBlock.vue'
import SpecialBlock from '@/components/SpecialBlock.vue'
import PopularBlock from '@/components/PopularBlock.vue'
import RecommendedBlock from '@/components/RecommendedBlock.vue'

defineProps({
  auth: Boolean
})

</script>

<template>
  <main>
    <UnderHeader :auth="auth" />
    <CatalogSearch />
    <TopBlock />
    <SpecialBlock />
    <PopularBlock />
    <RecommendedBlock />
  </main>
</template>

<style scoped lang="scss">
</style>
