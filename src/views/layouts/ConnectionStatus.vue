<template>
  <div
    class="page-container"
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <div class="content">
      <div class="heading">
        <div class="container no-margin-no-padding">
          <h1 class="text-h1 heading">Medius #622310521 Vehicle 751</h1>
        </div>
      </div>

      <v-container class="no-margin-no-padding">
        <!-- Network row  -->
        <h4 class="row-heading">Network</h4>
        <v-row>
          <v-col cols="3">
            <status-card
              :title="cellularNetwork"
              subTitle="Signal strong (8)"
            />
          </v-col>
          <v-col cols="3">
            <status-card :title="gps" :subTitle="coordinates" />
          </v-col>
          <v-col cols="3">
            <status-card :title="router" subTitle="192.168.100.1" />
          </v-col>
        </v-row>
        <!-- end Network row  -->
        <!-- Services row  -->
        <br />
        <h4 class="row-heading">Service</h4>
        <v-row>
          <v-col cols="3">
            <status-card :title="server" subTitle="192.168.100.105" />
          </v-col>
          <v-col cols="3">
            <status-card :title="mdt" subTitle="192.168.100.101" />
          </v-col>
          <v-col cols="3">
            <status-card
              :title="dcu"
              subTitle="192.168.100.104"
              text="Cubic farebox tablet"
            />
          </v-col>
          <v-col cols="3">
            <status-card :title="vehicleDiagnostics" subTitle="9600 Bd" />
          </v-col>
        </v-row>
        <!-- end Services row  -->
        <!-- Hardware row  -->
        <br />
        <h4 class="row-heading">Hardware</h4>
        <v-row>
          <v-col cols="3">
            <status-card :title="irisApc" subTitle="192.168.100.106" />
          </v-col>
          <v-col cols="3">
            <status-card :title="irisApc" />
          </v-col>
          <v-col cols="3">
            <status-card :title="passengerCount" />
          </v-col>
          <v-col cols="3">
            <status-card :title="passengerCount" subTitle="192.168.100.108" />
          </v-col>
        </v-row>
        <!-- end Hardware row  -->
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import StatusCard from "../../components/StatusCard.vue";
import { mapActions, mapState } from "vuex";
import { Namespaces, StoreActions, ViewConstants } from "@/constants";

export default Vue.extend({
  async created() {
    await this.getCellularStatus();
  },
  components: {
    StatusCard
  },
  data() {
    return {
      cellularNetwork: ViewConstants.CellularNetwork,
      gps: ViewConstants.Gps,
      router: ViewConstants.Router,
      server: ViewConstants.Server,
      mdt: ViewConstants.MDT,
      dcu: ViewConstants.DCU,
      vehicleDiagnostics: ViewConstants.VehicleDiagnostic,
      irisApc: ViewConstants.IrisAPC,
      passengerCount: ViewConstants.PassengerCounter,
      coordinates: "-43.5412354\n172.6036941"
    };
  },
  methods: {
    ...mapActions(Namespaces.connectionStatus, [
      StoreActions.sendCellularNetworkHubRequest
    ]),
    async getCellularStatus() {
      var status = await this.sendCellularNetworkHubRequest();
    }
  }
});
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.no-margin-no-padding {
  margin: 0 !important;
  padding: 0 !important;
}

h1.heading {
  font-size: $font-size-heading1 !important;
  font-weight: 400;
}

.page-container {
  height: 100%;
  // padding-top: $padding-large;
}

.content {
  width: 1000px;
  margin: 0 auto;
}

.row-heading {
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
