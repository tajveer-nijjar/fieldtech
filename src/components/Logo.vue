<template>
  <v-img
    :src="
      $vuetify.theme.dark
        ? require('@/assets/logos/dark/connexionz.png')
        : require('@/assets/logos/light/connexionz.png')
    "
    :max-width="width"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    width: { type: [Number, String], default: 144 }
  }
});
</script>
