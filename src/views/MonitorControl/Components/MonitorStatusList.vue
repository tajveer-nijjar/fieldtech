<template>
  <div>
    Monitor status list
    <div class="content">
      <v-card elevation="0" class="dark-card">
        <v-card-text
          class="dark-card-text d-flex"
          :value="index"
          :key="`status-${index}`"
          v-for="(status, index) in statuses"
        >
          <div>
            {{ status.date }}
          </div>
          <div class="monitor-status">
            {{ status.status }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MonitorStatusList",
  props: {
    statuses: { type: Array }
  }
});
</script>

<style lang="scss">
.dark-card {
  background: #212121 !important;
  height: calc(100vh - 300px);
}

.dark-card-text {
  color: white !important;
  padding-top: 8px;
  padding-bottom: 8px;
}

.monitor-status {
  margin-left: 64px !important;
}
</style>
