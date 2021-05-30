<template>
  <v-img
    style="margin-top:-150px; z-index:1;"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    src="https://firebasestorage.googleapis.com/v0/b/tabtimize.appspot.com/o/assets%2Fbg-why.svg?alt=media&token=72a53484-69b1-4873-a7ec-db5c005d8373"
    cover
  >
    <v-container class="addNewItems" style="padding-top:150px;">
      <div :class="{ settings: !showAllPages }" class="col1">
        <v-snackbar top v-model="snackbar" :multi-line="multiLine">
          {{ itemAdded }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
              >Close
            </v-btn>
          </template>
        </v-snackbar>

        <div v-if="showAllPages">
          <v-container>
            <h1 class="text-center rounded-t-lg">Your Target Pages</h1>

            <v-simple-table
              id="menu-table"
              class="shadow secondary primary--text"
            >
              <thead class="">
                <tr>
                  <th></th>
                  <th class="text-left primary--text">
                    Pages
                  </th>
                  <th class="text-left primary--text">
                    URLs
                  </th>
                  <th class="text-left primary--text">
                    URL topic
                  </th>
                  <th class="text-left primary--text">
                    Edit
                  </th>
                  <th class="text-left primary--text">
                    Delete
                  </th>
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
                    <span id="td_pageName">{{ item.pageName }}</span>
                  </td>
                  <td>
                    <span id="td_pageLink">{{ item.pageLink }}</span>
                  </td>
                  <td>
                    <span id="page_urlTopic">{{ item.urlTopic }}</span>
                  </td>
                  <td>
                    <v-btn
                      depressed
                      text
                      small
                      @click.stop="dialog = true"
                      @click="editItem(item)"
                    >
                      <v-icon color="iconcolor">mdi-pen</v-icon>
                    </v-btn>
                  </td>

                  <td>
                    <v-btn @click="deleteItem(item.id)" depressed text small>
                      <v-icon color="iconcolor">mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-container>

          <v-row>
            <v-dialog v-model="dialog" max-width="400">
              <v-card>
                <v-row class="ma-0 pa-0">
                  <v-col cols="12">
                    <h1 class="black--text" style="text-align:center;">
                      Edit item
                    </h1>

                    <div class="pa-2" id="info">
                      <v-text-field
                        label="Page name"
                        v-model="item.pageName"
                        style="width=70%;"
                      ></v-text-field>
                      <v-text-field
                        label="URL"
                        v-model="item.pageLink"
                        style="width=100%;"
                      ></v-text-field>
                      <v-text-field
                        label="topic"
                        v-model="item.urlTopic"
                        style="width=100%;"
                      ></v-text-field>

                      <v-row class="ma-0 pa-0">
                        <v-col cols="6" align="left">
                          <v-btn
                            color="success"
                            class="black--text"
                            depressed
                            v-on:click="updateItem()"
                            @click.stop="dialog = false"
                            >Edit Item</v-btn
                          >
                        </v-col>

                        <v-col cols="6" align="right">
                          <v-btn
                            color="error"
                            class="black--text"
                            @click.stop="dialog = false"
                            depressed
                            >Close</v-btn
                          >
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
            <v-col align="center" class="pt-4">
              <v-btn
                @click="toggleForm()"
                rounded
                color="TabRed"
                dark
                class="button-red"
              >
                Add Target Page
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div v-else>
          <v-container>
            <v-row>
              <v-col md="6" sm="12" xs="12" cols="12">
                <h1 class="text-center rounded-t-lg">Add target page</h1>
                <v-sheet class="pa-2 rounded-b-lg info" elevation="2">
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
                        @click="toggleForm()"
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
                        @click="clear"
                        >Add Item</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>

              <v-col md="6" sm="12" xs="12" cols="12">
                <h1 class="text-center rounded-t-lg">Preview</h1>
                <div class="pa-2 rounded-b-lg info">
                  <v-simple-table id="product-table" class="transparent">
                    <thead>
                      <tr>
                        <th class="text-left" style="width70%">Name</th>
                        <th class="text-left" style="width70%">Target Page</th>
                        <th class="text-left" style="width70%">URL topic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span id="td_name">{{ pageName }}</span>
                        </td>

                        <td>
                          <span id="product_item_description">{{
                            pageLink
                          }}</span>
                        </td>

                        <td>{{ urlTopic }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-col align="left">
            <v-btn
              rounded
              color="TabRed"
              dark
              class="button-red"
              depressed
              @click="toggleForm()"
              >Go back</v-btn
            >
          </v-col>
        </div>
      </div>
    </v-container>
  </v-img>
</template>

<script>
import { mapState } from "vuex";
import { dbPageAdd, fb } from "../../firebase";
/*eslint-disable*/
export default {
  data() {
    return {
      pageName: "",
      urlTopic: "",
      pageLink: "",
      item: [],
      image: null, //var to store image url in
      btnDisable: true, //disable btn before image is uploaded
      multiLine: true,
      snackbar: false,
      dialog: false,
      activeEditItem: null,
      updatedText: "Page has been updated",
      itemAdded: "New page added",
      showAllPages: true,
      showSettings: true,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setPages");
  },
  computed: {
    ...mapState(["userProfile"]),
    pages() {
      return this.$store.getters.getPages;
    },
  },
  methods: {
    uploadImage(e) {
      //e is event
      let file = e; //store file in variable
      console.log(e); //check console.log
      var storageRef = fb.storage().ref("pages/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          //handle unsuccesful uploads
        },
        () => {
          //Handle succesful uploads on complete
          //For instance, get the download URL: https://firebasestorage.googleapis.com
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log("File available", downloadURL);
          });
        }
      );
    },
    editItem(item) {
      this.item = item;
      this.activeEditItem = item.id;
    },
    updateItem() {
      dbPageAdd
        .doc(this.activeEditItem)
        .update(this.item)
        .then(() => {
          this.snackbar = true;
          console.log("it works!");
        })
        .catch(function(error) {
          console.error("oh no, I got an error", error);
        });
    },
    deleteItem(id) {
      //we want to target/grab the id
      dbPageAdd
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    clear() {
      this.pageName = "";
      this.urlTopic = "";
      this.pageLink = "";
    },
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
    toggleForm() {
      this.showSettings = !this.showSettings;
      this.showAllPages = !this.showAllPages;
    },
  },
};
</script>

<style lang="scss" scoped>
.button-red {
  text-transform: capitalize;
}
tr th {
  font-weight: bold;
}
#td_name {
  font-weight: bold;
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
.info {
  background-color: var(--v-secondary-base) !important;
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
</style>
