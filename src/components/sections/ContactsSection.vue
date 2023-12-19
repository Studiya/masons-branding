<template>
  <section class="contacts">
    <div class="wrapper">
      <div class="contacts__inner">
        <h2 class="contacts__title"></h2>
        <p class="contacts__subtitle subtitle"></p>
      </div>
      <div class="contacts-form__&-map">
        <form class="contacts-form" name="contacts-form" autocomplete="off">
          <div class="contacts-form__block">
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
          <div class="contacts-form__block">
            <label class="contacts-form__label hidden" for="user-email-contacts">Email</label>
            <input
              class="contacts-form__input"
              type="email"
              name="user-email-contacts"
              id="user-email-contacts"
              placeholder="Ім'я"
              required
            />
          </div>
          <div class="contacts-form__block">
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
          <div class="contacts-form__block">
            <label class="contacts-form__label hidden" for="user-notes-contacts">Notes</label>
            <textarea
              class="contacts-form__input"
              type="text"
              name="user-notes-contacts"
              id="user-notes-contacts"
              placeholder="Notes"
            >
            </textarea>
          </div>
          <button class="contacts-form__btn btn btn_yellow" type="submit">Apply</button>
          <ul class="contacts-form__soc-list">
            <li class="contacts-form__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-search" /></a>
            </li>
            <li class="contacts-form__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-search" /></a>
            </li>
          </ul>
        </form>
        <iframe
          class="contacts__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.2646779777!2d4.739152487554811!3d52.354760727108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2z0JDQvNGB0YLQtdGA0LTQsNC8LCDQndGW0LTQtdGA0LvQsNC90LTQuA!5e0!3m2!1suk!2sua!4v1702970694034!5m2!1suk!2sua"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
