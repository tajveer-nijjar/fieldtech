<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- AVF -->
      <template>
        <setting-group-item :title="`AVF`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.avf"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End AVF -->

      <!-- CanMultiplexer -->
      <template>
        <setting-group-item :title="`CanMultiplexer`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.canmultiplexer"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End CanMultiplexer -->

      <!-- J1587 -->
      <template>
        <setting-group-item :title="`J1587`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.j1587"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End J1587 -->

      <!-- Tracking -->
      <template>
        <setting-group-item :title="`Tracking`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.tracking"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Tracking -->

      <!-- Vehicle diagnostics -->
      <template>
        <setting-group-item :title="`Vehicle diagnostics`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.vehicleDiagnostics"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Vehicle diagnostics -->

      <!-- GPS replacer -->
      <template>
        <setting-group-item :title="`GPS replacer`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.gpsReplacer"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End GPS replacer -->

      <!-- Announcement -->
      <template>
        <setting-group-item :title="`Announcement`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="serviceOptionData.announcement"
            v-if="serviceOptionData"
          />
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Announcement -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { ServiceOption } from "@/models/core";

export default Vue.extend({
  name: "ServiceStatus",
  components: { SettingGroupItem },
  props: {
    serviceOptionData: { type: Object as PropType<ServiceOption> }
  }
});
</script>
