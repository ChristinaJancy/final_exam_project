<template>
  <section id="linkOpportunity">
    <v-row>
      <v-col cols="12" align="center">
        Showing <b>{{ staticLinks.length }}</b> link opportunities for:
        <h3 v-text="item.pageLink"></h3>
      </v-col>
      <v-col
        v-for="(staticLink, index) in staticLinks"
        :key="staticLink"
        cols="12"
        lg="6"
        sm="12"
      >
        <v-card class="mx-auto linkCard" max-width="80%">
          <!-- about the company -->
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4" id="company">
                {{ staticLink.company }} {{ staticLink.length }}
              </div>
              <v-list-item-title class="headline mb-1" id="pageName">
                {{ staticLink.pageName }}
              </v-list-item-title>
              <v-list-item-subtitle id="description">
                {{ staticLink.description }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-img v-bind:src="staticLink.image"></v-img
            ></v-list-item-avatar>
          </v-list-item>

          <!-- LRS and word-->
          <v-list-item class="grow mt-2">
            <v-progress-circular
              :value="staticLink.lrs"
              :size="70"
              :width="5"
              :rotate="-90"
              color="TabBlueToLightBlue"
              align="center"
            >
              <span
                ><b> <small>LRS:</small><br />{{ staticLink.lrs }} </b>
              </span>
            </v-progress-circular>
            <v-list-item-content class="pl-4">
              <v-list-item-title>Word count</v-list-item-title>
              <v-list-item-subtitle>{{
                staticLink.words
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content class="pl-4">
              <v-list-item-title>SEO score</v-list-item-title>
              <v-list-item-subtitle>{{
                staticLink.seoScore
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- test -->
          <v-row align="center" class="mb-8 pl-4 mt-4">
            <v-item-group
              v-model="window"
              class="shrink"
              mandatory
              tag="v-flex"
            >
              <v-item v-slot="{ active, toggle }">
                <div>
                  <v-btn
                    :input-value="active"
                    x-small
                    text
                    @click="toggle"
                    class="text-capitalize"
                  >
                    Keywords
                  </v-btn>
                </div>
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <div>
                  <v-btn
                    :input-value="active"
                    x-small
                    text
                    @click="toggle"
                    class="text-capitalize"
                  >
                    URL topics
                  </v-btn>
                </div>
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <div>
                  <v-btn
                    :input-value="active"
                    x-small
                    text
                    @click="toggle"
                    class="text-capitalize"
                  >
                    Domain Topics
                  </v-btn>
                </div>
              </v-item>
              <v-item v-slot="{ active, toggle }">
                <div>
                  <v-btn
                    :input-value="active"
                    x-small
                    text
                    @click="toggle"
                    class="text-capitalize"
                  >
                    Content Topics
                  </v-btn>
                </div>
              </v-item>
            </v-item-group>

            <v-col>
              <v-window v-model="window" vertical >
                <v-window-item class="window-item">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="mb-4" align="center">
                        <strong class="title">Keywords</strong>
                      </v-row>
                      <p>
                        {{ staticLink.keywords.keyword1 }},
                        {{ staticLink.keywords.keyword2 }},
                        {{ staticLink.keywords.keyword3 }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item class="window-item">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="mb-4" align="center">
                        <strong class="title">URL topics</strong>
                      </v-row>
                      <p>
                        {{ staticLink.urlTopic }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item class="window-item">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="mb-4" align="center">
                        <strong class="title">Domain Topics</strong>
                      </v-row>
                      <p>
                        {{ staticLink.domainTopic }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item class="window-item">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="mb-4" align="center">
                        <strong class="title">Content Topics</strong>
                      </v-row>
                      <p>
                        {{ staticLink.contentTopic }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>

          <!--  -->

          <!-- 
                <v-list class="mb-7">
              <v-list-item class="link-list-item">
              <v-list-item-content>
                <v-list-item-subtitle>URL topic</v-list-item-subtitle>
                <v-list-item-title>{{ staticLink.urlTopic }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="link-list-item">
              <v-list-item-content>
                <v-list-item-subtitle>Domain Topic</v-list-item-subtitle>
                <v-list-item-title>{{
                  staticLink.domainTopic
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="link-list-item">
              <v-list-item-content>
                <v-list-item-subtitle>Content Topic</v-list-item-subtitle>
                <v-list-item-title>{{
                  staticLink.contentTopic
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item> 
          </v-list>-->

          <v-card-actions>
            <v-btn
              text
              color="TabBlueToLightBlue"
              @click="linkAnchors = index"
              :bottom="true"
              :absolute="true"
            >
              <b>Anchor suggestions</b>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-show="index === linkAnchors"
              class="transition-fast-in-fast-out anchors linkCard"
              style="height: 100%;"
            >
              <v-card-text>
                <p class="headline text--primary">
                  <b>Anchor suggestions</b>
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
                  color="TabBlueToLightBlue"
                  @click="linkAnchors = false"
                  :bottom="true"
                  :absolute="true"
                >
                  <b>Close</b>
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
      linkAnchors: null,
      window: 0,
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
          pageName: "blog | grids",
          pageLink: "https://vuetifyjs.com/en/components/grids/",
          description:
            "Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required",
          words: "15450",
          lrs: "87",
          seoScore: "88.9",
          keywords: {
            keyword1: "SEO",
            keyword2: "right data",
            keyword3: "digital marketing",
          },
          urlTopic: "Web Services",
          domainTopic: "Business Services",
          contentTopic: "Search engine optimization",

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
          company: "Instagram",
          image:
            "https://helloseo.dk/wp-content/uploads/2015/02/instagram-Logo-PNG-Transparent-Background-download.png",
          pageName: "blog | SoMe",
          pageLink:
            "https://about.instagram.com/blog/announcements/introducing-new-tools-to-protect-our-community-from-abuse",
          description:
            "We put people first, and value craft and simplicity in our work. Our teams inspire creativity around the world, helping over 1 billion people create and share.",
          words: "15450",
          lrs: "63",
          seoScore: "88.9",
          keywords: {
            keyword1: "SEO",
            keyword2: "right data",
            keyword3: "digital marketing",
          },
          urlTopic: "Web Services",
          domainTopic: "Business Services",
          contentTopic: "Search engine optimization",
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
.link-list-item:not(:first-child) {
  margin-top: -15px;
}

.window-item {
  height: 100px;
}
#description {
  line-height: 22px;
  padding-top: 5px;
}

.anchors {
  bottom: 0 !important;
  opacity: 1 !important;
  position: absolute !important;
  width: 100% !important;
}

.linkCard {
  height: min-content;
}

@media screen and (max-width: 599.9px) {
  #linkOpportunity {
    margin-bottom: 150px;
  }
}
</style>
