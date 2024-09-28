<script setup>
import Catalog from './Catalog.vue'
import Search from './Search.vue'
</script>

<template>
  <div class="catalogSearch">
    <Catalog />
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
