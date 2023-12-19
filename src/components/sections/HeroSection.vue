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
  .wrapper {
    max-width: 1440px;
    @include backgroundImg(
      '@/assets/images/hero-section/hero-bg.webp',
      top center,
      cover,
      no-repeat
    );
    position: relative;

    &:before {
      content: '';
      @include position(absolute, auto, 0, -6px, 0, 1);
      height: 15px;
      background-color: var(--color-black);
      filter: blur(5px);
    }
  }

  &__inner {
    padding: 296px 0 150px 88px;
  }

  &__title {
    max-width: 542px;
    margin-bottom: 36px;
  }

  &__subtitle {
    color: var(--color-grey);
    font-size: 24px;
    max-width: 500px;
    margin-bottom: 46px;
  }
}
</style>
