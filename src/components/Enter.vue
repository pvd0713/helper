<script setup>
import { ref } from 'vue'

const emit = defineEmits(['closeEnter', 'openRegister'])

const openRegister = () => {
  emit('closeEnter')
  emit('openRegister')
}

const login = ref('')
const password = ref('')

const sendForm = () => {
  emit('closeEnter')
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
        type="email"
        placeholder="e-mail"
        name="login"
        id="login"
        v-model="login"
      />
    </div>
    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Пароль</p>
      <input
        class="enterBlock__block__input"
        type="password"
        placeholder="password"
        v-model="password"
      />
    </div>
    <button class="enterBlock__block__button" @click="sendForm">Войти</button>
    <div class="enterBlock__block__footer">
      <p class="enterBlock__block__link">Забыли пароль?</p>
      <p class="enterBlock__block__link" @click="openRegister">Зарегистрироваться</p>
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
      width: 100%;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      padding-left: 40px;
      text-align: left;
    }

    &__input {
      width: calc(100% - 80px);
      height: 60px;
      border: 1px solid #dedede;
      border-radius: 8px;
      padding: 20px;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #999;
      }
    }

    &__button {
      width: calc(100% - 80px);
      height: 40px;
      background: #ffbf4b;
      border-radius: 8px;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #fff;
      border: none;
      margin-bottom: 10px;
      cursor: pointer;
    }

    &__footer {
      width: 100%;
      padding: 0 40px;
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
      justify-content: space-between;
    }

    &__link {
      font-weight: 300;
      font-size: 14px;
      line-height: 14px;
      cursor: pointer;
      color: #999;
    }
  }
}
</style>
