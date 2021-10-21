<template>
  <v-list-item two-line>
    <v-list-item-icon v-if="icon">
      <v-icon>icon</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title class="text-wrap">
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle class="text-wrap font-weight-regular">
        {{ subtitle }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <slot />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    subtitle: String,
    icon: String
  }
});
</script>
