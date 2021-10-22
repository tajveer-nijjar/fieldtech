<template>
  <settings-view :menuItems="menuItems">
    <template v-slot:actions>
      <v-btn icon color="accent">
        <v-icon>mdi-edit</v-icon>
      </v-btn>
    </template>
    <template v-slot:group1>
      <setting-group />
    </template>
    <template v-slot:group2><setting-group /></template>
    <template v-slot:group3><setting-group :repeat="1" /></template>
    <template v-slot:group4><setting-group :repeat="1" /></template>
    <template v-slot:group5><setting-group :repeat="1" /></template>
  </settings-view>
</template>

<script lang="ts">
import { PageNames } from "@/constants";
import { MenuItem } from "@/interfaces/core";
import Vue from "vue";
import SettingsView from "./templates/page/SettingsView.vue";
import SettingGroup from "./templates/settingGroups/SettingGroup.vue";

export default Vue.extend({
  components: {
    SettingsView,
    SettingGroup
  },
  data() {
    return {
      menuItems: [
        {
          name: PageNames.Settings,
          title: "Setting group 1",
          subtitle: "Description for setting group 1",
          route: this.$route.path,
          hash: "group1"
        },
        {
          name: PageNames.Settings,
          title: "Setting group 2",
          subtitle: "Description for setting group 2",
          route: this.$route.path,
          hash: "group2"
        },
        {
          name: PageNames.Settings,
          title: "Setting group 3",
          route: this.$route.path,
          hash: "group3"
        },
        {
          name: PageNames.Settings,
          title: "Setting group 4",
          subtitle:
            "This group cannot be selected on the navigation programmatically on PC",
          route: this.$route.path,
          hash: "group4"
        },
        {
          name: PageNames.Settings,
          title: "Setting group 5",
          route: this.$route.path,
          hash: "group5"
        }
      ] as MenuItem[]
    };
  }
});
</script>
