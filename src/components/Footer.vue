<template>
    <v-footer id="footer" color="transparent" app inset >
      <v-row no-gutters align="center">
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center"
          cols="6"
          md="auto"
        >
          <a
            :href="link.href"
            class="text-decoration-none text-uppercase text-caption font-weight-regular pl-3"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="12" md="auto" >
          <div class="text-body-2 font-weight-light pt-6 pt-md-0 text-center">
            &copy; {{ new Date().getFullYear() }} -
            <!-- <v-icon>mdi-vuetify</v-icon> -->
            <router-link
              to="/"
              class="text-decoration-none text-body-2 font-weight-light"
              >Tabtimize</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
export default {
  name: "Links",

  data: () => ({
    links: [
      {
        href: "https://tabtimize.com/resources/help-guides/",
        text: "Help guides",
      },
      {
        href: "#",
        text: "About Us",
      },
    ],
  }),
};
</script>

<style lang="sass" scoped>
a
  color: inherit !important
</style>

<style lang="scss" scoped>
#footer {
  position: absolute;
  bottom: 0;
}
</style>
