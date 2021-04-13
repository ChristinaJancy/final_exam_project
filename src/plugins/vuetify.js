import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        background:"#f8f9fe",
        primary: "#23272A",
        secondary: "#fff",
        anchor: "#8c9eff",
        warning: "#fe3652",
        dark:"#2C2F33",
        light:"#dee4e7",
        white:"#fff",
        almostBlack:"#23272A",
        black:"#23272A",
        TabBlue: "#112243",
        TabRed: "#FE3652",
        TabPurple: "#782D76",
      },
      dark: {
        background:"#2C2F33",
        primary: "#fff",
        secondary: "#23272A",
        anchor: "#8c9eff",
        warning: "#FE3652",
        dark:"#2C2F33",
        light:"#dee4e7",
        white:"#fff",
        almostBlack:"#23272A",
        black:"#23272A",
        TabBlue: "#112243",
        TabRed: "#FE3652",
        TabPurple: "#782D76",
      },
    },
  },
});

export default vuetify;
