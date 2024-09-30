<script setup>
import { ref } from 'vue'

const emit = defineEmits(['closeRegister'])

const surname = ref('')
const name = ref('')
const phone = ref('')
const email = ref('')
const userType = ref('')
const selerType = ref('')
const password = ref('')
const passwordRepeat = ref('')
</script>

<template>
  <div class="enter" @click="emit('closeRegister')"></div>
  <div class="enterBlock">
    <p class="enterBlock__title">Регистрация</p>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Фамилия</p>
      <input
        class="enterBlock__block__input"
        type="text"
        placeholder="Иванов"
        name="surname"
        id="surname"
        v-model="surname"
      />
    </div>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Имя</p>
      <input
        class="enterBlock__block__input"
        type="text"
        placeholder="Иван"
        name="name"
        id="name"
        v-model="name"
      />
    </div>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Телефон</p>
      <input
        class="enterBlock__block__input"
        type="phone"
        placeholder="+7 999 888 77 66"
        name="phone"
        id="phone"
        v-model="phone"
      />
    </div>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">e-mail</p>
      <input
        class="enterBlock__block__input"
        type="email"
        placeholder="ghjl@mail.ru"
        name="email"
        id="logemailin"
        v-model="email"
      />
    </div>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Пользователь</p>
      <input
        class="enterBlock__block__input enterBlock__block__checkbox"
        type="checkbox"
        placeholder="e-mail"
        name="userType"
        id="userType"
        v-model="userType"
      />
    </div>

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Продавец</p>
      <input
        class="enterBlock__block__input enterBlock__block__checkbox"
        type="checkbox"
        placeholder="e-mail"
        name="selerType"
        id="selerType"
        v-model="selerType"
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

    <div class="enterBlock__block">
      <p class="enterBlock__block__text">Повторите пароль</p>
      <input
        class="enterBlock__block__input"
        type="password"
        placeholder="password"
        v-model="passwordRepeat"
      />
    </div>

    <button class="enterBlock__block__button">Зарегистрироваться</button>
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
  height: 850px;
  width: 721px;
  background-color: #fff;
  border-radius: 8px;
  position: fixed;
  top: 50%;
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
    margin-bottom: 40px;
    margin-top: 40px;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 40px;

    &__text {
      width: 223px;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      padding-left: 20px;
      text-align: left;
      white-space: nowrap;
    }

    &__input {
      width: 418px;
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

    &__checkbox {
      //   width: 418px;
      //   height: 60px;
      //   border: 1px solid #dedede;
      //   border-radius: 8px;
      //   position: absolute;
      //   z-index: -1;
      //   opacity: 0;
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

    &__button {
      width: 337px;
      height: 40px;
      background: #ffbf4b;
      border-radius: 8px;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: #fff;
      border: none;
      margin-bottom: 40px;
      margin-top: 20px;
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
