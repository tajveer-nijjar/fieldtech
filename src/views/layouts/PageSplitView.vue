<template>
  <split-view>
    <template v-slot:left>
      <toolbar-view title="Split View">
        <template v-slot:extension>
          <v-tabs color="accent">
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
          </v-tabs>
        </template>
        <template v-slot:content>
          <v-skeleton-loader
            boilerplate
            type="list-item-avatar-two-line"
            :key="index"
            v-for="index in 40"
          />
        </template>
        <template v-slot:actions>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </toolbar-view>
    </template>
    <template v-slot:right>
      <v-responsive
        width="100%"
        height="100%"
        :class="[
          { 'blue-grey lighten-5': !$vuetify.theme.dark },
          { black: $vuetify.theme.dark }
        ]"
        content-class="pa-3 overflow-y-auto"
      >
        <v-row>
          <v-col
            cols="12"
            md="8"
            lg="6"
            offset-md="2"
            offset-lg="3"
            :key="index"
            v-for="index in 5"
          >
            <v-skeleton-loader
              boilerplate
              type="list-item-avatar-three-line, image, article"
              class="rounded-lg"
            />
          </v-col>
        </v-row>
      </v-responsive>
    </template>
  </split-view>
</template>

<script lang="ts">
import Vue from "vue";
import SplitView from "../templates/page/SplitView.vue";
import ToolbarView from "../templates/page/ToolbarView.vue";
export default Vue.extend({
  components: { SplitView, ToolbarView }
});
</script>
