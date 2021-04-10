import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#112243",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
        warning: "#fe3652",
      },
      dark: {
        primary: "#112243",
        secondary: "#b0bec5",
        anchor: "#8c9eff",
        warning: "#fe3652",
      },
    },
  },
});

export default vuetify;
