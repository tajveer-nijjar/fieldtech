<template>
  <v-responsive height="100%" width="100%">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="5" lg="4" xl="3" class="fill-height">
        <slot name="left" />
      </v-col>
      <v-col
        cols="0"
        md="7"
        lg="8"
        xl="9"
        class="fill-height"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <slot name="right" />
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
