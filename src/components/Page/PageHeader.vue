<template>
  <div class="header-container">
    <div class="header-content">
      <h1 class="text-h1">{{ headerTitle }}</h1>
      <p class="text-body2">{{ headerSubtitle }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PageHeaders",
  props: {
    headerTitle: { type: String, default: "" },
    headerSubtitle: { type: String, default: "" }
  }
});
</script>
