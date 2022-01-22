<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- Iris IP address -->
      <template>
        <setting-group-item
          :title="`CanMultiplexer IP addresses`"
          subtitle="IP address of Iris sensor"
          :key="`text-field-${index}`"
        >
          <!-- <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Darktronics sign IP address"
            direction="right"
            class="text-body-2 rounded-lg"
          /> -->
        </setting-group-item>
        <v-divider
          :key="`group-1-divider-${index}`"
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Iris IP address -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  name: "CanMultiplexer",
  components: { SettingGroupItem }
});
</script>
