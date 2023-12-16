<template>
  <section class="top-sales">
    <div class="wrapper">
      <div class="top-sales__inner">
        <h2>Top <span class="accent">Sales</span></h2>
        <p>You will like it</p>
        <ul class="top-sales__filters">
          <li class="top-sales__filters-item" v-for="item in filtersList" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
        <ul class="top-sales__list">
          <li class="top-sales__item" v-for="item in topSalesList" :key="item.id">
            <img class="top-sales__item-img" :src="item.imgSrc" :alt="item.imgAlt" />
            <p class="top-sales__item-descr">{{ item.descr }}</p>
            <p class="top-sales__item-price">{{ item.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const filtersList = [
  {
    id: 0,
    name: 'All',
    isActive: true
  },
  {
    id: 1,
    name: 'T-shirts',
    isActive: false
  },
  {
    id: 2,
    name: 'Undershirts',
    isActive: false
  },
  {
    id: 3,
    name: 'Sweatshirts',
    isActive: false
  },
  {
    id: 4,
    name: 'Mugs',
    isActive: false
  },
  {
    id: 5,
    name: 'Plates',
    isActive: false
  },
  {
    id: 6,
    name: 'Other',
    isActive: false
  }
]

const topSalesList = [
  {
    id: 0,
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Yellow sweatshirt',
    price: '230₴'
  },
  {
    id: 1,
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
    imgAlt: 't-shirt',
    descr: 'White t-shirt',
    price: '230₴'
  },
  {
    id: 2,
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Yellow sweatshirt',
    price: '230₴'
  },
  {
    id: 3,
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
    imgAlt: 't-shirt',
    descr: 'White t-shirt',
    price: '230₴'
  }
]
</script>
