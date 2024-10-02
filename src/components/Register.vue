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

function sendForm() {
    emit('closeRegister')   
}
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
      <input
        class="enterBlock__block__input enterBlock__block__checkbox"
        type="radio"
        placeholder="e-mail"
        name="userType"
        id="userType"

      />
      <label for="userType" class="enterBlock__block__text">Пользователь</label>
    </div>

    <div class="enterBlock__block">
      <input
        class="enterBlock__block__input enterBlock__block__checkbox"
        type="radio"
        placeholder="e-mail"
        name="userType"
        id="selerType"

      />
      <label for="selerType" class="enterBlock__block__text">Продавец</label>
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

    <button class="enterBlock__block__button" @click="sendForm">Зарегистрироваться</button>
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
      user-select: none;
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
      display: none;
    }

    &__checkbox + label {
      position: relative;
      height: 60px;
      display: flex;
      align-items: center;
      color: #000;
    }

    &__checkbox + label:before {
      content: '';
      position: absolute;
      left: 228px;
      top: 0;
      width: 60px;
      height: 60px;
      border: 1px solid #dedede;
      border-radius: 8px;
    }

    &__checkbox:checked + label::before {
      background-image: url('@/assets/check.svg');
      background-size: contain;
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
