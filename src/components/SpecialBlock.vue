<script setup></script>

<template>
  <div class="special">
    <p class="special__title">Специальное предложение</p>
    <div class="special__block"></div>
    <div class="special__link">
      <p class="special__link__text">показать еще</p>
      <img src="@/assets/ArrowSimpleRight.svg" alt="link" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.special {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 50px 40px;
  padding: 20px;
  background-image: url('@/assets/background2.png');
  background-size: cover;
  background-position: 0 30%;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 1px solid #dedede;    

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    color: #000;
    text-align: center;
    padding-bottom: 20px;
  }

  &__block {
    width: 100%;
    height: 200px;
    background-color: #ffbf4b;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000;
  }
}
</style>
