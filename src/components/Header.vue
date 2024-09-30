<script setup>
const emit = defineEmits(['openEnter'])

defineProps({
  auth: Boolean
})
</script>

<template>
  <header>
    <div class="leftBlock">
      <RouterLink to="/">
        <img alt="Vue logo" class="leftBlock__logo" src="@/assets/logo.svg" width="170" />
      </RouterLink>
      <p class="leftBlock__text">Invest planner</p>
    </div>
    <div class="rightBlock">
      <div class="rightBlock__donate">
        <img
          alt="donate"
          class="rightBlock__donate__icon"
          src="@/assets/Donate.svg"
          width="20"
          height="20"
        />
        <p class="rightBlock__donate__text">Donate</p>
      </div>
      <div class="rightBlock__city">
        <img
          alt="geoposition"
          class="rightBlock__city__icon"
          src="@/assets/geoposition.svg"
          width="20"
          height="20"
        />
        <p class="rightBlock__city__text">Воронеж</p>
      </div>

      <div v-if="auth" class="rightBlock__user">
        <p class="rightBlock__user__text">Иванов И.</p>
        <button class="rightBlock__user__card">Личная карточка</button>
      </div>
      <div v-else class="rightBlock__button" @click="emit('openEnter')">Вход</div>
    </div>

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">roduct</RouterLink>
      </nav>
    </div> -->
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  place-items: center;
  margin: 20px 0 10px;
  padding: 10px 70px;
  background-color: #ffbf4b4d;
  border-radius: 8px;
}

.leftBlock {
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;

  &__logo:hover {
    cursor: pointer;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
    padding: 0 5px;
  }
}

.rightBlock {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
  padding-left: 20px;

  &__donate {
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      cursor: pointer;
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
    }
  }

  &__city {
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      cursor: pointer;
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      white-space: nowrap;
    }
  }

  &__button {
    padding: 5px 10px;
    background: #ffbf4b;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }

  &__user {
    position: relative;

    &__text {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      white-space: nowrap;
      border-bottom: 1px solid #000;

      &:hover {
        cursor: pointer;
      }
    }

    &__card {
      padding: 5px 20px;
      background: #fff;
      border-radius: 8px;
      font-weight: 300;
      font-size: 14px;
      line-height: 14px;
      color: #000;
      white-space: nowrap;
      border: 1px solid #dedede;
      position: absolute;
      right: 0;
      top: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1024px) {
}
</style>
