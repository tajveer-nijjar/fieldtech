<template>
  <div>
    <v-card elevation="2">
      <p>Cellular network</p>
      <p>Status -</p>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Namespaces, StoreActions } from "@/constants";
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  async created() {
    await this.getCellularStatus();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(Namespaces.connectionStatus, [
      StoreActions.getCellularNetworkStatusAsync
    ]),
    async getCellularStatus() {
      var status = await this.getCellularNetworkStatusAsync();
    }
  }
});
</script>
