<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- Can service name -->
      <template>
        <setting-group-item
          :title="`Can service name`"
          subtitle="can0 for radio bus, vcan0 for cellular bus"
        >
          <v-select
            :items="canServiceNameItems"
            class="text-body-2 cubicCanPort-select"
            background-color="grey lighten-3"
            dense
            filled
            solo
            flat
            v-model="calculateCanServiceName"
            v-if="commonData"
          ></v-select>
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>

      <!-- Comms Address -->
      <template>
        <setting-group-item
          :title="`Comms address`"
          subtitle="Integer between 1 and 65535"
        >
          <v-text-field
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
            v-model="commonData.commsAddress"
            v-if="commonData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { Common } from "@/models/core";

export default Vue.extend({
  name: "Common",
  components: { SettingGroupItem },
  props: {
    commonData: { type: Object as PropType<Common> }
  },
  data() {
    return {
      canServiceNameItems: ["vcan0", "vcan1"]
    };
  },
  computed: {
    calculateCanServiceName(): string {
      return this.canServiceNameItems[this.commonData.canServerName ?? 0];
    }
  }
});
</script>
<style lang="scss" scoped>
.cubicCanPort-select {
  width: 200px !important;
}
</style>
