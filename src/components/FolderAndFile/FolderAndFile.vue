<template>
  <div>
    <v-treeview
      v-model="tree"
      :open="initiallyOpen"
      :items="calculate()"
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
          <v-icon v-if="item.file"> mdi-download </v-icon>
        </v-btn>
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
    initiallyOpen: ["NetworkConfigFiles123"],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel"
    },
    tree: [],
    items: [
      {
        name: ".git"
      },
      {
        name: "node_modules"
      },
      {
        name: "public",
        children: [
          {
            name: "dynamic"
          },
          {
            name: "static",
            children: [
              {
                name: "logo.png",
                file: "png"
              }
            ]
          },
          {
            name: "favicon.ico",
            file: "png"
          },
          {
            name: "index.html",
            file: "html"
          }
        ]
      },
      {
        name: ".gitignore",
        file: "txt"
      },
      {
        name: "babel.config.js",
        file: "js"
      },
      {
        name: "package.json",
        file: "json"
      },
      {
        name: "README.md",
        file: "md"
      },
      {
        name: "vue.config.js",
        file: "js"
      },
      {
        name: "yarn.lock",
        file: "txt"
      }
    ]
  }),
  components: {
    // SettingGroupItem
  },
  props: {
    foldername: { type: String, default: "" },
    date: { type: String, default: "" },
    logs: { type: Object, default: new Logs() }
  },
  methods: {
    calculate(): any[] {
      var y = DummyData();
      var z = this.items;
      var x = folderAndFilesToTreeConverter(y);
      return x;
    }
  }
});
</script>
