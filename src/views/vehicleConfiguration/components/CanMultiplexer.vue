<template>
  <div class="container">
    <v-list
      dense
      :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
    >
      <!-- Iris IP address -->
      <template>
        <MultipleSubItemsSettingGroupItem
          :title="`Iris IP addresses`"
          subtitle="IP address of Iris sensor"
          :ipAddresses="calculateCanMultiplexerAddressesArray"
          v-if="canMultiplexerData"
          @onNewIPAddressAdded="onNewCanMultiplexIPAddressAdded"
        />
      </template>
      <!-- End Iris IP address -->
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import MultipleSubItemsSettingGroupItem from "@/views/templates/settingGroups/MultipleSubItemsSettingGroupItem.vue";
import { CanMultiplexer } from "@/models/core";

export default Vue.extend({
  name: "CanMultiplexer",
  components: {
    // SettingGroupItem,
    MultipleSubItemsSettingGroupItem
  },
  props: {
    canMultiplexerData: { type: Object as PropType<CanMultiplexer> }
  },
  computed: {
    calculateCanMultiplexerAddressesArray(): string[] {
      var arr = this.canMultiplexerData.canMultiPlex
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
    onNewCanMultiplexIPAddressAdded(text: string) {
      const regExp = /^,/;

      var combinedText = `${this.canMultiplexerData.canMultiPlex},${text}`
        .replace(regExp, "") //Replacing ,
        .trim();
      this.canMultiplexerData.canMultiPlex = combinedText;
    }
  },
  data() {
    return {
      index: 1
    };
  }
});
</script>
