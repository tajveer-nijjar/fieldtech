<template>
  <v-card max-height="250" height="200" class="rounded-lg">
    <v-icon> mdi-signal-cellular-3 </v-icon>
    <p>Cellular network</p>
    <status-dot />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

import StatusDot from "@/components/StatusDot.vue";

export default Vue.extend({
  components: {
    StatusDot
  },
  data() {
    return {};
  }
});
</script>
