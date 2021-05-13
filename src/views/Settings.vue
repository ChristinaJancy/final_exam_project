<template>
  <section id="settings">

    <div class="col1">
      <h2>Settings</h2>
      <p>Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>

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
          @click="updateProfile() + updateProfilePicture()"
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

export default {
  data() {
    return {
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
        nameLast: this.nameLast !== "" ? this.nameLast : this.userProfile.nameLast,
        company: this.company !== "" ? this.company : this.userProfile.company,
        companyType: this.companyType !== "" ? this.companyType : this.userProfile.companyType,
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
