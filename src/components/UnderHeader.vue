<script setup>
defineProps({
  auth: Boolean
})
</script>

<template>
  <div class="underHeader">
    <div class="underHeader__leftBlock" :class="auth ? 'underHeader__leftBlock-active' : ''">
      <p class="underHeader__leftBlock__text" :class="auth ? 'underHeader__leftBlock__textOrange' : ''">Закладки</p>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.75 21.25C17.5974 21.247 17.4487 21.202 17.32 21.12L12 17.41L6.68 21.12C6.56249 21.1915 6.42757 21.2294 6.29 21.2294C6.15243 21.2294 6.01751 21.1915 5.9 21.12C5.78491 21.0607 5.68741 20.9722 5.61722 20.8634C5.54703 20.7546 5.50661 20.6293 5.5 20.5V6.5C5.5 5.77065 5.78973 5.07118 6.30546 4.55546C6.82118 4.03973 7.52065 3.75 8.25 3.75H15.75C16.4793 3.75 17.1788 4.03973 17.6945 4.55546C18.2103 5.07118 18.5 5.77065 18.5 6.5V20.5C18.5005 20.6362 18.4634 20.7698 18.3929 20.8863C18.3223 21.0027 18.2209 21.0974 18.1 21.16C17.9927 21.2189 17.8724 21.2498 17.75 21.25ZM12 15.75C12.1532 15.7484 12.3033 15.7938 12.43 15.88L17 19.06V6.5C17 6.16848 16.8683 5.85054 16.6339 5.61612C16.3995 5.3817 16.0815 5.25 15.75 5.25H8.25C7.91848 5.25 7.60054 5.3817 7.36612 5.61612C7.1317 5.85054 7 6.16848 7 6.5V19.06L11.57 15.88C11.6967 15.7938 11.8468 15.7484 12 15.75Z"
          :fill="auth ? '#FFBF4B' : '#DEDEDE'"
        />
      </svg>
    </div>
    <div class="underHeader__rightBlock">
      <p class="underHeader__rightBlock__text">Стать продавцом</p>
      <img src="@/assets/cube.svg" alt="settings" class="underHeader__rightBlock__icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.underHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 24px;
  background: #ffffff;
  margin-bottom: 10px;
  gap: 20px;

  &__leftBlock {
    display: flex;
    align-items: center;
    gap: 20px;

    &__text {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #DEDEDE;
      white-space: nowrap;
    }

    &__textOrange {
      color: #FFBF4B;
    }
  }

  &__leftBlock-active:hover {
      cursor: pointer;
  }

  &__rightBlock {
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      cursor: pointer;
    }
    &__text {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #FFBF4B;
      white-space: nowrap;
    }
  }
}
</style>
