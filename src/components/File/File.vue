<template>
  <div>
    <setting-group-item
      :title="filename"
      :subtitle="date"
      :icon="`mdi-file-document-outline`"
    >
      <div class="d-flex align-center">
        <div class="text-caption">
          {{ size }}
        </div>

        <v-btn class="mx-2" plain>
          <v-icon dark> mdi-download </v-icon>
        </v-btn>
        <!-- <v-text-field
          solo
          flat
          :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
          dense
          hide-details
          single-line
          filled
          placeholder="BiAmp IP address"
          direction="right"
          class="text-body-2 rounded-lg"
        /> -->
        <!-- v-model="avfData.biAmpAddress"
        v-if="avfData" -->
      </div>
    </setting-group-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  name: "File",
  components: {
    SettingGroupItem
  },
  props: {
    filename: { type: String, default: "" },
    date: { type: String, default: "" },
    size: { type: String, default: "" }
  }
});
</script>
