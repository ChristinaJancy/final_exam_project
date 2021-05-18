<template>
  <section id="billing">
    <v-row>
      <v-col cols="12" lg="6" xs="12" class="mx-auto">
        <v-card
          class="mx-auto text-center billing-top-cards"
          id="analysis-balance"
        >
          <v-card-title class="justify-center">Analysis balance</v-card-title>
          <v-card-text class="text--primary">
            <div class="text-h5">
              19 <span class="text-subtitle-2">156 used</span>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="red" small text :right="true" :absolute="true">
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" xs="12" class="mx-auto">
        <v-card class="mx-auto text-center billing-top-cards">
          <v-card-title class="justify-center">registered pages</v-card-title>

          <v-card-text class="text--primary">
            <div class="text-h5">
              4
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--End of top row -->
      <p>&nbsp;</p>

      <!-- row start for subscription plan, billing info and payment method -->

      <!------------------Subscription plan------------------->
      <v-col cols="12" lg="4" md="6">
        <v-card class="billing-card mx-4 px-2">
          <v-card-title class="card-title justify-center"
            >Subscription plan</v-card-title
          >
          <div class="text-center">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Current plan</v-list-item-title>
                <v-list-item-subtitle>Free user</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Monthly analysis</v-list-item-title>
                <v-list-item-subtitle>10</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Monthly price</v-list-item-title>
                <v-list-item-subtitle>USD 0.00</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Next billing</v-list-item-title>
                <v-list-item-subtitle>May. 27th 2021</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
          <v-card-actions>
            <v-btn
              color="red"
              small
              text
              :right="true"
              :bottom="true"
              :absolute="true"
            >
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- subscription plan end -->

      <!------------------Billing info------------------->
      <v-col cols="12" lg="4" md="6">
        <v-card class="billing-card mx-4 px-2">
          <v-card-title class="card-title justify-center">
            Billing Information</v-card-title
          >
          <div class="text-center">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>billing email</v-list-item-title>
                <v-list-item-subtitle>
                  {{ currentUser.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Company</v-list-item-title>
                <v-list-item-subtitle>{{
                  userProfile.company
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle
                  >Somewhere street 2, <br />6700 Esbjerg, Denmark.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>

          <v-card-actions>
            <v-btn
              color="red"
              small
              text
              :right="true"
              :bottom="true"
              :absolute="true"
            >
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!------------------payment method------------------->
      <v-col cols="12" lg="4" md="12">
        <v-card class="billing-card mx-4 px-4">
          <v-card-title class="card-title justify-center">
            Payment method</v-card-title
          >
          <v-card class="mx-auto border-bottom-green" max-width="344">
            <v-list-item three-line>
              <v-list-item-content id="payment-card-info">
                <v-list-item-title class="mt-5">card number</v-list-item-title>
                <v-list-item-subtitle>visa - 5442</v-list-item-subtitle>
                <v-list-item-title>expiration date</v-list-item-title>
                <v-list-item-subtitle>02/02-2023</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar size="80" class="mt-2">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/major-credit-cards-glyph/48/Sed-26-512.png"
                  alt="Visa logo"
                />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                color="green"
                small
                text
                :right="true"
                :bottom="true"
                :absolute="true"
              >
                active
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card-actions>
            <v-btn
              color="red"
              small
              text
              :right="true"
              :bottom="true"
              :absolute="true"
            >
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!------------------Invoices------------------->

      <v-col cols="12" xl="12">
        <v-card class="mx-4 px-4 secondary">
          <h3 class="mb-0">
            Invoices
          </h3>
          <template>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1 secondary"
            ></v-data-table>
          </template>
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
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {
    ...mapState(["userProfile"]),
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
#payment-card-info {
  .v-list-item__title {
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: small;
    line-height: 130%;
  }
  .v-list-item__subtitle {
    line-height: 130%;
    padding-bottom: 5px;
  }
  .overline {
    font-size: x-small !important;
  }
}
.border-bottom-green {
  border-bottom: 3px solid #36b37e;
  border-radius: 1.5rem;
}
.billing-top-cards {
  height: 130px;
  max-width: 300px;
    background-color: var(--v-secondary-base) !important;
  .v-card__title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: small;
    line-height: 130%;
  }
}

#analysis-balance {
  @media screen and (max-width: 599.9px) {
    margin-top: 80px;
  }
}
.billing-card {
  height: 350px;
  background-color: var(--v-secondary-base) !important;

  .card-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
  .v-list-item__title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: small;
    font-family: "Open Sans", sans-serif;
    line-height: 130%;
  }
  .v-list-item__subtitle {
    line-height: 130%;
    padding-bottom: 5px;
  }
}

/*adds curved underside to the header area */

// .bg-gradient-tabtimize {
//   background: linear-gradient(
//     -180deg,
//     #112243 -30%,
//     #782d76 0%,
//     #fe3652 100%
//   ) !important;
//   border-radius: 0% 0% 100% 100% / 0% 0% 100% 100%;
//   width: 110%;
//   left: -5%;
//   z-index: -1;
// }
</style>
