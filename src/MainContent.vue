<template>
  <v-container fluid class="pa-0" v-if="fullscreen">
    <router-view />
  </v-container>
  <v-app id="inspire" v-else>
    <app-bar />
    <navigation-drawer />
    <v-divider />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import AppBar from "@/components/navigation/AppBar.vue";
import Vue from "vue";
import NavigationDrawer from "./components/navigation/NavigationDrawer.vue";

export default Vue.extend({
  components: {
    AppBar,
    NavigationDrawer
  },
  computed: {
    fullscreen(): boolean {
      if (
        this.$route.meta === undefined ||
        this.$route.meta.fullscreen === undefined ||
        !this.$router.currentRoute.meta
      ) {
        return false;
      }

      return this.$router.currentRoute.meta.fullscreen;
    }
  }
});
</script>
