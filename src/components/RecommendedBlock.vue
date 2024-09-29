<script setup>
import { useProductsStore } from '@/stores/products'
const { products } = useProductsStore()
</script>

<template>
  <div class="special">
    <p class="special__title">Рекомендации </p>
    <div class="special__block">
      <div class="special__block__item" v-for="product in products" :key="product.id">
        <div class="special__block__item__img">
          <img :src="product.img" alt="product" />
        </div>
        <p class="special__block__item__price">
          {{ product.price }} руб.
          <img src="@/assets/bookmark.svg" alt="bookmark" class="special__block__item__bookmark" />
        </p>
        <p class="special__block__item__title">{{ product.title }}</p>
        <div class="special__block__item__info">
          <div class="special__block__item__info__item">
            <img src="@/assets/store.svg" alt="store" />
            <p>{{ product.salesCounter }}</p>
          </div>
          <div class="special__block__item__info__item">
            <img src="@/assets/watch.svg" alt="watch" />
            <p>{{ product.date }}</p>
          </div>
          <div class="special__block__item__info__item">
            <img src="@/assets/star.svg" alt="star" />
            <p>{{ product.rating }}</p>
          </div>
          <div class="special__block__item__info__item">
            <img src="@/assets/delivery.svg" alt="delivery" />
            <p>{{ product.dateDelivery }}</p>
          </div>
        </div>
        <button class="special__block__item__link">Перейти</button>
      </div>
    </div>
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
//   background-image: url('@/assets/background2.png');
//   background-size: cover;
//   background-position: 0 30%;
//   background-repeat: no-repeat;
//   box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.5);
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 10px;

    &__item {
      width: 175.5px;
      height: 297px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #dedede;

      &__img {
        width: 153px;
        height: 139px;
        border-radius: 8px;
        border: 1px solid #dedede;
        margin: 10px auto 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }

      &__price {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &__title {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin: 0 10px;
        white-space: nowrap;
        overflow: hidden;
      }

      &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 6px 10px;
        flex-wrap: wrap;

        &__item {
          display: flex;
          align-items: center;
          gap: 10px;

          p {
            font-weight: 400;
            font-size: 12px;
            line-height: 12px;
            color: #999;
          }
        }
      }

      &__link {
        width: calc(100% - 20px);
        height: 30px;
        background: #ffbf4b;
        border-radius: 8px;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        cursor: pointer;
        border: none;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000;
  }
}
</style>
