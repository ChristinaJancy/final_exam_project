<template>
  <section id="linkOpportunity">
    <v-row>
      <v-col cols="12" align="center">
        Link opportunities for:
        <h3 v-text="item.pageLink"></h3>
      </v-col>
      <v-col v-for="(staticLink, index) in staticLinks" :key="staticLink" cols="12">
        <v-card class="mx-auto linkCard" max-width="80%">
          <v-card-text>
            <div class="overline">{{ staticLink.company }}</div>
            <p class="display-1 text--primary">
              el·ee·mos·y·nar·y
            </p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="linkAnchors = index"
              :bottom="true"
              :absolute="true"
            >
              Anchor suggestions
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-show="index === linkAnchors"
              class="transition-fast-in-fast-out anchors linkCard"
              style="height: 100%;"
            >
              <v-card-text>
                <p class="display-1 text--primary">
                  Origin
                </p>

                <ul>
                  <li>
                    {{ staticLink.anchorSuggestions.anchor1 }}
                  </li>
                  <li>
                    {{ staticLink.anchorSuggestions.anchor2 }}
                  </li>
                  <li>
                    {{ staticLink.anchorSuggestions.anchor3 }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="linkAnchors = false"
                  :bottom="true"
                  :absolute="true"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    var item = this.$route.params;
    return {
      linkAnchors:null,
      item: {
        pageName: item.pageName,
        image: item.image,
        pageLink: item.pageLink,
        urlTopic: item.urlTopic,
      },
      staticLinks: [
        {
          company: "Vuetify",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E0BAQGiUu9RfWfztw/company-logo_200_200/0/1528826437880?e=2159024400&v=beta&t=CH7gfn4ojjYKN1LIgX1aTVMIHPMtIV5y15vxDHyfqlw",
          pageLink: "https://vuetifyjs.com/en/components/grids/",
          description:
            "Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required",
        
          anchorSuggestions: {
            anchor1:
              "Get Free Website SEO Score Online Improve your SEO rating with the best website checker On Page SEO Checker Get free on page SEO audit report.",
            anchor2:
              "Instantly create competitor analysis, white-label reports and analyze your SEO issues.",
            anchor3:
              "Improve and monitor your website's search engine rankings with our supercharged SEO tools.",
          },
        },
        {
          company: "fsdfsdfsy",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E0BAQGiUu9RfWfztw/company-logo_200_200/0/1528826437880?e=2159024400&v=beta&t=CH7gfn4ojjYKN1LIgX1aTVMIHPMtIV5y15vxDHyfqlw",
          pageLink: "https://vuetifyjs.com/en/components/grids/",
          description:
            "sdfsandcrafted Material Components. No design skills required",
        
          anchorSuggestions: {
            anchor1:
              "sfddse SEO Score Online Improve your SEO rating with the best website checker On Page SEO Checker Get free on page SEO audit report.",
            anchor2:
              "sfds competitor analysis, white-label reports and analyze your SEO issues.",
            anchor3:
              "sfdsfsearch engine rankings with our supercharged SEO tools.",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.anchors {
  bottom: 0 !important;
  opacity: 1 !important;
  position: absolute !important;
  width: 100% !important;
}

.linkCard {
  height: 400px;
}
</style>
