<template>
  <v-container id="dashboard">
    <section class="pb-6">
      <v-row class="pa-0">
        <!-- welcome -->
        <v-col cols="12" lg="12">
          <div class="ml-9">
            <small>Welcome back</small>
            <h2>{{ userProfile.name }}</h2>
            <p>{{ userProfile.company }}</p>
          </div>
        </v-col>

        <!-- card 1 -->
        <v-col cols="12" lg="6" sm="12">
          <v-card class="mt-4 mx-auto" max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="pink"
              elevation="12"
              max-width="calc(100% - 32px)"
            >

              <v-sparkline
                :labels="linkLabels"
                :value="linkValue"
                auto-draw
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              
              <div class="title font-weight-light mb-2 pink--text">
                Link opportunities
              </div>
              <div class="subheading font-weight-light grey--text">
                Link opportunities for the past 7 days
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>
                mdi-clock
              </v-icon>
              <span class="caption grey--text font-weight-light"
                >Updated {{ Math.ceil(Math.random() * 60) }} minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <!-- card 2 -->
        <v-col lg="6" sm="12" class="mx-auto">
          <v-card class="mt-4 mx-auto"  max-width="800">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="deepPurple"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="analysisLabels"
                :value="analysisValue"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2 deepPurple--text">
                Analysis Balance
              </div>
              <div class="subheading font-weight-light grey--text">
                Analysis Balance spent this month
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>
                mdi-clock
              </v-icon>
              <span class="caption grey--text font-weight-light"
                >Updated {{ Math.ceil(Math.random() * 60) }} minutes ago</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      linkLabels: ["200", "675", "410", "390", "310", "460", "250"],
      linkValue: [200, 675, 410, 390, 310, 460, 250],
      analysisLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      analysisValue: [2, 5, 0, 10, 5, 2, 7],
    };
  },

  computed: {
    ...mapState(["userProfile"]),
  },
};
</script>

<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
