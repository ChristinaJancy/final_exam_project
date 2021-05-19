<template>
  <div>
    <v-app-bar app clipped-left class="black d-lg-none d-md-none d-sm-none">
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            v-bind:src="userProfile.image"
            width="40px"
            lazy-src="../assets/user-placeholder.png"
          >
            <template v-slot:placeholder>
              <v-img src="../assets/user-placeholder.png"></v-img>
            </template>
          </v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- label="Vuetify Theme Dark" -->
      <v-switch v-model="$vuetify.theme.dark" inset color="light"></v-switch>
      <small class="white--text mt-7" style="margin-left:-57px">Theme</small>
    </v-app-bar>
    <v-bottom-navigation
      class="black d-lg-none d-md-none d-sm-none"
      app
      bottom
      fixed
      shift
      :value="value"
      color="primary"
    >
      <v-btn v-for="(navItem, i) in navItems" :key="i" :to="navItem.link">
        <span class="light--text">{{ navItem.name }}</span>
        <v-icon class="light--text">{{ navItem.icon }}</v-icon>
      </v-btn>

      <v-menu offset-y top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" depressed>
            <v-icon class="light--text">mdi-account-circle-outline</v-icon>
            <span class="light--text">Extra</span>
          </v-btn>
        </template>
        <v-list>
          <router-link to="/add-items">
            <v-list-item link>
              <v-list-icon>
                <v-icon>mdi-shield-account-variant-outline</v-icon></v-list-icon
              >
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text pl-2"
                  >Admin</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/billing">
            <v-list-item link>
              <v-list-icon>
                <v-icon>mdi-credit-card-outline</v-icon></v-list-icon
              >
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text pl-2"
                  >Billing and usage</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/login" v-if="!currentUser">
            <v-list-item link>
              <v-list-icon>
                <v-icon>mdi-account-circle-outline</v-icon></v-list-icon
              >
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text pl-2"
                  >Login</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-router v-if="currentUser" @click="logout()">
            <v-list-item link>
              <v-list-icon> <v-icon>mdi-account-off</v-icon></v-list-icon>
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text pl-2"
                  >Logout</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-router>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index.js";
import { mapState } from "vuex";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user is signed in
    store.dispatch("setUser", user);
    //   ;debugger
  } else {
    //NO user is signed in
    store.dispatch("setUser", null);
  }
});
export default {
  data: () => ({
    drawer: null,
    navItems: [
      { name: "Home", link: "/", icon: "mdi-view-dashboard-outline" },
      { name: "Links", link: "/link-opportunities", icon: "mdi-link" },
      { name: "Lists", link: "/lists", icon: "mdi-format-list-bulleted" },
      {
        name: "Settings",
        link: "/settings",
        icon: "mdi-cog-outline",
      },
    ],

    // data: vm => ({
    //   initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false
    // }),
    // beforeDestroy() {
    //   if (!this.$vuetify) return;
    //   this.$vuetify.theme.dark = this.initialDark;
    // }
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    ...mapState(["userProfile"]),
  },
  beforeCreate() {},
};
</script>
