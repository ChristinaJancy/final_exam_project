<template>
  <section id="billing">
    <!-- Table -->
    <!--  -->
    <v-row>
      <v-col cols="12" md="6" class="mx-auto">
        <v-card class="mx-auto text-center" height="130px" max-width="300px">
          <v-card-subtitle class="card-title justify-center text-small"
            >Analysis balance</v-card-subtitle
          >

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
      <v-col cols="12" md="6" class="mx-auto">
        <v-card
          class="mx-auto text-center v-card"
          height="130px"
          max-width="300px"
        >
          <v-card-subtitle class="card-title justify-center text-small"
            >registered pages</v-card-subtitle
          >

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
      <v-col cols="12" lg="4">
        <v-card class="mx-auto billing-card pb-3">
          <v-card-title class="card-title justify-center"
            >Subscription plan</v-card-title
          >

          <!-- subscription plan // free user -->
          <!-- plan type section -->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Current plan</small>
            </div>
            <div class="billing-info-item">
              Cancelled subscription
            </div>
          </div>

          <!--monthly analyses section-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Monthly analyses</small>
            </div>
            <div class="billing-info-item">
              5
            </div>
          </div>

          <!--monthly price section-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Monthly price</small>
            </div>
            <div class="billing-info-item">
              USD 0.00
            </div>
          </div>

          <!--Next billing-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Next billing</small>
            </div>
            <div class="billing-info-item">
              2021/05/27
            </div>
          </div>

          <v-card-actions>
            <v-btn color="red" small text :right="true" :absolute="true">
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- subscription plan end -->

      <!------------------Billing info------------------->
      <v-col cols="12" lg="4">
        <v-card class="mx-auto billing-card">
          <v-card-title class="card-title justify-center"
            >Billing Information</v-card-title
          >
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Current plan</small>
            </div>
            <div class="billing-info-item">
              Cancelled subscription
            </div>
          </div>

          <!--monthly analyses section-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Monthly analyses</small>
            </div>
            <div class="billing-info-item">
              5
            </div>
          </div>

          <!--monthly price section-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Monthly price</small>
            </div>
            <div class="billing-info-item">
              USD 0.00
            </div>
          </div>

          <!--Next billing-->
          <div
            class="col-12 pt-3 billing-info text-lg-left text-md-center text-sm-center"
          >
            <div class="billing-info-item-header">
              <small>Next billing</small>
            </div>
            <div class="billing-info-item">
              2021/05/27
            </div>
          </div>

          <v-card-actions>
            <v-btn color="red" small text :right="true" :absolute="true">
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!------------------payment method------------------->
      <v-col cols="12" lg="4">
        <v-card class="mx-auto billing-card">
          <v-card-title class="card-title justify-center"
            >Payment method</v-card-title
          >
          <template>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    Visa
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{ userProfile.name }} {{ userProfile.nameLast }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-row>
                      <v-col cols="6">
                        <small>CARD NUMBER</small>
                        <br />
                        <small>VISA-1234</small>
                      </v-col>

                      <v-col cols="6">
                        <small>EXPIRATION DATE</small>
                        <br />
                        <small>02/02-23</small>
                      </v-col>
                    </v-row>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/major-credit-cards-glyph/48/Sed-26-512.png"
                    alt="Image placeholder"
                  />
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text>
                  Button
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <v-card-actions>
            <v-btn color="red" small text :right="true" :absolute="true">
              get more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!------------------Invoices------------------->

      <v-col cols="12" xl="12">
        <v-card class="mx-4 px-4">
          <h3 class="mb-0">
            Invoices
          </h3>
          <template>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
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
  },
};
</script>

<style lang="scss" scoped>
.billing-card {
  max-width: 400px;
  height:400px;
  @media (max-width: 1263.9px) {
    max-width: 600px;
  }
}
.card-title {
  text-align: center !important;
  text-transform: uppercase;
  font-weight: bold;
}

/*adds curved underside to the header area */

.bg-gradient-default {
  background: linear-gradient(
    -180deg,
    #112243 -30%,
    #782d76 0%,
    #fe3652 100%
  ) !important;
  border-radius: 0% 0% 100% 100% / 0% 0% 100% 100%;
  width: 110%;
  left: -5%;
  z-index: -1;
}

/*Analysis balance, registered pages, link requests*/
#billing-balance {
  /*balance text - what the user has left*/
  font-size: 1.5em;
}

#billing-used {
  /*Used/sent text*/
  font-size: 0.7em;
}

/*Subscription plan, billing info and payment method */
.billing-title {
  /*Title*/
  font-weight: bold;
  font-size: 20px;
}

.billing-info-item-header small {
  /* header above text*/
  text-transform: uppercase;
}

.billing-info-item {
  /*text*/
  font-weight: 510;
}

/*payment method*/
.payment-card {
  border-bottom: 3px solid #36b37e;
  border-radius: 1.5rem;
}

.payment-avatar {
  background: transparent;
}

.payment-avatar img {
  width: 200%;
}
</style>
