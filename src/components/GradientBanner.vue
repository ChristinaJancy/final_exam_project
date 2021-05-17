<template>
  <div id="gradient-banner">
    <div class="shape"></div>
    <h2 v-if="$route.fullPath === '/'" class="white--text"></h2>
    <h2 v-else class="white--text">{{ $route.name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/main.sass";
svg {
  width: 100%;
}
// .gradient-banner {
//   background: linear-gradient(
//     -180deg,
//     #112243 -30%,
//     #782d76 0%,
//     #fe3652 100%
//   ) !important;
//     width:100%;
//     height:100px;
//     margin-top:-130px;
//     margin-bottom:20px;
//     border-bottom-left-radius:50%;
//     border-bottom-right-radius:50%;
// }

.shape {
  position: relative;
  overflow: hidden;
  height: 170px;
  margin-top: -130px;
  margin-bottom: 30px;
}

.shape::before {
  border-radius: 100%;
  position: absolute;
  background: linear-gradient(
    -180deg,
    var(--v-gradient1-base) 1%,
    var(--v-gradient2-base) 60%,
    var(--v-gradient3-base) 100%
  ) !important;
  right: -200px;
  left: -200px;
  top: -200px;
  content: "";
  bottom: 0;
   z-index: 5;
}
#gradient-banner {
  z-index: 5;
  h2 {
    position: absolute;
    top: 0;
    z-index: 10;
    margin-top: -80px;
    padding-left: 20px;
    text-transform: capitalize;
  }
}
</style>
