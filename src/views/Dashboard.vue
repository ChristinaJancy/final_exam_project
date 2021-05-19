<template>
  <section id="dashboard">
    <div class="profile ml-4">
      <small>Welcome back</small>
      <h2>{{ userProfile.name }}</h2>
      <p>{{ userProfile.company }}</p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["userProfile"]),
  },
};
</script>

<style lang="scss" scoped>
#dashboard {
  padding: 2rem 0;
}
</style>
