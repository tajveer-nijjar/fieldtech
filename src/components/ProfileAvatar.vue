<template>
  <v-sheet
    :height="size"
    :width="size"
    :max-height="size"
    :max-width="size"
    :min-height="size"
    :min-width="size"
    rounded="circle"
    :color="$vuetify.theme.dark ? 'blue-grey darken-3' : 'blue-grey lighten-4'"
    class="
      d-flex
      align-center
      justify-center
      font-weight-medium
      blue-grey--text
      text-caption
    "
  >
    {{ avatarText }}
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: String,
    size: { type: Number, default: 48 }
  },
  computed: {
    avatarText(): string {
      let text = "c";

      if (this.name && this.name.length > 0) {
        const arrayName = this.name.split(" ");
        const firstName = arrayName.length > 0 ? arrayName[0].trim() : text;
        const lastName = arrayName.length > 1 ? arrayName[1].trim() : "";
        text = firstName.substr(0, 1) + (lastName ? lastName.substr(0, 1) : "");
      }

      return text;
    }
  }
});
</script>
