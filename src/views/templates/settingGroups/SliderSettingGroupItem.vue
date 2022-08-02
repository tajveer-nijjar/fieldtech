<template>
  <div>
    <setting-group-item :title="title">
      <div class="d-flex">
        <v-slider
          :hint="hint"
          max="100"
          min="0"
          class="text-body-2 rounded-lg large-slider"
          color="accent"
          track-color="orange"
          :value="this.value"
          @change="handleChange"
          :disabled="disable"
        ></v-slider>
        <v-subheader class="slider-value">{{ value }}</v-subheader>
      </div>
    </setting-group-item>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  components: {
    SettingGroupItem
  },
  props: {
    title: { type: String, default: "" },
    hint: { type: String, default: "" },
    value: { type: Number, default: 0 },
    disable: { type: Boolean, default: false }
  },
  methods: {
    handleChange(e: number) {
      this.$emit("input", e);
    }
  }
});
</script>
<style lang="scss" scoped>
.large-slider {
  width: 183px !important;
}
.slider-value {
  height: 36px !important;
}
</style>
