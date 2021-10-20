<template>
  <v-app>
    <main-content />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MainContent from "./MainContent.vue";

export default Vue.extend({
  components: { MainContent },
  name: "App",

  data: () => ({
    //
  })
});
</script>
