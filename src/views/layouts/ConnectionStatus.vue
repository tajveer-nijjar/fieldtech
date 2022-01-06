<template>
  <div
    class="page-container"
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <div class="content">
      <div class="heading">
        <div class="container">
          <p class="text-p heading">Medius #622310521 Vehicle 751</p>
        </div>
      </div>

      <v-container>
        <v-row>
          <v-col cols="3">
            <status-card
              :title="cellularNetwork"
              subTitle="Signal strong (8)"
              text="Cubic farebox tablet"
            />
          </v-col>
          <v-col cols="3">
            <status-card :title="gps" />
          </v-col>
          <v-col cols="3">
            <status-card :title="router" />
          </v-col>
        </v-row>
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
      router: ViewConstants.Router
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
.container {
  margin: 0;
  padding: 0;
}

p.heading {
  font-size: $font-size-heading1 !important;
  font-weight: 400;
}

.page-container {
  height: 100%;
  padding-top: 32px;
}

.content {
  width: 1000px;
  margin: 0 auto;
}
</style>
