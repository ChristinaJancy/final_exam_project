<template>
  <div id="dashboard">
    <section>
      <v-row>
        <v-col class="col-12">
          <div class="profile">
            <small>Welcome back</small>
            <h2>{{ userProfile.name }}</h2>
            <p>{{ userProfile.title }}</p>
          </div>
        </v-col>
        <v-col class="col-12">
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  components: {},
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
#dashboard {
  section {
    padding: 2rem 0;
  }
  /*.col1 {
    flex: 0 0 30%;
    @media screen and (max-width: 1000px) {
      flex: 0 0 40%;
    }
  }*/
  .profile {
    // background: $white;
    padding: 2rem;
  }
}
</style>
