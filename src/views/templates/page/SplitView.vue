<template>
  <v-responsive height="100%" width="100%">
    <v-row no-gutters class="fill-height">
      <v-col
        cols="12"
        :md="nav ? 4 : 5"
        :lg="nav ? 3 : 4"
        :xl="3"
        class="fill-height"
        v-if="showLeft"
      >
        <slot name="left" />
      </v-col>
      <v-col
        cols="12"
        :md="nav ? 8 : 7"
        :lg="nav ? 9 : 8"
        :xl="9"
        class="fill-height"
        v-if="showRight"
      >
        <slot name="right" />
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    persistentRight: Boolean,
    nav: Boolean
  },
  computed: {
    showLeft(): boolean {
      if (this.$slots.left == null) {
        return false;
      }

      if (this.$vuetify.breakpoint.mdAndUp) {
        return true;
      }

      if (this.$vuetify.breakpoint.smAndDown) {
        if (this.persistentRight) {
          return false;
        }

        if (this.nav) {
          return false;
        }
      }

      return true;
    },
    showRight(): boolean {
      return (
        this.$vuetify.breakpoint.mdAndUp || this.persistentRight || this.nav
      );
    }
  }
});
</script>
