<template>
  <v-app dark>
    <div class="d-none d-md-block">
      <navbar />
    </div>
    <div class="d-md-none d-block">
      <mobile-navbar />
    </div>
    <Nuxt />

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
    Footer
  }
};
</script>
