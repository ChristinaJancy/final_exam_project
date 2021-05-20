<template>
  <section class="linkOpportunities">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      cover
    >
      <v-container>
        <v-row>
          <v-col col="10" class="mx-auto">
            <h1>Your link opportunities</h1>
            <br />
            <div class="pa-2" id="info">
              <v-simple-table
                id="menu-table"
                class="shadow secondary primary--text"
              >
                <thead class="">
                  <tr>
                    <th></th>
                    <th class="text-left primary--text">Target Page(s)</th>
                    <th class="text-left primary--text">URL topic</th>
                    <th class="text-left primary--text">Link opportunities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in pages"
                    :key="item.pageName"
                    class="linkOppItem"
                  >
                    <td id="id_pageImg">
                      <v-img v-bind:src="item.image"></v-img>
                    </td>
                    <td>
                      <router-link class="primary--text"
                        :to="{
                          name: 'link opportunity',
                          params: {
                            pageName: item.pageName,
                            image: item.image,
                            pageLink: item.pageLink,
                            urlTopic: item.urlTopic,
                          },
                        }"
                      >
                        <span id="td_pageLink">{{ item.pageLink }}</span>
                      </router-link>
                    </td>
                    <td>
                      <span id="page_urlTopic">{{ item.urlTopic }}</span>
                    </td>
                    <td>
                      <router-link class="primary--text"
                        :to="{
                          name: 'link opportunity',
                          params: {
                            pageName: item.pageName,
                            image: item.image,
                            pageLink: item.pageLink,
                            urlTopic: item.urlTopic,
                          },
                        }"
                        > {{ Math.ceil(Math.random() * 200) }}
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <p class="pt-2"></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script scoped>
/*eslint-disable*/
// import { dbMenuAdd } from '../../firebase.js'
import { pages } from "../firebase.js";
export default {
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("setPages");
  },
  methods: {},
  computed: {
    pages() {
      return this.$store.getters.getPages;
    },
  },
};
</script>

<style lang="scss" scoped>
tr th {
  font-weight: bold;
}
#td_name {
  font-weight: bold;
}

.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
#id_pageImg {
  max-width: 50px;
  max-height: auto;
  padding: 5px;
}
.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
</style>
