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
            v-model="avfData.biAmpAddress"
            v-if="avfData"
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
            v-model="avfData.brightSignAddress"
            v-if="avfData"
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
            v-model="avfData.daktronicsAddress"
            v-if="avfData"
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
        <MultipleSubItemsSettingGroupItem
          :title="`Iris IP addresses`"
          subtitle="IP address of Iris sensor"
          :ipAddresses="calculateIrisAddressesArray"
          v-if="avfData"
          @onNewIPAddressAdded="onNewIrisIPAddressAdded"
          @onIPAddressDeleted="onIrisIPAddressDeleted"
        />
      </template>
      <!-- End Iris IP address -->

      <!-- Cubic -->
      <template>
        <setting-group-item :title="`Cubic`" subtitle="">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="avfData.enableCubic"
            v-if="avfData"
          />
        </setting-group-item>
        <setting-group-item
          :title="`CubicCan port`"
          :classes="`pl-lg-12 subgroup-height`"
          subtitle="can0 for radio bus, vcan0 for cellular bus"
        >
          <v-select
            :items="cubicCanPortItems"
            class="text-body-2 cubicCanPort-select"
            :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
            dense
            filled
            solo
            flat
            v-model="calculateCubicCanPort"
            v-if="avfData"
          ></v-select>
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
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="avfData.enableMedia"
            v-if="avfData"
          />
        </setting-group-item>
        <setting-group-item
          :title="`Full width heading`"
          :classes="`pl-lg-12 subgroup-height`"
          subtitle="Show full-width destination in media player if enabled"
        >
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="avfData.fullWidthHeading"
            v-if="avfData"
          />
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
      <template>
        <setting-group-item title="Vehicle type">
          <v-btn-toggle
            v-model="avfData.isFerry"
            mandatory
            dense
            rounded
            color="accent"
            v-if="avfData"
          >
            <v-btn small :value="false">Bus</v-btn>
            <v-btn small :value="true">Ferry</v-btn>
          </v-btn-toggle>
        </setting-group-item>
        <v-divider
          :class="[
            { 'grey lighten-3': !$vuetify.theme.dark },
            { black: $vuetify.theme.dark }
          ]"
        />
      </template>
      <!-- End Vehicle type -->

      <!-- Uta -->
      <template>
        <setting-group-item :title="`Uta enable RS232APC`">
          <v-switch
            dense
            inset
            hide-details
            color="accent"
            v-model="avfData.utaEnableRs232APC"
            v-if="avfData"
          />
        </setting-group-item>
      </template>
      <!-- End Uta -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { mapActions, mapState } from "vuex";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import MultipleSubItemsSettingGroupItem from "@/views/templates/settingGroups/MultipleSubItemsSettingGroupItem.vue";
import { Avf } from "@/models/core";
import { Namespaces, StoreActions } from "@/constants";

export default Vue.extend({
  name: "Avf",
  components: {
    SettingGroupItem,
    MultipleSubItemsSettingGroupItem
  },
  props: {
    avfData: { type: Object as PropType<Avf> }
  },
  data() {
    return {
      index: 0,
      cubicCanPortItems: ["can0", "vcan0"]
    };
  },
  computed: {
    calculateCubicCanPort(): string {
      return this.cubicCanPortItems[this.avfData.cubicCanPort ?? 0];
    },
    calculateIrisAddressesArray(): string[] {
      var arr = this.avfData.irisAddress
        //Converting into array
        ?.split(",")
        //Removing empty strings
        .filter((address) => {
          if (address.trim() !== "") {
            return address;
          }
        });
      return arr ?? [];
    }
  },
  methods: {
    ...mapActions(Namespaces.vehicleConfiguration, [
      StoreActions.removeIrisIPAddress
    ]),
    onNewIrisIPAddressAdded(text: string) {
      const regExp = /^,/;
      var combinedText = `${this.avfData.irisAddress},${text}`
        .replace(regExp, "") //Replacing ,
        .trim();
      this.avfData.irisAddress = combinedText;
    },
    onIrisIPAddressDeleted(item: number) {
      this.removeIrisIPAddress(item);
    }
  }
});
</script>
<style lang="scss" scoped>
.cubicCanPort-select {
  width: 200px !important;
}

.subgroup-height {
  height: 60px !important;
}
</style>
