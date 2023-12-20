<template>
  <section class="top-sales">
    <div class="wrapper">
      <div class="top-sales__inner">
        <h2 class="top-sales__title">Top <span class="accent">Sales</span></h2>
        <p class="top-sales__subtitle subtitle">You will like it</p>
        <ul class="top-sales__filters">
          <li
            class="top-sales__filters-item"
            :class="{ active: item.isActive.value }"
            v-for="item in filtersList"
            :key="item.id"
          >
            <button type="button" @click="filterItemToggle(item)">{{ item.name }}</button>
          </li>
        </ul>
        <ul class="top-sales__list">
          <li class="top-sales__item" v-for="item in topSalesList" :key="item.id">
            <a class="top-sales__item-link" :href="item.href" target="_blank">
              <img class="top-sales__item-img" :src="item.imgSrc" :alt="item.imgAlt" />
              <p class="top-sales__item-descr">{{ item.descr }}</p>
              <p class="top-sales__item-price">{{ item.price }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const filtersList = [
  {
    id: 0,
    name: 'All',
    isActive: ref(true)
  },
  {
    id: 1,
    name: 'T-shirts',
    isActive: ref(false)
  },
  {
    id: 2,
    name: 'Undershirts',
    isActive: ref(false)
  },
  {
    id: 3,
    name: 'Sweatshirts',
    isActive: ref(false)
  },
  {
    id: 4,
    name: 'Mugs',
    isActive: ref(false)
  },
  {
    id: 5,
    name: 'Plates',
    isActive: ref(false)
  },
  {
    id: 6,
    name: 'Other',
    isActive: ref(false)
  }
]

const topSalesList = [
  {
    id: 0,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Yellow sweatshirt',
    price: '230₴'
  },
  {
    id: 1,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
    imgAlt: 't-shirt',
    descr: 'White t-shirt',
    price: '230₴'
  },
  {
    id: 2,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Yellow sweatshirt',
    price: '230₴'
  },
  {
    id: 3,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
    imgAlt: 't-shirt',
    descr: 'White t-shirt',
    price: '230₴'
  }
]

function filterItemToggle(item) {
  for (let i = 0; i < filtersList.length; i++) {
    filtersList[i].isActive.value = false
  }
  filtersList[item.id].isActive.value = true
}
</script>

<style lang="scss" scoped>
.top-sales {
  text-align: center;
  margin-bottom: 150px;
  .wrapper {
    max-width: 1100px;
  }

  &__subtitle {
    margin-bottom: 30px;
  }

  &__filters {
    @include flex(flex, row, center, flex-start, wrap, 20px 0);
    margin-bottom: 90px;

    &-item {
      button {
        padding: 8px 22px 9px;
        color: var(--color-light);
        font-size: 24px;
        font-weight: 400;
        border: none;
        background-color: transparent;
        cursor: pointer;
        @include transition((color, background-color, box-shadow), 0.3s, ease-in, 0s);

        &:hover {
          color: var(--color-black);
          background-color: var(--color-yellow);
          box-shadow: 1px 1px 2px var(--color-yellow);
        }
      }

      &.active {
        button {
          color: var(--color-black);
          background-color: var(--color-yellow);
          box-shadow: 1px 1px 2px var(--color-yellow);
        }
      }
    }
  }

  &__list {
    @include flex(flex, row, flex-start, flex-start, wrap, 25px 25px);
  }

  &__item {
    flex-basis: calc((100% - 25px * 3) / 4);

    &-link {
      color: var(--color-light);

      &:hover {
        .top-sales__item-img {
          transform: scale(1.1);
        }
      }
    }

    &-img {
      max-height: 240px;
      margin-bottom: 26px;
      @include transition(transform, 0.3s, ease-in, 0);
    }

    &-descr {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 5px;
    }

    &-price {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
