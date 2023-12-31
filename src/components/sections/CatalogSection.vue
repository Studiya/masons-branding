<template>
  <section class="catalog" id="catalog">
    <div class="wrapper">
      <div class="catalog__inner">
        <h2 class="catalog__title">Cata<span class="accent">log</span></h2>
        <p class="catalog__subtitle subtitle">Choose whatever you like</p>
        <ul class="catalog__list" v-if="!isSmallScreen">
          <li class="catalog__item" v-for="item in catalogList" :key="item.id">
            <a class="catalog__item-link" :href="item.href" target="_blank">
              <img :src="item.imgSrc" :alt="item.imgAlt" class="catalog__item-img" />
              <p class="catalog__item-descr">{{ item.descr }}</p>
              <p class="catalog__item-details">{{ item.details }}</p>
            </a>
          </li>
        </ul>
        <Carousel class="catalog__list catalog__list_mobile" v-if="isSmallScreen" v-bind="settings">
          <Slide v-for="item in catalogList" :key="item.id">
            <div class="catalog__item">
              <a class="catalog__item-link" :href="item.href" target="_blank">
                <img :src="item.imgSrc" :alt="item.imgAlt" class="catalog__item-img" />
                <p class="catalog__item-descr">{{ item.descr }}</p>
                <p class="catalog__item-details">{{ item.details }}</p>
              </a>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

let isSmallScreen = ref(false)
let windowWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
  handleWindowSizeChange()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})
const handleWindowSizeChange = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 480) {
    isSmallScreen.value = true
  } else {
    isSmallScreen.value = false
  }
  console.log(isSmallScreen.value)
}

const settings = {
  itemsToShow: 1,
  itemsToScroll: 1,
  snapAlign: 'center'
}

const catalogList = [
  {
    id: 0,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Sweatshirt',
    details: 'Eco materials'
  },
  {
    id: 1,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 't-shirt',
    descr: 'Sweatshirt',
    details: 'Eco materials'
  },
  {
    id: 2,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Sweatshirt',
    details: 'Eco materials'
  },
  {
    id: 3,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 't-shirt',
    descr: 'T-shirt',
    details: 'Eco materials'
  },
  {
    id: 4,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Sweatshirt',
    details: 'Eco materials'
  },
  {
    id: 5,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 't-shirt',
    descr: 'T-shirt',
    details: 'Eco materials'
  },
  {
    id: 6,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 'sweatshirt',
    descr: 'Sweatshirt',
    details: 'Eco materials'
  },
  {
    id: 7,
    href: '#',
    imgSrc: 'src/assets/images/top-sales-section/sweatshirt.webp',
    imgAlt: 't-shirt',
    descr: 'T-shirt',
    details: 'Eco materials'
  }
]
</script>

<style lang="scss" scoped>
.catalog {
  text-align: center;
  margin-bottom: 150px;

  @media screen and (max-width: $bp-medium) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }
  .wrapper {
    max-width: 1140px;
  }

  &__subtitle {
    margin-bottom: 100px;

    @media screen and (max-width: $bp-tablet) {
      margin-bottom: 40px;
    }
  }

  &__list {
    @include flex(flex, row, flex-start, stretch, wrap, 25px 30px);
    padding: 0 20px;

    @media screen and (max-width: $bp-tablet) {
      gap: 20px 15px;
    }
  }

  &__item {
    padding: 45px 50px 40px;
    background-color: var(--color-dark);
    flex: 1 1 340px;
    max-width: calc((100% - 30px * 2) / 3);

    @media screen and (max-width: $bp-medium) {
      max-width: none;
    }

    @media screen and (max-width: $bp-tablet) {
      flex-basis: 150px;
      padding: 0;
      background-color: transparent;
    }

    &-link {
      color: var(--color-light);
      @include flex(flex, column, space-between, center, nowrap, unset);
      height: 100%;

      &:hover {
        .catalog__item-img {
          transform: scale(1.1);
        }
      }
    }

    &-img {
      max-width: 180px;
      margin-bottom: 15px;
      @include transition(transform, 0.3s, ease-in, 0s);
    }

    &-descr {
      font-size: 32px;
      font-weight: 700;

      @media screen and (max-width: $bp-tablet) {
        font-size: 24px;
      }
    }

    &-details {
      color: var(--color-yellow);
      font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>
