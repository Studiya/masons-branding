<template>
  <section class="catalog">
    <div class="wrapper">
      <div class="catalog__inner">
        <h2 class="catalog__title">Cata<span class="accent">log</span></h2>
        <p class="catalog__subtitle subtitle">Choose whatever you like</p>
        <ul class="catalog__list">
          <li class="catalog__item" v-for="item in catalogList" :key="item.id">
            <a class="catalog__item-link" :href="item.href" target="_blank">
              <img :src="item.imgSrc" :alt="item.imgAlt" class="catalog__item-img" />
              <p class="catalog__item-descr">{{ item.descr }}</p>
              <p class="catalog__item-details">{{ item.details }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
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
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
    imgAlt: 't-shirt',
    descr: 'T-shirt',
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
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
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
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
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
    imgSrc: 'src/assets/images/top-sales-section/t-shirt.webp',
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
  .wrapper {
    max-width: 1100px;
  }

  &__subtitle {
    margin-bottom: 100px;
  }

  &__list {
    @include flex(flex, row, flex-start, flex-start, wrap, 25px 30px);
  }

  &__item {
    flex-basis: calc((100% - 30px * 2) / 3);
    padding: 45px 50px 40px;
    background-color: var(--color-dark);

    &-link {
      color: var(--color-light);

      &:hover {
        .catalog__item-img {
          transform: scale(1.1);
        }
      }
    }

    &-img {
      max-height: 225px;
      margin-bottom: 33px;
      @include transition(transform, 0.3s, ease-in, 0);
    }

    &-descr {
      font-size: 32px;
      font-weight: 700;
    }

    &-details {
      color: var(--color-yellow);
      font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>
