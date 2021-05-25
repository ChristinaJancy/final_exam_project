import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        background: "#f8f9fe",
        backgroundNav: "#f8f9fe",
        primary: "#23272A",
        secondary: "#fff",
        lightBlue: "#8c9eff",
        warning: "#FE3652",
        dark: "#2C2F33",
        light: "#dee4e7",
        white: "#fff",
        almostBlack: "#23272A",
        black: "#23272A",
        TabBlue: "#112243",
        TabRed: "#FE3652",
        TabPurple: "#782D76",
        gradient1: "#112243",
        gradient2: "#782D76",
        gradient3: "#FE3652",
        pink:"#EC407A",
        deepPurple: "#7F20DE",
        lightGreen: "#1565C0"
      },
      dark: {
        background: "#0d1117",
        backgroundNav: "#161b22",
        primary: "#fff",
        secondary: "#2C2F33",
        lightBlue: "#8c9eff",
        warning: "#FE3652",
        dark: "#2C2F33",
        light: "#dee4e7",
        white: "#fff",
        almostBlack: "#23272A",
        black: "#23272A",
        TabBlue: "#112243",
        TabRed: "#FE3652",
        TabPurple: "#782D76",
        gradient1: "#23272a",
        gradient2: "#0d1117",
        gradient3: "#161b22",
        pink:"#EC407A",
        deepPurple: "#7F20DE",
        lightGreen: "#1565C0"
      },
    },
  },
});

export default vuetify;
