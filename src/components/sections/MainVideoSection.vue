<template>
  <section class="main-video">
    <div class="wrapper">
      <div class="main-video__head">
        <h3 class="main-video__title">Still have any <span class="accent">doubts</span>?</h3>
        <p class="main-video__subtitle subtitle">
          Then watch this video and you will understand everything yourself
        </p>
      </div>
      <iframe
        class="main-video__video"
        src="https://www.youtube.com/embed/CsUqnlsswcg?si=59ZuTcSymgHJ8MUh"
        frameborder="0"
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-video {
  margin-bottom: 100px;
  .wrapper {
    max-width: 915px;
  }

  &__head {
    margin-left: -90px;
  }

  &__subtitle {
    max-width: 758px;
    margin-bottom: 40px;
  }

  &__video {
    width: 915px;
    height: calc(915px / 1.78);
  }
}
</style>
