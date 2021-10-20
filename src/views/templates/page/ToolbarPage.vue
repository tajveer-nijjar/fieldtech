<template>
  <v-sheet
    width="100%"
    height="100%"
    class="d-flex flex-column overflow-hidden"
  >
    <v-toolbar
      flat
      dense
      :extended="hasExtension"
      :extension-height="extentionHeight"
      :color="$vuetify.theme.dark ? 'black' : 'white'"
      class="fill-width cnx-toolbar flex-grow-0 fill-width"
    >
      <v-toolbar-title class="font-weight-light" v-if="title">
        {{ title }}
      </v-toolbar-title>
      <template v-if="hasActions">
        <v-spacer />
        <slot name="actions" />
      </template>
      <template v-slot:extension v-if="hasExtension">
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
    title: String,
    extentionHeight: { type: Number, default: 40 }
  },
  computed: {
    hasExtension(): boolean {
      return !!this.$slots.extension;
    },
    hasActions(): boolean {
      return !!this.$slots.actions;
    }
  }
});
</script>
