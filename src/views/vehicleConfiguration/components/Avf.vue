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
          :key="`text-field-${index}`"
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
          :key="`group-1-divider-${index}`"
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
          :key="`text-field-${index}`"
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
          :key="`group-1-divider-${index}`"
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
          :key="`text-field-${index}`"
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
          :key="`group-1-divider-${index}`"
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
          :key="`text-field-${index}`"
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
          :key="`group-1-divider-${index}`"
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Iris IP address -->

      <!-- Cubic -->
      <template>
        <setting-group-item
          :title="`Cubic`"
          subtitle=""
          :key="`swtich-${index}`"
        >
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :key="`group-2-divider-${index}`"
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Cubic -->

      <!-- Media -->
      <template>
        <setting-group-item :title="`Media`" :key="`swtich-${index}`">
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :key="`group-2-divider-${index}`"
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
        <setting-group-item
          :title="`Uta enable RS232APC`"
          :key="`swtich-${index}`"
        >
          <v-switch dense inset hide-details color="accent" />
        </setting-group-item>
        <v-divider
          :key="`group-2-divider-${index}`"
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
import Vue from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";

export default Vue.extend({
  name: "Avf",
  components: { SettingGroupItem }
});
</script>
