<template>
  <v-app dark>
    <div class="d-none d-md-block">
      <navbar />
    </div>
    <div class="d-md-none d-block">
      <mobile-navbar />
    </div>
    <div class="main-root">
      <Nuxt />
    </div>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./public/Navbar.vue";
import Footer from "./public/Footer.vue";
import MobileNavbar from "./public/MobileNavbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    MobileNavbar,
    Footer,
  },
};
</script>

<style>
.main-root {
  margin-top: 64px !important;
}
.h-0 {
  width: 100%;
  color: #515fbc;
  font-size: 26px;
}
.h-1 {
  color: #1f2430;
  font-size: 48px;
  margin-bottom: 40px;
}
.h-2 {
  color: #1f2430;
  font-size: 40px;
  margin-bottom: 40px;
}
.h-3 {
  color: #1f2430;
  font-size: 30px;
  margin-bottom: 40px;
}
.b {
  font-weight: 700 !important;
  color: black;
}
.b1 {
  font-weight: 500 !important;
  color: #032d60 !important;
}
.black {
  color: black;
}
.lgy {
  background-color: lightgrey !important;
}
.ndec {
  text-decoration: none;
}
</style>
