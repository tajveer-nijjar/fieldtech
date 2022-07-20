<template>
  <div>
    <v-card
      width="100%"
      height="100%"
      elevation="0"
      class="d-flex flex-column overflow-hidden"
    >
      <v-progress-linear indeterminate color="accent" v-if="showProgressBar" />
      <v-toolbar
        flat
        dense
        :extended="!!$slots.extension"
        :extension-height="extentionHeight"
        :color="$vuetify.theme.dark ? 'black' : 'white'"
        class="fill-width cnx-toolbar flex-grow-0 fill-width"
      >
        <v-toolbar-title class="font-weight-light" v-if="title">
          {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <slot />
        </div>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    showNavButton: Boolean,
    title: String,
    extentionHeight: { type: Number, default: 40 },
    showProgressBar: Boolean
  },
  methods: {
    handleNavButtonClicked(): void {
      this.$emit("nav");
    }
  }
});
</script>
