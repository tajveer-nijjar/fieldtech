<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- Protocol -->
      <template>
        <setting-group-item
          :title="`Protocol`"
          subtitle="Protocol used by vehicle diagnostics service"
        >
          <v-select
            :items="protocolItems"
            class="text-body-2 cubicCanPort-select"
            background-color="grey lighten-3"
            dense
            filled
            solo
            flat
            v-model="calculateDefaultProtocol"
            v-if="vehicleDiagnosticsData"
          ></v-select>
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Protocol -->

      <!-- Via Radio -->
      <template>
        <setting-group-item
          :title="`ViaRadio`"
          subtitle="Enable when use vehicle diagnostics on a radio vehicle"
        >
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="vehicleDiagnosticsData.viaRadio"
            v-if="vehicleDiagnosticsData"
          />
        </setting-group-item>
      </template>
      <!-- End Via Radio -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { VehicleDiagnostics } from "@/models/core";
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  name: "VehicleDiagnostics",
  components: { SettingGroupItem },
  props: {
    vehicleDiagnosticsData: { type: Object as PropType<VehicleDiagnostics> }
  },
  data() {
    return {
      protocolItems: ["J1939", "Unknown"]
    };
  },
  computed: {
    calculateDefaultProtocol(): string {
      return this.protocolItems[this.vehicleDiagnosticsData.protocol ?? 0];
    }
  }
});
</script>

<style lang="scss" scoped>
.cubicCanPort-select {
  width: 200px !important;
}
</style>
