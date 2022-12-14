<template>
  <v-card max-height="250" height="190" width="180" class="rounded-xl" outlined>
    <div class="container" :class="[{ 'connection-error': !isConnected }]">
      <div class="content">
        <div class="icon-container">
          <v-icon large color="black"> {{ computedIcon }} </v-icon>
        </div>

        <div class="more-info">
          <p>{{ moreInfo !== "0" ? moreInfo : "?" }}</p>
        </div>

        <v-card-title class="card-title no-marign-no-padding">
          {{ title }}
        </v-card-title>
        <v-card-text class="card-text no-marign-no-padding">
          {{ text }}
        </v-card-text>
        <v-card-subtitle class="card-subtitle no-marign-no-padding">
          {{ subTitle }}
        </v-card-subtitle>
        <div class="status-icon">
          <status-dot-icon :isConnected="isConnected" />
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
    text: String,
    icon: String,
    moreInfo: String,
    isConnected: Boolean
  },
  computed: {
    computedIcon: function () {
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

.no-marign-no-padding {
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

.more-info {
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: $font-size-heading2;
}

.card-title {
  font-size: $font-size-title !important;
  font-weight: 600;
  line-height: 1rem;
  margin-bottom: $margin-small;
}

.card-subtitle {
  font-size: $font-size-subtitle !important;
  line-height: 1rem;
}

.card-text {
  font-size: $font-size-subtitle !important;
  color: $secondary-icon-color;
  line-height: 1rem;
}

.status-icon {
  position: absolute;
  bottom: 20px;
}

.connection-error {
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid red;
}
</style>
