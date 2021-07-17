<template>
  <v-app>
    <div class="d-none d-md-block"><navbar /></div>
    <div class="d-block d-md-none">
      <mobile-navbar />
    </div>
    <v-main>
      <Nuxt />
    </v-main>
    <v-btn fab dark fixed bottom right color="success" small>
      <v-icon>mdi-chat</v-icon>
    </v-btn>
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
