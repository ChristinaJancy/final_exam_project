<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
        </div>
      </div>
      <div class="col2">
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
  },
  filters: {
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  section {
    padding: 2rem 0;
  }

  .col1 {
    flex: 0 0 30%;

    @media screen and (max-width: 1000px) {
      flex: 0 0 40%;
    }
  }

  .profile {
    background: $white;
    padding: 2rem;

    p {
      color: $medium;
      margin-bottom: 1rem;
    }
  }
}
</style>