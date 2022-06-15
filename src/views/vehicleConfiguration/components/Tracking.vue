<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- GPS port -->
      <template>
        <setting-group-item :title="`GPS port`">
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="GPS Port"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="extractGpsPortOutOfIPAddress"
            v-if="trackingData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End GPS port -->

      <!-- GPS IP Address -->
      <template>
        <setting-group-item
          :title="`GPS IP address`"
          subtitle="GPS IP address and port"
        >
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="GPS IP address"
            direction="right"
            class="text-body-2 rounded-lg"
            v-model="extractIPAddress"
            v-if="trackingData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End GPS IP Address -->

      <!-- MQTT -->
      <template>
        <setting-group-item
          :title="`Mqtt`"
          subtitle="Mqtt-based tracking service"
        >
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="trackingData.mqttEnable"
            v-if="trackingData"
          />
        </setting-group-item>
      </template>
      <!-- End MQTT -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { Tracking } from "@/models/core";

export default Vue.extend({
  name: "Tracking",
  components: { SettingGroupItem },
  props: {
    trackingData: { type: Object as PropType<Tracking> }
  },
  data() {
    return {};
  },
  computed: {
    extractGpsPortOutOfIPAddress(): string {
      let indexOfColon,
        portAddress = "";
      if (this.trackingData.gpsPort !== null) {
        indexOfColon = this.trackingData.gpsPort.indexOf(":");
        portAddress = this.trackingData.gpsPort.substring(
          indexOfColon + 1,
          this.trackingData.gpsPort.length
        );
      }
      return portAddress;
    },
    extractIPAddress(): string {
      let indexOfColon,
        ipAddress = "";
      if (this.trackingData.gpsPort !== null) {
        indexOfColon = this.trackingData.gpsPort.indexOf(":");
        ipAddress = this.trackingData.gpsPort.substring(0, indexOfColon);
      }
      return ipAddress;
    }
  }
});
</script>
<style lang="scss" scoped>
.cubicCanPort-select {
  width: 200px !important;
}
</style>
