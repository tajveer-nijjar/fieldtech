<template>
  <v-list-item two-line :class="classes" dense>
    <v-list-item-content>
      <v-list-item-title class="text-wrap">
        <v-btn class="ml-lg-5" color="accent" small text>Add IP Address</v-btn>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    classes: String,
    isDense: { type: Boolean, default: false }
  }
});
</script>
