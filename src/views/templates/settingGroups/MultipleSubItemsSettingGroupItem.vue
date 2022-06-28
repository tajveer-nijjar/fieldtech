<template>
  <div>
    <setting-group-item
      :title="`Iris IP addresses`"
      subtitle="IP address of Iris sensor"
    >
      <v-subheader>{{ this.irisAddresses.length }}</v-subheader>
    </setting-group-item>
    <template v-for="(item, index) in irisAddresses">
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
            `ml-lg-12`
          ]"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  components: { SettingGroupItem },
  props: {
    title: String,
    subtitle: String,
    icon: String,
    classes: String,
    irisAddresses: Array as PropType<string[]>
  }
});
</script>
