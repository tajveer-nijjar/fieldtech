<template>
  <div class="page" :class="{ className }">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ContentPage",
  props: {
    className: { type: String, default: "" }
  }
});
</script>
<style lang="scss" scoped>
.page {
  margin: 0 auto;
  width: 1000px;
  //   height: calc(100% - 65px);
  border: 1px solid red;
}
</style>
