<template>
  <v-app-bar
    app
    flat
    clipped-left
    :color="$vuetify.theme.dark ? 'black' : 'white'"
    class="cnx-app-bar"
  >
    <v-app-bar-nav-icon
      @click="openDrawer()"
      v-if="$vuetify.breakpoint.smAndDown"
    />
    <template v-if="$vuetify.breakpoint.lgAndUp">
      <logo />
      <v-divider vertical inset class="mx-3 grey lighten-3" />
    </template>
    <app-name class="mr-6" />
    <v-spacer />
    <!-- Action button exmaples -->
    <v-btn icon @click="handleThemeClicked()">
      <v-icon v-if="$vuetify.theme.dark">mdi-lightbulb</v-icon>
      <v-icon v-else>mdi-lightbulb-on</v-icon>
    </v-btn>
    <!---->
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
    },
    handleThemeClicked() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
});
</script>
