<template>
  <section id="settings">
    <div class="col1">
      <h2>Settings</h2>
      <p>Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>

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
        />

        <label for="nameLast">Last Name</label>
        <input
          v-model.trim="nameLast"
          type="text"
          :placeholder="userProfile.nameLast"
          id="nameLast"
        />

        <label for="company">Company</label>
        <input
          v-model.trim="company"
          type="text"
          :placeholder="userProfile.company"
          id="company"
        />

        <label for="companyType">Company Type</label>
        <input
          v-model.trim="companyType"
          type="text"
          :placeholder="userProfile.companyType"
          id="companyType"
        />

        <button
          @click="updateProfile()"
          v-on:click="addProfilePicture()"
          class="button"
        >
          Update Profile
        </button>
      </form>
    </div>
  </section>
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
    };
  },

  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
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
// settings
#settings {
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
