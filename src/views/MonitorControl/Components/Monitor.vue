<template>
  <div>
    <ContentPage>
      <div class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden">
        <div class="content">
          <PageHeader :headerTitle="`Monitor`" :headerSubtitle="``" />
          <template>
            <v-row>
              <v-col cols="12" lg="8" xl="12">
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Message Filter
                </div>
                <div class="filters">
                  <v-chip
                    class="ma-2"
                    close
                    :value="index"
                    :key="`chip-${index}`"
                    @click:close="handleCloseFilter(index, item)"
                    v-for="(item, index) in filterItems"
                  >
                    {{ item }}
                  </v-chip>
                  <template>
                    <v-btn plain color="accent" class="ml-lg-5" small>
                      <v-icon small> mdi-plus </v-icon>
                      Add filter
                    </v-btn>
                  </template>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="8" xl="12">
                <MonitorStatusList :statuses="statuses" />
              </v-col>
            </v-row>
          </template>
        </div>
      </div>
    </ContentPage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ContentPage from "@/components/Page/ContentPage.vue";
import PageHeader from "@/components/Page/PageHeader.vue";
import MonitorStatusList from "./MonitorStatusList.vue";

export default Vue.extend({
  name: "Monitor",
  components: {
    ContentPage,
    PageHeader,
    MonitorStatusList
  },
  data() {
    return {
      filterItems: ["Alarm", "NPC", "Driver"],
      statuses: [
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" },
        { date: "18/06/2023 04:15:18", status: "GPS Good fix" }
      ]
    };
  },
  methods: {
    handleCloseFilter(index: number, item: string) {
      this.filterItems.splice(index, 1);
    }
  }
});
</script>
