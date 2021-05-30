<template>
  <v-container class="linkOpportunities">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      cover
    >
      <v-dialog v-model="dialog" width="700px" class="pa-0 ma-0">
        <v-card class="background pa-2">
          <h1 class="text-center rounded-t-lg">Add target page</h1>
          <v-sheet class="pa-2 rounded-b-lg transparent">
            <v-text-field
              clearable
              label="page name"
              required
              v-model="pageName"
            ></v-text-field>
            <v-text-field
              clearable
              label="URL"
              required
              v-model="pageLink"
            ></v-text-field>
            <v-text-field
              clearable
              label="Page topic"
              required
              v-model="urlTopic"
            ></v-text-field>

            <v-file-input
              label="File input"
              prepend-icon="mdi-camera"
              required
              @change="uploadImage"
            ></v-file-input>

            <v-row>
              <v-col align="left">
                <v-btn
                  rounded
                  text
                  color="TabRed"
                  dark
                  small
                  class="button-red"
                  depressed
                  @click.stop="dialog = false"
                  ><b>Cancel</b></v-btn
                >
              </v-col>
              <v-col align="right">
                <v-btn
                  rounded
                  color="TabRed"
                  class="white--text"
                  depressed
                  small
                  v-on:click="addNewPage()"
                  :disabled="btnDisable"
                  @click.stop="dialog = false"
                  >Add Item</v-btn
                >
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
      </v-dialog>

      <v-container>
        <v-row>
          <v-col col="10" class="mx-auto">
            <div class="pa-2">
              <h1 class="text-center rounded-t-lg">Your link opportunities</h1>
              <v-simple-table
                id="menu-table"
                class="shadow secondary primary--text"
              >
                <thead class="">
                  <tr>
                    <th></th>
                    <th class="text-left primary--text">Target Page(s)</th>
                    <th class="text-left primary--text">URL topic</th>
                    <th class="text-left primary--text">Link opportunities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in pages"
                    :key="item.pageName"
                    class="linkOppItem"
                  >
                    <td id="id_pageImg">
                      <v-img v-bind:src="item.image"></v-img>
                    </td>
                    <td>
                      <router-link
                        class="primary--text"
                        :to="{
                          name: 'link opportunity',
                          params: {
                            pageName: item.pageName,
                            image: item.image,
                            pageLink: item.pageLink,
                            urlTopic: item.urlTopic,
                          },
                        }"
                      >
                        <span id="td_pageLink">{{ item.pageLink }}</span>
                      </router-link>
                    </td>
                    <td>
                      <span id="page_urlTopic">{{ item.urlTopic }}</span>
                    </td>
                    <td>
                      <router-link
                        class="primary--text"
                        :to="{
                          name: 'link opportunity',
                          params: {
                            pageName: item.pageName,
                            image: item.image,
                            pageLink: item.pageLink,
                            urlTopic: item.urlTopic,
                          },
                        }"
                      >
                        {{ Math.ceil(Math.random() * 200) }}
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </div>
            <v-row>
              <v-col cols="12" align="center" class="mt-2">
                <v-btn
                  rounded
                  color="TabRed"
                  dark
                  class="button-red"
                  @click.stop="dialog = true"
                >
                  Add Target Page
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script scoped>
/*eslint-disable*/
// import { dbMenuAdd } from '../../firebase.js'
import { pages } from "../firebase.js";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPages");
  },
  methods: {
    addNewPage() {
      //debugger;
      this.snackbar = true;
      dbPageAdd.add({
        pageName: this.pageName,
        urlTopic: this.urlTopic,
        pageLink: this.pageLink,
        image: this.image, //Add new property
      });
    },
  },
  computed: {
    pages() {
      return this.$store.getters.getPages;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @include infobox_mixin(
    5px,
    var(--v-secondary-base),
    10px,
    5px,
    var(--v-primary-base)
  );
  font-size: 21px;
  font-weight: 600;
  background-color: transparent !important;
  box-shadow: 0px 3px 1px -6px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
  text-transform: uppercase;
}
.button-red {
  text-transform: capitalize;
}
tr th {
  font-weight: bold;
}
#td_name {
  font-weight: bold;
}

.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
#id_pageImg {
  max-width: 50px;
  max-height: auto;
  padding: 5px;
}
.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
</style>
