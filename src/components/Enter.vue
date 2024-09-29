<script setup>
const emit = defineEmits(['closeEnter', 'openRegister'])

const openRegister = () => {
  emit('closeEnter')
  emit('openRegister')
}
</script>

<template>
  <div class="enter" @click="emit('closeEnter')"></div>
  <div class="enterBlock">
    <p class="enterBlock__title">Вход в систему</p>
    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Логин</p>
      <input
        class="enterBlock__block__input"
        type="text"
        placeholder="Логин"
        name="login"
        id="login"
      />
    </div>
    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Пароль</p>
      <input class="enterBlock__block__input" type="password" />
    </div>
    <button class="enterBlock__block__button">Войти</button>
    <div class="enterBlock__block__footer">
      <p class="enterBlock__block__link">Забыли пароль?</p>
      <p class="enterBlock__block__link" @click="openRegister">Регистрация</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.enter {
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.enterBlock {
  height: 434px;
  width: 498px;
  background-color: #fff;
  border-radius: 8px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 20px;

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      margin-left: 20px;
    }

    &__input {
      width: calc(100% - 40px);
      height: 30px;
      border: 1px solid #dedede;
      border-radius: 8px;
      padding-left: 20px;
    }

    &__button {
      width: calc(100% - 40px);
      height: 30px;
      background: #ffbf4b;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #fff;
      border: none;
      margin-bottom: 10px;
      cursor: pointer;
    }

    &__footer {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
    }

    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;
    }
  }
}
</style>
