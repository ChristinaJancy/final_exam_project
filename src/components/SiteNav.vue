<template>
  <div>
    <v-app-bar flat class="transparent">
      <!-- <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon> -->
      <!-- <router-link to="/">
        <v-toolbar-title>Tabtimize</v-toolbar-title>
      </router-link> -->
      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" icon dark v-bind="attrs" v-on="on">
              <v-img src="../assets/favicon.png" max-width="40px"></v-img>
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
      absolute
      app
      style="z-index:10;"
    >
      <div align="end" class="px-2">
        <!-- <v-app-bar-nav-icon depressed class="navIcon transparent" @click.stop="mini = !mini">
        </v-app-bar-nav-icon>      -->
        <v-btn icon @click.stop="mini = !mini">
          <v-icon v-if="!mini" color="grey darken-3">
            mdi-chevron-left
          </v-icon>
          <v-icon v-else color="grey darken-3">mdi-chevron-right </v-icon>
        </v-btn>
      </div>
      <v-list-item class="px-2">
        <v-list-item-avatar  tile>
          <v-img src="../assets/favicon.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>www.Tabtimize.com</v-list-item-title>

        <!-- <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>


        <router-link to="Settings">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item>
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  background: $white;
  box-shadow: 0 0 5px 0 rgba($dark, 0.5);
  z-index: 10;

  h3 {
    display: inline-block;
  }

  ul {
    float: right;
    text-align: right;

    li {
      margin-top: 4px;
      margin-left: 6px;

      a {
        display: block;
        padding: 5px;
      }
    }
  }

  @media screen and (max-width: 742px) {
    h3 {
      display: block;
      text-align: center;
    }

    ul {
      float: none;
      text-align: center;
    }
  }
}
</style>
