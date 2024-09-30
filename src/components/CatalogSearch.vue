<script setup>
import CatalogButton from './CatalogButton.vue'
import Search from './Search.vue'

const emit = defineEmits(['openCatalogOpen'])

</script>

<template>
  <div class="catalogSearch">
    <CatalogButton @openCatalogOpen="emit('openCatalogOpen')" />
    <Search />
  </div>
</template>

<style scoped lang="scss">
.catalogSearch {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 0 50px 40px;
}
</style>
