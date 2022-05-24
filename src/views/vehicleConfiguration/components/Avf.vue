<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- BiAmp IP address -->
      <template>
        <setting-group-item
          :title="`BiAmp IP address`"
          subtitle="IP address used by BiAmp"
        >
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="BiAmp IP address"
            direction="right"
            class="text-body-2 rounded-lg"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- end BiAmp IP address -->

      <!-- Bright sign IP address -->
      <template>
        <setting-group-item
          :title="`Bright sign IP address`"
          subtitle="IP address used by Bright sign"
        >
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Bright sign IP address"
            direction="right"
            class="text-body-2 rounded-lg"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Bright sign IP address -->

      <!-- Darktronics sign IP address -->
      <template>
        <setting-group-item
          :title="`Darktronics sign IP address`"
          subtitle="IP address used by Darktronics sign"
        >
          <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Darktronics sign IP address"
            direction="right"
            class="text-body-2 rounded-lg"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Bright sign IP address -->

      <!-- Iris IP address -->
      <template>
        <setting-group-item
          :title="`Iris IP addresses`"
          subtitle="IP address of Iris sensor"
        >
          <!-- <v-text-field
            solo
            flat
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            hide-details
            single-line
            filled
            placeholder="Darktronics sign IP address"
            direction="right"
            class="text-body-2 rounded-lg"
          /> -->
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Iris IP address -->

      <!-- Cubic -->
      <template>
        <setting-group-item :title="`Cubic`" subtitle="">
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Cubic -->

      <!-- Media -->
      <template>
        <setting-group-item :title="`Media`">
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Media -->

      <!-- Vehicle type -->
      <setting-group-item title="Vehicle type">
        <v-btn-toggle mandatory dense rounded color="accent">
          <v-btn small>Bus</v-btn>
          <v-btn small>Ferry</v-btn>
        </v-btn-toggle>
      </setting-group-item>
      <!-- End Vehicle type -->

      <!-- Uta -->
      <template>
        <setting-group-item :title="`Uta enable RS232APC`">
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Uta -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { VehicleConfiguration } from "@/models/core";

export default Vue.extend({
  name: "Avf",
  components: { SettingGroupItem },
  props: {
    vehicleConfiguration: { type: Object as PropType<VehicleConfiguration> }
  },
  data() {
    return {
      index: 0
    };
  }
});
</script>
