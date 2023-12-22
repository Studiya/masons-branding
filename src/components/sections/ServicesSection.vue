<template>
  <section class="services" id="services">
    <div class="wrapper">
      <div class="services__inner">
        <h2 class="services__title">Our <span class="accent">Services</span></h2>
        <p class="services__subtitle subtitle">All for your enjoy</p>
        <ul class="services__list">
          <li class="services__item" v-for="item in servicesList" :key="item.id">
            <h3 class="services__item-title">{{ item.title }}</h3>
            <p class="services__item-subtitle">{{ item.subtitle }}</p>
            <button class="services__item-btn btn btn_grey" type="button">read more</button>
            <img class="services__item-img" :src="item.imgSrc" :alt="item.imgAlt" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicesList = [
  {
    id: 0,
    title: 'Flex/flock film printing',
    subtitle: 'High-quality printing for small runs',
    imgSrc: 'src/assets/images/services-section/service-1.webp',
    imgAlt: 'print machine'
  },
  {
    id: 1,
    title: 'Heat resistance of images',
    subtitle: 'Can withstand automatic washing',
    imgSrc: 'src/assets/images/services-section/service-2.webp',
    imgAlt: 'fever'
  },
  {
    id: 2,
    title: 'Flexible scaling',
    subtitle: 'We carry out orders of any size',
    imgSrc: 'src/assets/images/services-section/service-3.webp',
    imgAlt: 'printer'
  },
  {
    id: 3,
    title: 'Heat resistance of images',
    subtitle: 'Can withstand automatic washing',
    imgSrc: 'src/assets/images/services-section/service-2.webp',
    imgAlt: 'fever'
  },
  {
    id: 4,
    title: 'Flexible scaling',
    subtitle: 'We carry out orders of any size',
    imgSrc: 'src/assets/images/services-section/service-3.webp',
    imgAlt: 'printer'
  }
]
</script>

<style lang="scss" scoped>
.services {
  margin-bottom: 150px;
  .wrapper {
    max-width: 1090px;
  }

  &__inner {
    text-align: center;
  }

  &__subtitle {
    margin-bottom: 83px;
  }

  &__list {
    @include flex(flex, row, center, flex-start, wrap, 60px 42px);
  }

  &__item {
    flex-basis: calc((100% - 42px * 2) / 3);
    position: relative;
    padding: 33px 60px 0;

    &:after {
      content: '';
      display: block;
      @include position(absolute, 0, 0, 0, 0, -1);
      @include backgroundImg(
        '@/assets/images/services-section/item-bg.webp',
        bottom left,
        cover,
        no-repeat
      );
    }

    &-title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
      min-height: 60px;
    }

    &-subtitle {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 20px;
      min-height: 40px;
    }

    &-btn {
      padding: 15px 26px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    &-img {
      width: 133px;
      height: 133px;
    }
  }
}
</style>
