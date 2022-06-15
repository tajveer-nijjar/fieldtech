<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- IP Address -->
      <template>
        <setting-group-item :title="`Host name`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Host name"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="wifiData.address"
            v-if="wifiData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End IP Address -->

      <!-- Gateway -->
      <template>
        <setting-group-item :title="`Host name`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Host name"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="wifiData.gateway"
            v-if="wifiData"
          />
        </setting-group-item>
      </template>
      <!-- End Gateway -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import { WifiConfigurations } from "@/models/core";
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  name: "Wifi",
  components: { SettingGroupItem },
  props: {
    wifiData: { type: Object as PropType<WifiConfigurations> }
  }
});
</script>
