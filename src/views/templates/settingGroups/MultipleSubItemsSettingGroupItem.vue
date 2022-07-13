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
      <AddRecordInputFieldGroupItem
        v-if="showAddNewIpAddressTextView"
        @onCloseButtonClick="onCloseButtonClick"
        @onTickButtonClick="onTickButtonClick"
      />
      <ButtonSettingGroupItem
        v-if="!showAddNewIpAddressTextView"
        @onAddIpAddressButtonClicked="onAddIpAddressButtonClicked"
      />
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
  data() {
    return {
      showAddNewIpAddressTextView: false
    };
  },
  props: {
    title: { type: String, default: undefined },
    subtitle: { type: String, default: undefined },
    icon: { type: String, default: undefined },
    classes: { type: String, default: undefined },
    ipAddresses: {
      type: Array as PropType<string[]>,
      default: () => new Array<string[]>()
    }
  },
  methods: {
    onAddIpAddressButtonClicked() {
      this.showAddNewIpAddressTextView = !this.showAddNewIpAddressTextView;
    },
    onCloseButtonClick() {
      this.showAddNewIpAddressTextView = !this.showAddNewIpAddressTextView;
    },
    onTickButtonClick(text: string) {
      this.$emit("onNewIPAddressAdded", text);
    }
  }
});
</script>
