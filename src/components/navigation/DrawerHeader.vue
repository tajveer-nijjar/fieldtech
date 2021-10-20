<template>
  <v-toolbar
    flat
    :color="$vuetify.theme.dark ? 'black' : 'white'"
    class="cnx-toolbar px-0"
  >
    <v-btn icon @click="closeDrawer()" :disabled="isBusy">
      <v-icon>clear</v-icon>
    </v-btn>
    <v-toolbar-title>
      <app-name />
    </v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import AppName from "@/components/AppName.vue";
import { Namespaces, Store } from "@/constants";
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  components: { AppName },
  computed: {
    ...mapState(Namespaces.root, [Store.States.Root.isBusy])
  },
  methods: {
    ...mapMutations(Namespaces.root, [
      Store.Mutations.Root.setDrawerVisibility
    ]),
    closeDrawer() {
      this.setDrawerVisibility(false);
    }
  }
});
</script>
