<template>
  <div>
    <SplitView>
      <template v-slot:left>
        <div>
          <v-tabs
            :aria-valuemax="tabIndex"
            vertical
            color="accent"
            slider-size="4"
          >
            <v-tab
              :value="index"
              :key="`tab-${index}`"
              v-for="(item, index) in menuItems"
              @click="handleItemClicked(item, index)"
              class="vertical-tab pl-8 text-caption font-weight-medium a-tab"
              :class="{ active: tabIndex === index }"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </div>
      </template>
      <template v-slot:right>
        <Monitor v-if="tabIndex === 0" />
        <Control v-if="tabIndex === 1" />
      </template>
    </SplitView>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import SplitView from "@/views/templates/page/SplitView.vue";
import { MenuItem } from "@/interfaces/core";
import Control from "./Components/Control.vue";
import Monitor from "./Components/Monitor.vue";

export default Vue.extend({
  name: "MonitorControl",
  components: {
    SplitView,
    Control,
    Monitor
  },
  data() {
    return {
      tabIndex: 0,
      menuItems: [
        {
          name: this.$route.name,
          title: "Monitor",
          route: this.$route.path,
          hash: "monitor"
        },
        {
          name: this.$route.name,
          title: "Controls",
          route: this.$route.path,
          hash: "control"
        }
      ] as MenuItem[]
    };
  },
  methods: {
    handleItemClicked(item: MenuItem, index: number): void {
      this.tabIndex = index;
      this.$router.push({ hash: `#${item.hash}` });
    }
  }
});
</script>
<style lang="scss" scoped>
.a-tab {
  justify-content: start !important;
}

.right-container {
  height: calc(100vh - 64px - 48px);
}

.active {
  background: #dde6ef !important;
}
</style>
