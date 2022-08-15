<template>
  <div>
    <ContentPage>
      <div style="background: red">Monitorrr</div>
    </ContentPage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ContentPage from "@/components/Page/ContentPage.vue";

export default Vue.extend({
  name: "Monitor",
  components: {
    ContentPage
  }
});
</script>
