<script setup>

const emit = defineEmits(['closeCatalogOpen'])

const catalog = [
  {
    title: 'Электроника',
    items: ['Наушники', 'Телефоны', 'Компьютеры', 'Умные колонки', 'Аксессуары'],
  },
  {
    title: 'Книги',
    items: ['Классика', 'Фантастика', 'Ужасы', 'Приключения', 'Комиксы'],
  },
  {
    title: 'Спорт',
    items: ['Одежда', 'Йога', 'Футбол', 'Плавание', 'Бокс'],
  },
  {
    title: 'Мебель',
    items: ['Кухня', 'Ванная комната', 'Гардероб', 'Прихожая'],
  },
  {
    title: 'Туризм',
    items: ['Одежда', 'Рыбалка', 'Лодки', 'Охота', 'Обувь'],
  },
];

</script>

<template>
  <div class="catalogModal" @click="emit('closeCatalogOpen')"></div>
  <div class="catalog">
    <p class="catalog__title">Каталог</p>
    <div class="catalog__block">
      <div v-for="column, index in catalog" class="catalog__block__item" :key="index">
        <p class="catalog__block__item__title">{{ column.title }}</p>
        <ul>
            <li v-for="item, index in column.items" :key="index">{{ item }}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.catalogModal {
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.catalog {

  max-width: 80%;
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
  padding: 40px;

  &__title {
    width: 100%;
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 45px;
    border-bottom: 1px solid #999;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;


      ul {
        list-style: none;
      }
    }
  }
}
</style>
