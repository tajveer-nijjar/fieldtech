<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- Host name -->
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
            v-model="ethernetData.hostname"
            v-if="ethernetData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Host name -->

      <!-- IP Address -->
      <template>
        <setting-group-item :title="`IP address`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="IP address"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="ethernetData.address"
            v-if="ethernetData"
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
        <setting-group-item :title="`Gateway`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Gateway"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="ethernetData.gateway"
            v-if="ethernetData"
          />
        </setting-group-item>
      </template>
      <!-- End Gateway -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { EthernetConfiguration } from "@/models/core";

export default Vue.extend({
  name: "Ethernet",
  components: { SettingGroupItem },
  props: {
    ethernetData: { type: Object as PropType<EthernetConfiguration> }
  }
});
</script>
