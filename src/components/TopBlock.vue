<script setup></script>

<template>
  <div class="topBlock">
    <div class="topBlock__item">
      <div class="topBlock__item__titleBlock">
        <p class="topBlock__item__titleBlock__text">Умные покупки</p>
        <img src="@/assets/cart.svg" alt="" class="topBlock__item__titleBlock__icon" />
      </div>
      <p class="topBlock__item__text">Планируйте покупки, выбирайте товары и продавцов</p>
      <div class="topBlock__item__link">
        <img src="@/assets/ArrowDiagonally.svg" alt="link" />
      </div>
    </div>
    <div class="topBlock__item">
      <div class="topBlock__item__titleBlock">
        <p class="topBlock__item__titleBlock__text">Экспертное сообщество</p>
        <img src="@/assets/peoples.svg" alt="" class="topBlock__item__titleBlock__icon" />
      </div>
      <p class="topBlock__item__text">Обменивайтесь опытом и берите консультации от экспертов</p>
      <div class="topBlock__item__link">
        <img src="@/assets/ArrowDiagonally.svg" alt="link" />
      </div>
    </div>
    <div class="topBlock__item">
      <div class="topBlock__item__titleBlock">
        <p class="topBlock__item__titleBlock__text">База знаний</p>
        <img src="@/assets/book.svg" alt="" class="topBlock__item__titleBlock__icon" />
      </div>
      <p class="topBlock__item__text">Сравнивайте товары, изучайте бесплатные публикации</p>
      <div class="topBlock__item__link">
        <img src="@/assets/ArrowDiagonally.svg" alt="link" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topBlock {
  display: flex;
  gap: 20px;
  margin: 0 50px 40px;
  padding: 20px 25px;
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-position: 0 30%;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  &__item {
    height: 170px;
    width: 370px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    &__titleBlock {
      display: flex;
      align-items: center;
      gap: 10px;

      &__text {
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        white-space: nowrap;
        letter-spacing: -0.04em;
      }

      &__icon {
        width: 30px;
        height: 30px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 25px;
      line-height: 25px;
      color: #6a6a6a;
    }

    &__link {
      position: absolute;
      bottom: 14px;
      right: 14px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
