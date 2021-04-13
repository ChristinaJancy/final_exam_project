<template>
  <div>
    <v-app-bar app clipped-left class="black d-lg-none d-md-none d-sm-none">
      <v-toolbar-title>
        <router-link to="/">
          <v-img width="40" src="../assets/favicon.png"></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

<!-- label="Vuetify Theme Dark" -->
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        color="light"
      ></v-switch>
      <small class="white--text mt-7" style="margin-left:-57px">Theme</small>
    </v-app-bar>
    <v-bottom-navigation
      class="black d-lg-none d-md-none d-sm-none"
      app
      bottom
      fixed
      shift
    >
      <v-btn v-for="(navItem, i) in navItems" :key="i" :to="navItem.link">
        <span class="light--text">{{ navItem.name }}</span>
        <v-icon class="light--text">{{ navItem.icon }}</v-icon>
      </v-btn>
      <v-menu offset-y top >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" depressed>
            <v-icon class="light--text">mdi-account-circle-outline</v-icon>
              <span  class="light--text">Settings</span>
          </v-btn>
        </template>
        <v-list>
          <router-link to="/settings">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="light--text"
                  >Details</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/login" v-if="currentUser">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text"
                  >Login</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-router v-if="!currentUser" @click="logout()">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="iconcolor--text"
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
      { name: "Home", link: "/", icon: "mdi-google-fit" },
      { name: "Settings", link: "/settings", icon: "mdi-basket" },
      { name: "Domains", link: "/domains", icon: "mdi-tshirt-crew-outline" },
      {
        name: "Links",
        link: "/link-opportunities",
        icon: "mdi-chat-alert-outline",
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
  },
  beforeCreate() {},
};
</script>
