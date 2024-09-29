<script setup>
const emit = defineEmits(['openEnter', 'closeRegister'])

const openEnter = () => {
  emit('closeRegister')
  emit('openEnter')
}
</script>

<template>
  <div class="register" @click="emit('closeRegister')"></div>
  <div class="registerBlock">
    <p class="registerBlock__title">Регистрация</p>
    <div class="registerBlock__block">
      <p class="registerBlock__block__text">Логин</p>
      <input
        class="registerBlock__block__input"
        type="text"
        placeholder="Логин"
        name="login"
        id="login"
      />
    </div>
    <div class="registerBlock__block">
      <p class="registerBlock__block__text">Пароль</p>
      <input class="registerBlock__block__input" type="password" />
    </div>
    <button class="registerBlock__block__button">Зарегистрироваться</button>
    <div class="registerBlock__block__footer">
      <p class="registerBlock__block__link" @click="openEnter">Вход</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.register {
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.registerBlock {
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
    }

    &__input {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #dedede;
      padding-left: 10px;
    }

    &__button {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #dedede;
      padding-left: 10px;
      margin-top: 20px;
    }

    &__footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    &__link {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #ffbf4b;
      cursor: pointer;
    }
  }
}
</style>
