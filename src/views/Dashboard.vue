<template>
  <section id="dashboard">
    <v-row>
      <v-col cols="12">
        <div class="profile">
          <small>Welcome back</small>
          <h2>{{ userProfile.name }}</h2>
          <p>{{ userProfile.company }}</p>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card class="mt-4 mx-auto" max-width="400">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="green"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="numbers"
              :value="numberValue"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              Link Opportunities
            </div>
            <div class="subheading font-weight-light grey--text">
              since last analyze
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >last analyzed 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card class="mt-4 mx-auto" max-width="400">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="TabPurple"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light"
              >last registration 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      numbers: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
      numberValue: [200, 675, 410, 390, 310, 460, 250, 240, 200, 675, 410,],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
    };
  },

  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    // profile picture test end ----------
  },
};
</script>

<style lang="scss" scoped>
#dashboard {
  .profile {
    padding: 2rem;
  }
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
}
</style>
