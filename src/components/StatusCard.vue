<template>
  <v-card max-height="250" height="200" class="rounded-xl" outlined>
    <div class="container">
      <div class="content">
        <div class="icon-container">
          <v-icon large color="black"> {{ calculatedIcon }}</v-icon>
        </div>
        <p class="text-subtitle2 card-title">{{ title }}</p>
        <p class="text-caption card-subtitle2">{{ subTitle2 }}</p>
        <p class="card-subtitle">{{ subTitle }}</p>
        <div class="status-icon">
          <status-dot-icon />
        </div>
      </div>
    </div>
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
    subTitle2: String,
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
          iconName = "$mdtIcon";
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
<style lang="scss" scoped>
@import "@/styles/variables.scss";

p {
  padding: 0;
  margin: 0;
}

.container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.content {
  padding: $padding-extra-large;
  position: relative;
  height: 100%;
}

.icon-container {
  margin-bottom: $margin-medium;
}

.card-title {
  font-size: 14px !important;
  font-weight: 600;
}

.card-subtitle {
  font-size: 12px !important;
}

.card-subtitle2 {
  font-size: 12px !important;
  color: $secondary-icon-color;
}

.status-icon {
  position: absolute;
  bottom: 20px;
}
</style>
