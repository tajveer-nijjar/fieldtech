<template>
  <ContentPage>
    <div class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden">
      <div class="content">
        <PageHeader
          :headerTitle="`Volume`"
          :headerSubtitle="`SomeThing something`"
        />
      </div>
    </div>
  </ContentPage>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import ContentPage from "@/components/Page/ContentPage.vue";
import PageHeader from "@/components/Page/PageHeader.vue";

export default Vue.extend({
  name: "Volume",
  async created() {
    debugger;
  },
  components: {
    ContentPage,
    PageHeader
  }
});
</script>
<style lang="scss" scoped></style>
