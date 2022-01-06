<template>
  <v-card max-height="250" height="200" class="rounded-xl" outlined>
    <v-icon color="black"> {{ calculatedIcon }}</v-icon>
    <p>{{ title }}</p>
    <status-dot-icon />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

import StatusDotIcon from "@/components/icons/StatusDotIcon.vue";
import { ViewConstants } from "@/constants";

export default Vue.extend({
  components: {
    StatusDotIcon
  },
  data() {
    return {};
  },
  props: {
    title: String,
    subTitle: String,
    showData: String,
    icon: String
  },
  computed: {
    calculatedIcon: function () {
      let iconName = "";
      switch (this.title) {
        case ViewConstants.CellularNetwork:
          iconName = "mdi-signal-cellular-3";
          break;
        case ViewConstants.Gps:
          iconName = "mdi-satellite-variant ";
          break;
        case ViewConstants.Router:
          iconName = "mdi-router-wireless";
          break;
        case ViewConstants.Server:
          iconName = "mdi-server";
          break;
        case ViewConstants.MDT:
          iconName = "mdt-tablet-dashboard";
          break;
        case ViewConstants.DCU:
          iconName = "mdi-cube";
          break;
        case ViewConstants.VehicleDiagnostic:
          iconName = "mdi-stethoscope";
          break;
        case ViewConstants.IrisAPC:
          iconName = "$apcIcon";
          break;
        case ViewConstants.IrisAPC2:
          iconName = "$apcIcon";
          break;
        case ViewConstants.PassengerCounter:
          iconName = "mdi-door-sliding";
          break;
        case ViewConstants.PassengerCounter2:
          iconName = "mdi-door-sliding";
          break;
      }

      return iconName;
    }
  }
});
</script>
