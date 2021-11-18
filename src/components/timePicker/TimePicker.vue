<template>
  <v-menu v-model="isMenuVisible" :close-on-content-click="false" offset-y>
    <template #activator="{ on, attrs }">
      <v-sheet
        rounded="lg"
        class="
          v-input v-text-field v-text-field--filled v-text-field--is-booted
          py-0
          my-0
        "
        v-on="on"
        v-bind="attrs"
      >
        <div class="v-input__control">
          <div class="slot v-input__slot d-flex align-center px-3">
            <v-icon left>mdi-clock-outline</v-icon>
            <div class="v-text-field__slot">
              <label
                :class="[
                  'v-label text-body-2',
                  { 'text--secondary': !isMenuVisible },
                  { 'v-label--active': isMenuVisible || date },
                  { 'primary--text': isMenuVisible }
                ]"
                style="left: 0px; right: auto; position: absolute"
              >
                Time
              </label>
              <input readonly type="text" v-model="date" class="text-body-2" />
            </div>
          </div>
        </div>
      </v-sheet>
    </template>
    <v-card><v-responsive height="10"> content</v-responsive></v-card>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isMenuVisible: false,
      date: "6:00 PM"
    };
  }
});
</script>

<style lang="scss" scoped>
.slot {
  &.v-input__slot {
    margin: 0;

    &:before {
      border-style: none;
    }
  }
}
</style>
