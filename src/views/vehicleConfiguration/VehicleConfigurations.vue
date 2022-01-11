<template>
  <div>
    <avf2 />
    <settings-view :menuItems="menuItems" title="Vehicle Configuration">
      <template v-slot:actions>
        <v-btn icon color="accent">
          <v-icon>mdi-edit</v-icon>
        </v-btn>
      </template>
      <!-- <template v-slot:avf><setting-group /></template>
    <template v-slot:canMultiplexer><setting-group /></template>
    <template v-slot:common><setting-group :repeat="1" /></template>
    <template v-slot:tracking><setting-group :repeat="1" /></template>
    <template v-slot:diagnostics><setting-group :repeat="1" /></template>
    <template v-slot:ethernet><setting-group :repeat="1" /></template>
    <template v-slot:wifi><setting-group :repeat="1" /></template>
    <template v-slot:can><setting-group :repeat="1" /></template>
    <template v-slot:serviceStatus><setting-group :repeat="1" /></template> -->
    </settings-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import SettingsView from "../templates/page/SettingsView.vue";
import SettingGroup from "../templates/settingGroups/SettingGroup.vue";
import Avf2 from "./components/Avf.vue";
import { MenuItem } from "@/interfaces/core";

export default Vue.extend({
  components: {
    SettingsView,
    // SettingGroup,
    Avf2
  },
  data() {
    return {
      menuItems: [
        {
          name: this.$route.name,
          title: "AVF",
          subtitle: "Configuration used by AVF Service",
          route: this.$route.path,
          hash: "avf"
        },
        {
          name: this.$route.name,
          title: "CanMultiplexer",
          subtitle: "Confiugration used by CanMultiplexer Service",
          route: this.$route.path,
          hash: "canMultiplexer"
        },
        {
          name: this.$route.name,
          title: "Common",
          subtitle:
            "Common configuration shared by all services on the vehicle",
          route: this.$route.path,
          hash: "common"
        },
        {
          name: this.$route.name,
          title: "Tracking",
          subtitle: "Configuratin used by tracking service",
          route: this.$route.path,
          hash: "tracking"
        },
        {
          name: this.$route.name,
          title: "Vehicle Diagnostics",
          subtitle: "Configuratin used by tracking service",
          route: this.$route.path,
          hash: "diagnostics"
        },
        {
          name: this.$route.name,
          title: "Ethernet",
          route: this.$route.path,
          hash: "ethernet"
        },
        {
          name: this.$route.name,
          title: "Wifi",
          route: this.$route.path,
          hash: "wifi"
        },
        {
          name: this.$route.name,
          title: "Can1",
          route: this.$route.path,
          hash: "can"
        },
        {
          name: this.$route.name,
          title: "Service Status",
          route: this.$route.path,
          hash: "serviceStatus"
        }
      ] as MenuItem[]
    };
  }
});
</script>
