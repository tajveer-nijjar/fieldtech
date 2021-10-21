<template>
  <settings-view :menuItems="menuItems">
    <template v-slot:actions>
      <v-btn text disabled small class="mr-3">Cancel</v-btn>
      <v-btn depressed disabled rounded small width="96">Save</v-btn>
    </template>
    <template v-slot:group1>
      <setting-group />
    </template>
    <template v-slot:group2><setting-group /></template>
    <template v-slot:group3><setting-group /></template>
    <template v-slot:group4><setting-group /></template>
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
          route: this.$route.path,
          hash: "group4"
        }
      ] as MenuItem[]
    };
  }
});
</script>
