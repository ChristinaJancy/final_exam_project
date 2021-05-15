<template>
  <v-app id="app">
    <SiteNav v-if="showNav" class="hidden-xs-only .d-none .d-sm-flex"></SiteNav>
    <MobileNav v-if="showNav" class="d-flex d-sm-none"></MobileNav>
    <v-main class="background">
      <router-view />
    </v-main>
    <Footer app v-if="showNav" class="hidden-xs-only 	.d-none .d-sm-flex"></Footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav.vue";
import MobileNav  from "@/components/MobileNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SiteNav,
    MobileNav,
    Footer,
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
      theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
};
</script>


<style lang="scss">
@media screen and (max-width: 600px) {
  .v-main{
    padding:0 !important;
    
  }
   footer{
     left:0 !important;
   }
}
</style>