<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container>
      <b-navbar-brand :href="logo.link" :title="logo.alt">
        <b-img :src="logo.img" fluid :alt="logo.alt"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-dropdown text="English" variant="outline-secondary" class="m-2 rounded-pill" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
// import logo from "../assets/img/logo.png";
export default {
  name: "Navbar",
  props: {
    logo: {
      type: Object
    }
  }
};
</script>
