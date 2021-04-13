import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        white:colors.white,
        black:"23272A",
        dark:"#2C2F33",
        light:"#dee4e7",
        bg:colors.white,
        primary: "#2E2E2E",
        secondary: "#dee4e7",
        anchor: "#8c9eff",
        warning: "#fe3652",
      },
      dark: {
        white:colors.white,
        black:"23272A",
        dark:"#2C2F33",
        light:"#dee4e7",
        bg:"#2E2E2E",
        primary: colors.white,
        secondary: "#121212",
        anchor: "#8c9eff",
        warning: "#fe3652",
      },
    },
  },
});

export default vuetify;
