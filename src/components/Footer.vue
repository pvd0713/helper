<script setup></script>

<template>
  <div class="footer">
    <div class="footer__block">
      <p class="footer__block__text">О нас</p>
      <p class="footer__block__text">Сотрудничество</p>
      <p class="footer__block__text">Обратная связь</p>
      <p class="footer__block__text">Контакты</p>
      <p class="footer__block__text">Соглашение</p>
      <p class="footer__block__text">Помощь</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  height: 230px;
  width: 100%;
  background-color: rgba(255, 191, 75, 0.5);
  margin-bottom: 0;
  padding: 60px 15%;
  display: flex;
  justify-content: center;

  &__block {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 30px;

    &__text {
      cursor: pointer;
      white-space: nowrap;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: #000;
    }
  }
}
</style>
