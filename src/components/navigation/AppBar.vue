<template>
  <v-app-bar
    app
    flat
    underline
    clipped-left
    :color="$vuetify.theme.dark ? 'black' : 'white'"
    class="cnx-app-bar"
  >
    <v-btn icon @click="openDrawer()" v-if="$vuetify.breakpoint.smAndDown">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <template v-if="$vuetify.breakpoint.lgAndUp">
      <logo />
      <v-divider vertical inset class="mx-3 grey lighten-3" />
    </template>
    <app-name class="mr-6" />
    <v-spacer />
    <v-progress-linear
      indeterminate
      absolute
      bottom
      :active="isBusy"
      color="accent"
    />
  </v-app-bar>
</template>

<script lang="ts">
import AppName from "@/components/AppName.vue";
import Logo from "@/components/Logo.vue";
import { Namespaces, Store } from "@/constants";
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  components: {
    Logo,
    AppName
  },
  computed: {
    ...mapState(Namespaces.root, [
      Store.States.Root.isDrawerOpened,
      Store.States.Root.isBusy
    ])
  },
  methods: {
    ...mapMutations(Namespaces.root, [
      Store.Mutations.Root.setDrawerVisibility
    ]),
    openDrawer() {
      this.setDrawerVisibility(!this.isDrawerOpened);
    }
  }
});
</script>
