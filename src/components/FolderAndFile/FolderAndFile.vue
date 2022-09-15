<template>
  <div>
    <v-treeview
      v-model="tree"
      :items="calculateItemsData()"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.isFile">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else> mdi-file-document-outline </v-icon>
      </template>
      <template v-slot:append="{ item }">
        <v-btn class="mx-2" plain>
          <v-icon v-if="item.isFile"> mdi-download </v-icon>
        </v-btn>
      </template>
      <template v-slot:label="{ item }">
        <div class="subtitle-2">{{ item.name }}</div>
        <div class="caption subtitle-text" v-if="item.isFile">
          <!-- {{ item.lastMdifiedDate }} -->
          {{ formatDate(item.lastMdifiedDate) }}
        </div>
      </template>
    </v-treeview>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Logs } from "@/models/core";
import folderAndFilesToTreeConverter from "@/utils/folderAndFilesToTreeConverter";
import DummyData from "./DummyData";

export default Vue.extend({
  name: "FolderAndFile",
  data: () => ({
    tree: []
  }),
  components: {},
  props: {
    data: { type: Object, default: new Logs() }
  },
  methods: {
    calculateItemsData(): any[] {
      // var y = DummyData();
      var data = folderAndFilesToTreeConverter(this.data);
      // var data = folderAndFilesToTreeConverter(y);
      return data;
    },
    formatDate(date: string): string {
      var myDate = new Date(date);
      return myDate.toLocaleString();
    }
  }
});
</script>
<style lang="scss">
.subtitle-text {
  color: #8f8f8f;
}
</style>
