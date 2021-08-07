<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Sidebar />
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "../layouts/private/Navbar.vue";
import Sidebar from "../layouts/private/Sidebar.vue";
import Footer from "../layouts/private/Footer.vue";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>
