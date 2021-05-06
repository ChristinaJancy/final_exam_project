<template>
  <div id="LO">
    <section>
      <div class="row">
        <div id="beCard" class="card-header border-0 col-sm">
          <h3 style="font-weight:bold;" class="mb-0">Link Opportunities</h3>
          <h5>registered pages.</h5>
        </div>
        <div class="col-sm mt-sm-3">
          <button
            class="btn btn-sm btn-danger edRePa"
            data-toggle="modal"
            data-target="#registeredPagesModal"
          >
            Edit Registered Pages
          </button>
        </div>
      </div>

      <h3 id="mainTopicId" class="text-center text-truncate">
        <span id="mainTopicFor">
          Main topic for
          <span id="mainTopicData"><strong>ghf</strong></span></span
        >
      </h3>
      <div class="table-responsive">
        <table class="table table-hover" id="be-site-links">
          <thead class="thead-light">
            <tr>
              <th id="urlPages" class="col" style="width:30%">
                Registered Pages
                <i
                  class="d-none helpIcon fas fa-question"
                  data-toggle="tooltip"
                  data-original-title="Under URL you will find all your registered pages. You can choose to see the relevant link opportunities we have found for each of your pages by clicking on the URL."
                >
                </i>
              </th>
              <th id="urlTopic" class="col" style="width:30%">
                URL topic
                <i
                  class="d-none helpIcon fas fa-question"
                  data-toggle="tooltip"
                  data-original-title="URL content topic shows what the primary topic of the page is about. A page may have more than one topic but the most relevant one is usually displayed"
                >
                </i>
              </th>
              <th id="linkOpp" class="col" style="width:30%">
                Link opportunities
                <i
                  class="d-none helpIcon fas fa-question"
                  data-toggle="tooltip"
                  data-original-title="Under this section you can see how many link opportunities we have found for each page. If 0 is displayed, it means that we have not yet found any relevant opportunities for the page yet."
                >
                </i>
              </th>
              <th id="lastAna" class="col" style="width:30%">
                Last Analyzed
                <i
                  class="d-none helpIcon fas fa-question"
                  data-toggle="tooltip"
                  data-original-title="Below you can see when the URL was last analyzed. A fresh page analysis can be requested by tapping the refresh icon. Note that this action costs one analysis credit."
                >
                </i>
              </th>
            </tr>
          </thead>
        </table>
        <!-- Test label start-->
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>
