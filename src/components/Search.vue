<script setup></script>

<template>
  <div class="search">
    <input type="text" placeholder="Поиск" class="search__input" />
    <img src="@/assets/search.svg" alt="" class="search__img" />
  </div>
</template>

<style scoped lang="scss">
.search {
  flex-grow: 1;
  position: relative;

  &__input {
    width: 100%;
    height: 44px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #dedede;
    padding: 10px 40px 10px 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
    }
  }

  &__img {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
