<template>
  <section class="main-video" id="video">
    <div class="wrapper">
      <div class="main-video__head">
        <h3 class="main-video__title">Still have any <span class="accent">doubts</span>?</h3>
        <p class="main-video__subtitle subtitle">
          Then watch this video and you will understand everything yourself
        </p>
      </div>
      <div class="main-video__video">
        <iframe
          src="https://www.youtube.com/embed/CsUqnlsswcg?si=59ZuTcSymgHJ8MUh"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-video {
  margin-bottom: 100px;

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }
  .wrapper {
    max-width: 915px;

    @media screen and (max-width: $bp-medium) {
      padding: 0 20px;
    }

    @media screen and (max-width: $bp-mobile) {
      padding: 0 10px;
    }
  }

  &__head {
    margin-left: -90px;

    @media screen and (max-width: $bp-large) {
      margin-left: 0;
    }
  }

  &__subtitle {
    max-width: 758px;
    margin-bottom: 40px;
  }

  &__video {
    width: 100%;
    text-align: center;

    iframe {
      width: 915px;
      height: calc(915px / 1.78);

      @media screen and (max-width: $bp-medium) {
        width: 720px;
        height: calc(720px / 1.78);
        margin: 0 auto;
      }

      @media screen and (max-width: $bp-tablet) {
        width: 440px;
        height: calc(440px / 1.78);
        margin: 0 auto;
      }

      @media screen and (max-width: $bp-mobile) {
        width: 300px;
        height: calc(300px / 1.78);
        margin: 0 auto;
      }
    }
  }
}
</style>
