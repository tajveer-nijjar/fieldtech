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
              @click="handleItemClicked(item)"
              class="vertical-tab pl-8 text-caption font-weight-medium a-tab"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </div>
      </template>
      <template v-slot:right> right </template>
    </SplitView>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import SplitView from "@/views/templates/page/SplitView.vue";
import { MenuItem } from "@/interfaces/core";

export default Vue.extend({
  name: "MonitorControl",
  components: {
    SplitView
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
          hash: "Control"
        }
      ] as MenuItem[]
    };
  },
  methods: {
    handleItemClicked(item: MenuItem): void {}
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
</style>
