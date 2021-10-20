<template>
  <div class="app-name text-h6 font-weight-black">
    {{ getRootText("websiteName") }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.app-name {
  background: linear-gradient(-60deg, $cnx-green-color 10%, $accent-color 60%);
  background: -webkit-linear-gradient(
    -60deg,
    $cnx-green-color 10%,
    $accent-color 60%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  cursor: default;
  display: inline-block;
}
</style>
