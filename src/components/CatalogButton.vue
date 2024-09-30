<script setup>
 const emit = defineEmits(['openCatalogOpen'])
</script>

<template>
<div class="catalog" @click="emit('openCatalogOpen')">
    <p class="catalog__text">Каталог</p>
    <img src="@/assets/catalog.svg" alt="" class="catalog__img">

</div>
</template>

<style scoped lang="scss">
.catalog{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFBF4B;
    border-radius: 8px;
    padding: 2px 20px;
    gap: 125px;

    &__text{
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        color: #FFFFFF;
        
    }
}
</style>
