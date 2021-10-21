<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column overflow-hidden"
  >
    <v-toolbar
      flat
      dense
      :extended="!!$slots.extension"
      :extension-height="extentionHeight"
      :color="$vuetify.theme.dark ? 'black' : 'white'"
      class="fill-width cnx-toolbar flex-grow-0 fill-width"
    >
      <v-btn icon @click="handleNavButtonClicked()" v-if="showNavButton">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-light" v-if="title">
        {{ title }}
      </v-toolbar-title>
      <template v-if="!!$slots.actions">
        <v-spacer />
        <slot name="actions" />
      </template>
      <template v-slot:extension v-if="!!$slots.extension">
        <slot name="extension" />
      </template>
    </v-toolbar>
    <div class="flex-grow-1 overflow-y-auto">
      <slot name="content" />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    showNavButton: Boolean,
    title: String,
    extentionHeight: { type: Number, default: 40 }
  },
  methods: {
    handleNavButtonClicked(): void {
      this.$emit("nav");
    }
  }
});
</script>
