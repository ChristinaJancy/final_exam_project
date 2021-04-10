<template>
  <v-app id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <v-main>
      <router-view />
    </v-main>
    <Footer app v-if="showNav"></Footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SiteNav,
    Footer,
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>
