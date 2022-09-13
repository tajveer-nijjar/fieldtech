<template>
  <div>
    <v-progress-linear indeterminate color="accent" v-if="showProgressBar" />
    <div class="page" :class="{ className }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContentPage",
  props: {
    className: { type: String, default: "" },
    showProgressBar: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  width: 1000px;
}
</style>
