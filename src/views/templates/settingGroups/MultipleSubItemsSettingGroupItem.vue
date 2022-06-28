<template>
  <div>
    <setting-group-item
      :title="`Iris IP addresses`"
      subtitle="IP address of Iris sensor"
    >
      <v-subheader>{{ this.ipAddresses.length }}</v-subheader>
    </setting-group-item>
    <template v-for="(item, index) in ipAddresses">
      <div :key="index">
        <setting-group-item
          :isDense="true"
          :classes="`pl-lg-12 subgroup-height`"
          :title="item"
        >
          <v-btn icon>
            <v-icon small> mdi-dots-vertical </v-icon>
          </v-btn>
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark },
            `ml-lg-12`,
            `mr-lg-6`
          ]"
        />
      </div>
    </template>
    <template>
      <add-record-input-field-group-item />
      <button-setting-group-item />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import ButtonSettingGroupItem from "@/views/templates/settingGroups/ButtonSettingGroupItem.vue";
import AddRecordInputFieldGroupItem from "@/views/templates/settingGroups/AddRecordInputFieldGroupItem.vue";

export default Vue.extend({
  components: {
    SettingGroupItem,
    ButtonSettingGroupItem,
    AddRecordInputFieldGroupItem
  },
  props: {
    title: String,
    subtitle: String,
    icon: String,
    classes: String,
    ipAddresses: Array as PropType<string[]>
  }
});
</script>
