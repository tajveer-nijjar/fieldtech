<template>
  <div
    class="page-container"
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <div class="content">
      <v-container>
        <v-row>
          <v-col cols="3" class="px-6">
            <status-card
              :title="cellularNetwork"
              subTitle="Signal strong (8)"
              subTitle2="Cubic farebox tablet"
            />
          </v-col>
          <v-col cols="3" class="px-6">
            <status-card :title="gps" />
          </v-col>
          <v-col cols="3" class="px-6">
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
.page-container {
  height: 100%;
  padding-top: 32px;
}

.content {
  width: 1000px;
  margin: 0 auto;
}
</style>
