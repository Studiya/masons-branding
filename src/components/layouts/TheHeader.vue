<template>
  <header class="header">
    <div class="wrapper">
      <form class="header__search" name="search-form">
        <label for="site-search">Search the site:</label>
        <input type="search" id="site-search" />
      </form>
      <a class="header__logo" href="#"><img src="@/assets/images/logo.png" alt="logo" /></a>
      <ul class="header__icons">
        <li>
          <a href=""><SvgIcon name="icons" setSymbol="icon-cart" /></a>
        </li>
        <li>
          <a href=""><SvgIcon name="icons" setSymbol="icon-like" /></a>
        </li>
      </ul>
      <nav>
        <ul>
          <li><a href="">Services</a></li>
          <li><a href="">Examples</a></li>
          <li><a href="">Special Offers</a></li>
          <li><a href="">Top Sales</a></li>
          <li><a href="">Catalog</a></li>
          <li><a href="">Feedback</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__logo {
    display: inline-block;
    width: 184px;
  }
}
</style>
