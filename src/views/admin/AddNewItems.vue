<template>
  <v-img
    style="margin-top:-150px; z-index:1;"
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    src="https://firebasestorage.googleapis.com/v0/b/tabtimize.appspot.com/o/assets%2Fbg-why.svg?alt=media&token=72a53484-69b1-4873-a7ec-db5c005d8373"
    cover
  >
    <section class="addNewItems" style="padding-top:150px;">
      <v-snackbar top v-model="snackbar" :multi-line="multiLine">
        {{ itemAdded }}
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
            >Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-theme-provider>
        <v-container>
          <v-row>
            <v-col md="6" sm="12" xs="12" cols="12">
              <h1 class="text-center rounded-t-lg">Add target page</h1>
              <v-sheet class="pa-2 rounded-b-lg info" elevation="2">
                <v-text-field
                  clearable
                  label="Company"
                  required
                  v-model="company"
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
                      <th class="text-left" style="width70%">Company</th>
                      <th class="text-left" style="width70%">Target Page</th>
                      <th class="text-left" style="width70%">URL topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span id="td_name">{{ company }}</span>
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
      </v-theme-provider>
    </section>
  </v-img>
</template>

<script>
import { dbPageAdd, fb } from "../../firebase";
/*eslint-disable*/
export default {
  data() {
    return {
      company: "",
      urlTopic: "",
      pageLink: "",
      image: null, //var to store image url in
      btnDisable: true, //disable btn before image is uploaded
      multiLine: true,
      snackbar: false,
      itemAdded: "new page added",
    };
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
    clear() {
      this.company = "";
      this.urlTopic = "";
      this.pageLink = "";
    },
    addNewPage() {
      //debugger;
      this.snackbar = true;
      dbPageAdd.add({
        company: this.company,
        urlTopic: this.urlTopic,
        pageLink: this.pageLink,
        image: this.image, //Add new property
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @include infobox_mixin(
    5px,
    var(--v-gradient1-base),
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
