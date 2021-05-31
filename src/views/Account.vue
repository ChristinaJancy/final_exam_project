<template>
  <v-container id="account">
    <div :class="{ settings: !showProfile }" class="col1">
      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>
      <div v-if="showProfile" align="center">
        <v-avatar size="160">
          <v-img
            v-bind:src="userProfile.image"
            lazy-src="../assets/user-placeholder.png"
            contain
          >
            <template v-slot:placeholder>
              <v-img src="../assets/user-placeholder.png"></v-img>
            </template>
          </v-img>
        </v-avatar>
        <v-row>
          <v-col>
            <h2 class="mb-1" style="text-align: center">
              <b> {{ userProfile.name }} {{ userProfile.nameLast }} </b>
            </h2>
          </v-col>
        </v-row>
      </div>
      <h2 v-else align="center">Update your profile</h2>

      <v-divider></v-divider>
      <br />
      <div v-if="showProfile">
        <form class="mt-2">
          <v-row class="pa-0 ma-0">
            <v-sheet class="mx-10 transparent" max-width="90%">
              <h3><b>Company</b></h3>
              <small>
                {{ userProfile.company }}
              </small>
              <br />
              <br />
              <h3><b>Company Type</b></h3>
              <small>
                {{ userProfile.companyType }}
              </small>
            </v-sheet>
          </v-row>

          <div
            class="extras pt-12 mx-auto"
            align="center"
            justify="space-around"
          >
            <v-btn
              @click="toggleForm()"
              rounded
              color="TabRed"
              dark
              class="button-red"
            >
              Update profile
            </v-btn>
          </div>
        </form>
      </div>

      <div v-else class="background ">
        <v-file-input
          label="Update Profile Picture"
          prepend-icon="mdi-camera"
          required
          @change="uploadImage"
        ></v-file-input>

        <form @submit.prevent>
          <label for="name">Name</label>
          <input
            v-model.trim="name"
            type="text"
            :placeholder="userProfile.name"
            id="name"
            class="primary--text"
          />

          <label for="nameLast">Last Name</label>
          <input
            v-model.trim="nameLast"
            type="text"
            :placeholder="userProfile.nameLast"
            id="nameLast"
            class="primary--text"
          />

          <label for="company">Company</label>
          <input
            v-model.trim="company"
            type="text"
            :placeholder="userProfile.company"
            id="company"
            class="primary--text"
          />

          <label for="companyType">Company Type</label>
          <input
            v-model.trim="companyType"
            type="text"
            :placeholder="userProfile.companyType"
            id="companyType"
            class="primary--text"
          />

          <v-row>
            <v-col align="left">
              <v-btn
                @click="toggleForm()"
                rounded
                text
                color="TabRed"
                dark
                large
                class="button-red"
              >
                <b>Go back</b>
              </v-btn>
            </v-col>
            <v-col align="right">
              <v-btn
                @click="updateProfile()"
                v-on:click="addProfilePicture()"
                rounded
                color="TabRed"
                class="white--text"
                depressed
                
              >
                Update Profile
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { fb, usersCollection } from "../firebase";
import { auth } from "../firebase";
// , usersPictures
// , usersCollection
/*eslint-disable*/
export default {
  data() {
    return {
      image: null,
      name: "",
      nameLast: "",
      company: "",
      companyType: "",
      showSuccess: false,
      showProfile: true,
      showSettings: true,
    };
  },

  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
    toggleForm() {
      this.showSettings = !this.showSettings;
      this.showProfile = !this.showProfile;
    },
    updateProfile() {
      this.$store.dispatch("updateProfile", {
        name: this.name !== "" ? this.name : this.userProfile.name,
        nameLast:
          this.nameLast !== "" ? this.nameLast : this.userProfile.nameLast,
        company: this.company !== "" ? this.company : this.userProfile.company,
        companyType:
          this.companyType !== ""
            ? this.companyType
            : this.userProfile.companyType,
      });
      this.name = "";
      this.nameLast = "";
      this.company = "";
      this.companyType = "";
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
    },

    // profile picture test start --------
    uploadImage(e) {
      //e is event
      let file = e; //store file in variable
      console.log(e); //check console.log
      var storageRef = fb.storage().ref("allProfilePictures/" + file.name);
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

    // addProfilePicture() {
    //   //debugger;
    //   usersPictures.add({
    //     image: this.image, //Add new property
    //   });
    // },

    addProfilePicture() {
      usersCollection
        .doc(auth.currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            doc.ref.update({ image: this.image });
          }
        });
    },

    // profile picture test end ----------
  },
};
</script>

<style lang="scss" scoped>
.button-red {
  text-transform: capitalize;
}

// settings
#account {
  padding: 2rem 0;

  .col1 {
    max-width: 600px;
    margin: 0 auto;
    // background: $white;
    padding: 2rem;
  }

  form {
    margin-top: 3rem;
  }

  .success {
    color: $success;
    margin: 0.5rem 0 -2rem;
  }

  .button {
    margin-top: 2rem;
    background: $error;
    border-radius: 25px;
    align-self: end;
  }
}
</style>
