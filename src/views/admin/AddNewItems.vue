<template>
  <v-img
    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
    cover
  >
    <section class="addNewItems">
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
            <v-col md="6" sm="12" xs="12" cols="12" style="text-align:center">
              <h1>Add new page</h1>
              <div class="pa-2" id="info">
                <v-text-field
                  clearable
                  label="Company"
                  required
                  v-model="company"
                ></v-text-field>
                <v-text-field
                  clearable
                  label="Link"
                  required
                  v-model="pageLink"
                ></v-text-field>
                <v-text-field
                  clearable
                  label="URL Topic"
                  required
                  v-model="urlTopic"
                ></v-text-field>

                <v-file-input
                  label="File input"
                  prepend-icon="mdi-camera"
                  required
                  @change="uploadImage"
                ></v-file-input>

                <v-btn
                  color="success"
                  class="black--text"
                  depressed
                  v-on:click="addNewPage()"
                  :disabled="btnDisable"
                  @click="clear"
                  >Add Item</v-btn
                >
                <v-btn color="error" class="black--text" depressed
                  >Cancel</v-btn
                >
              </div>
            </v-col>

            <v-col md="6" sm="12" xs="12" cols="12" style="text-align:center">
              <h1>PREVIEW</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table">
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
@mixin infobox_mixin(
  $border-radius,
  $border-color,
  $padding,
  $margin-bottom,
  $color
) {
  border: $border-radius solid $border-color;
  padding: $padding;
  margin-bottom: $margin-bottom;
  color: $color;
}
h1 {
  @include infobox_mixin(5px, white, 10px, 5px, white);
  background-color: rgba(0, 0, 0, 0.445);
}
// Starts here:
#info {
  background-color: rgb(255, 255, 255);
}
tr th {
  font-weight: bold;
}
#td_name {
  font-weight: bold;
}
#product_description {
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size: 13px;
}
.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
#basket-checkout {
  font-size: 13px;
}
#basket-checkout {
  line-height: 2px;
}
</style>
