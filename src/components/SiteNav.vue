<template>
  <div>
    <v-app-bar flat color="transparent">
      <!-- <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon> -->
      <!-- <router-link to="/">
        <v-toolbar-title>Tabtimize</v-toolbar-title>
      </router-link> -->
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        color="light"
        class="pt-8"
      ></v-switch>
      <div class="text-center">
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" icon dark v-bind="attrs" v-on="on">
              <v-img
                v-bind:src="userProfile.image"
                max-width="40px"
                contain
                lazy-src="../assets/user-placeholder.png"
              >
                <template v-slot:placeholder>
                  <v-img src="../assets/user-placeholder.png"></v-img>
                </template>
              </v-img>
            </v-btn>
          </template>
          <v-list>
            <a>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  Domains
                </v-list-item-title>
              </v-list-item></a
            >
            <a @click="logout()">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-off</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  logout
                </v-list-item-title>
              </v-list-item></a
            >
          </v-list>
        </v-menu>
      </div>
      <!-- <v-btn depressed class="transparent">
        <a @click="logout()">logout</a>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      height="100%"
      absolute
      app
      class="sitenav"
      style="z-index:10;"
    >

      <div align="end" class="px-2">
        <!-- <v-app-bar-nav-icon depressed class="navIcon transparent" @click.stop="mini = !mini">
        </v-app-bar-nav-icon>      -->
        <v-btn icon @click.stop="mini = !mini">
          <v-icon v-if="!mini" color="primary">
            mdi-chevron-left
          </v-icon>
          <v-icon v-else color="primary">mdi-chevron-right </v-icon>
        </v-btn>
      </div>

      <v-list-item class="px-2">
        <v-list-item-avatar tile>
          <v-img
            v-bind:src="userProfile.image"
            width="40px"
            contain
            lazy-src="../assets/user-placeholder.png"
          >
            <template v-slot:placeholder>
              <v-img src="../assets/user-placeholder.png"></v-img>
            </template>
          </v-img>
        </v-list-item-avatar>

        <v-list-item-title>
          <b>{{ userProfile.company }} </b></v-list-item-title
        >

        <!-- <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="link-opportunities">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-link</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Link Opportunities</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="account">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="billing">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-credit-card-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Billing and usage</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="lists">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Lists</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="add-target-page">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Target Pages</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: true,
      group: null,
      mini: false,
      menu: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapState(["userProfile"]),
  },
};
</script>

<style lang="scss" scoped>
.sitenav {
  background-color: var(--v-backgroundNav-base) !important;
}
#gradient-banner {
  background: linear-gradient(
    -180deg,
    #112243 -30%,
    #782d76 0%,
    #fe3652 100%
  ) !important;
  height: 120px;
  width: 100%;
  position: absolute;
  z-index: 0;
  border-radius: 0 0 25% 25%;
}
</style>
