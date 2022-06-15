<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <template>
        <setting-group-item :title="`BitRate`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="BitRate"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="can1Data.bitRate"
            v-if="can1Data"
          />
        </setting-group-item>
      </template>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { CanBitRate } from "@/models/core";

export default Vue.extend({
  name: "Can1",
  components: { SettingGroupItem },
  props: {
    can1Data: { type: Object as PropType<CanBitRate> }
  }
});
</script>
