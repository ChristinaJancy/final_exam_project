
<template>
  <section class="linkOpportunities">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
   
      cover
    >
      <v-theme-provider dark>
        <v-container>
          <v-row>
            <v-col col="10" class="mx-auto">
              <h1>All Target Pages</h1>
              <br>
              <div class="pa-2" id="info">
                <v-simple-table id="menu-table" class="shadow secondary primary--text">
                  <thead class="">
                    <tr>
                      <th></th>
                      <th class="text-left primary--text" style="width=70%;">Target Page(s)</th>
                      <th class="text-left primary--text" style="width=100%">URL topic</th>
                      <th class="text-left primary--text" style="width=100%">Link opportunities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in pages" :key="item.company" class="linkOppItem">
                      <td id="id_pageImg">
                        <v-img v-bind:src="item.image"></v-img>
                      </td>
                      <td>
                        <span id="td_pageLink">{{item.pageLink}}</span>
                      </td>
                      <td> <span id="page_urlTopic">{{item.urlTopic}}</span></td>
                      <td>{{ Math.ceil(Math.random()*100) }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
 
  </section>
</template>

<script scoped>
  /*eslint-disable*/
// import { dbMenuAdd } from '../../firebase.js'
import { pages } from '../firebase.js'
export default {
  data() {
    return {
    }
  },
    beforeCreate() {
    this.$store.dispatch("setPages");
  },
  methods: {

  },
  computed: {
    pages() {
      return this.$store.getters.getPages;
    },
  }
};
</script>

<style lang="scss" scoped>

// Starts here:
.linkOppItem:hover{
  background: var(--v-light-base) !important;
}
tr th {
  font-weight: bold;
}
#td_name {
  font-weight: bold;
}

#id_pageImg{
  max-width:50px;
  max-height:auto;
  padding:5px;
}
.col h1 {
  text-align: right;
}
.col:last-child h1 {
  text-align: left;
}
</style>