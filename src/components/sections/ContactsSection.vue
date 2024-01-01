<template>
  <section class="contacts" id="contacts">
    <div class="wrapper">
      <div class="contacts__head">
        <h2 class="contacts__title">Contact <span class="accent">us</span></h2>
        <p class="contacts__subtitle subtitle">It's fast and convenient</p>
      </div>
      <div class="contacts__form-map">
        <form class="contacts-form" name="contacts-form" autocomplete="off">
          <div class="contacts-form__block input-block">
            <label class="contacts-form__label hidden" for="user-name-contacts">Your name</label>
            <input
              class="contacts-form__input"
              type="text"
              name="user-name-contacts"
              id="user-name-contacts"
              placeholder="Your name"
              required
            />
          </div>
          <div class="contacts-form__block input-block">
            <label class="contacts-form__label hidden" for="user-email-contacts">Email</label>
            <input
              class="contacts-form__input"
              type="email"
              name="user-email-contacts"
              id="user-email-contacts"
              placeholder="Email"
              required
            />
          </div>
          <div class="contacts-form__block input-block">
            <label class="contacts-form__label hidden" for="user-tel-contacts">Phone number</label>
            <input
              class="contacts-form__input"
              type="tel"
              name="user-tel-contacts"
              id="user-tel-contacts"
              placeholder="Phone number"
              required
            />
          </div>
          <div class="contacts-form__block input-block">
            <label class="contacts-form__label hidden" for="user-notes-contacts">Notes</label>
            <textarea
              class="contacts-form__input"
              type="text"
              name="user-notes-contacts"
              id="user-notes-contacts"
              placeholder="Notes"
              rows="1"
            ></textarea>
          </div>
          <button class="contacts-form__btn btn btn_yellow" type="submit">Apply</button>
          <ul class="contacts-form__soc-list">
            <li class="contacts-form__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-telegram" /></a>
            </li>
            <li class="contacts-form__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-viber" /></a>
            </li>
          </ul>
        </form>
        <iframe
          class="contacts__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.2646779777!2d4.739152487554811!3d52.354760727108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2z0JDQvNGB0YLQtdGA0LTQsNC8LCDQndGW0LTQtdGA0LvQsNC90LTQuA!5e0!3m2!1suk!2sua!4v1702970694034!5m2!1suk!2sua"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ul class="contacts__list">
        <li class="contacts__item contacts__schedule">
          <SvgIcon class="contacts__item-icon" name="icons" setSymbol="icon-schedule" />
          <h4 class="contacts__item-title"></h4>
          <div class="contacts__item-info">
            <p>Monday - Friday</p>
            <p>9:00 - 18:00</p>
          </div>
        </li>
        <li class="contacts__item contacts__address">
          <SvgIcon class="contacts__item-icon" name="icons" setSymbol="icon-map" />
          <h4 class="contacts__item-title"></h4>
          <div class="contacts__item-info">
            <a href="https://maps.app.goo.gl/jQP8BHgX9nbPvSww5" target="_blank"
              ><p>Oosterdok 2, 1011 VX</p>
              <p>Amsterdam</p></a
            >
          </div>
        </li>
        <li class="contacts__item contacts__tel-email">
          <SvgIcon class="contacts__item-icon" name="icons" setSymbol="icon-tel" />
          <h4 class="contacts__item-title"></h4>
          <div class="contacts__item-info">
            <a href="tel:+38(099)-999-99-99">+38(099)-999-99-99</a>
            <a href="mailto:gmailexamp@gmail.com">gmailexamp@gmail.com</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  margin-bottom: 150px;

  @media screen and (max-width: $bp-medium) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }

  .wrapper {
    max-width: 1100px;
  }

  &__head {
    text-align: center;
    margin-bottom: 100px;

    @media screen and (max-width: $bp-medium) {
      margin-bottom: 80px;
    }

    @media screen and (max-width: $bp-tablet) {
      margin-bottom: 40px;
    }
  }

  &__form-map {
    @include flex(flex, row, space-between, flex-start, nowrap, 110px);
    margin-bottom: 150px;

    @media screen and (max-width: $bp-large) {
      padding: 0 20px;
    }

    @media screen and (max-width: $bp-medium) {
      padding: 0;
      flex-direction: column;
      align-items: center;
      gap: 60px;
      margin-bottom: 80px;
    }

    @media screen and (max-width: $bp-tablet) {
      margin-bottom: 40px;
    }
  }

  &-form {
    width: 454px;

    @media screen and (max-width: $bp-medium) {
      text-align: center;
    }

    @media screen and (max-width: $bp-tablet) {
      width: 430px;
    }

    @media screen and (max-width: $bp-mobile) {
      width: calc(100% - 20px);
    }

    &__block {
      margin-bottom: 30px;

      @media screen and (max-width: $bp-tablet) {
        margin-bottom: 20px;
      }
    }

    &__btn {
      display: block;
      margin: 50px 0 35px;

      @media screen and (max-width: $bp-medium) {
        margin: 50px auto 35px;
      }

      @media screen and (max-width: $bp-mobile) {
        margin: 30px auto;
      }
    }

    &__soc-list {
      @include flex(inline-flex, row, flex-start, flex-start, nowrap, 25px);
    }

    &__soc-item {
      a {
        width: 40px;
        height: 40px;
        background: var(--color-yellow);
        border-radius: 5px;
        @include flex(flex, row, center, center, nowrap, unset);
        @include transition(transform, 0.3s, ease-in, 0s);

        &:hover {
          transform: scale(1.1);
        }
      }

      svg {
        width: 60%;
        height: 60%;
      }
    }
  }

  &__map {
    width: 535px;
    height: 500px;

    @media screen and (max-width: $bp-medium) {
      width: 100%;
    }

    @media screen and (max-width: $bp-tablet) {
      height: 300px;
    }
  }

  &__list {
    @include flex(flex, row, center, flex-start, wrap, 60px);
    max-width: 970px;
    margin: 0 auto;

    @media screen and (max-width: $bp-medium) {
      gap: 30px;
    }

    @media screen and (max-width: $bp-tablet) {
      padding: 0 20px;
      justify-content: column;
      gap: 15px;
    }
  }

  &__item {
    flex-basis: calc((100% - 60px * 2) / 3);
    background-color: var(--color-dark);
    border-radius: 20px 0 20px 0;
    text-align: center;
    padding: 58px 0 76px;

    @media screen and (max-width: $bp-medium) {
      flex-basis: calc((100% - 30px * 1) / 3);
    }

    @media screen and (max-width: $bp-tablet) {
      flex-basis: 80%;
      padding: 20px 0 20px;
    }

    &-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 47px;

      @media screen and (max-width: $bp-tablet) {
        margin-bottom: 20px;
      }
    }

    &-info {
      font-size: 16px;

      a {
        color: var(--color-light);
        text-decoration: underline;
        display: block;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
