<template>
  <section class="hero">
    <div class="wrapper">
      <div class="hero__inner">
        <h1 class="hero__title">masons <span class="accent">branding</span> wordshop</h1>
        <p class="hero__subtitle">High-quality printing and branding of clothing and accessories</p>
        <button class="hero__btn btn btn_yellow" type="button">Catalog</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: calc(100vh - 150px);
  margin-bottom: 150px;

  @media screen and (max-width: $bp-medium) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }

  @media screen and (max-width: $bp-mobile) {
    margin-bottom: 34px;
  }
  .wrapper {
    max-width: 1440px;
    @include backgroundImg(
      '@/assets/images/hero-section/hero-bg.webp',
      top center,
      cover,
      no-repeat
    );
    position: relative;

    @media screen and (max-width: $bp-mobile) {
      background-image: none;
    }

    &:before {
      content: '';
      @include position(absolute, auto, 0, -6px, 0, 1);
      height: 15px;
      background-color: var(--color-black);
      filter: blur(5px);

      @media screen and (max-width: $bp-mobile) {
        display: none;
      }
    }
  }

  &__inner {
    padding: 296px 0 150px 88px;

    @media screen and (max-width: $bp-tablet) {
      padding: 230px 0 100px 60px;
    }

    @media screen and (max-width: $bp-mobile) {
      padding: 147px 0 0 30px;
    }
  }

  &__title {
    max-width: 542px;
    margin-bottom: 36px;

    @media screen and (max-width: $bp-tablet) {
      margin-bottom: 20px;
    }
  }

  &__subtitle {
    color: var(--color-grey);
    font-size: 24px;
    max-width: 500px;
    margin-bottom: 46px;

    @media screen and (max-width: $bp-mobile) {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 30px;
    }
  }
}
</style>
