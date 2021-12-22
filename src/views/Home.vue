<template>
  <ConnectionStatus />
</template>

<script lang="ts">
import Vue from "vue";
import ConnectionStatus from "./layouts/ConnectionStatus.vue";

export default Vue.extend({
  name: "Home",

  components: {
    ConnectionStatus
  }
});
</script>
