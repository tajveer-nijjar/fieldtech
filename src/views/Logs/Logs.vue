<template>
  <ContentPage :showProgressBar="isBusy">
    <div class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden">
      <div class="content">
        <PageHeader :headerTitle="`Logs`" :headerSubtitle="``" />
        <template>
          <div
            ref="content"
            class="
              px-4
              py-3
              fill-height
              overflow-y-auto overflow-x-hidden
              right-container
            "
          >
            <v-card
              flat
              rounded="lg"
              class="mt-3 mb-6 overflow-hidden"
              :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-4'"
            >
              <v-row id="search-and-refresh">
                <v-col cols="12" lg="8" xl="12">
                  <SearchAndRefresh @onRefreshClicked="onRefreshLogsClicked" />
                </v-col>
              </v-row>
              <v-row class="files-and-folders-content">
                <v-col cols="12" lg="8" xl="12">
                  <FolderAndFile :data="logsData" />
                </v-col>
              </v-row>
            </v-card>
          </div>
        </template>
      </div>
    </div>
  </ContentPage>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import ContentPage from "@/components/Page/ContentPage.vue";
import PageHeader from "@/components/Page/PageHeader.vue";
import SearchAndRefresh from "@/components/SearchAndRefresh/SearchAndRefresh.vue";
import FolderAndFile from "@/components/FolderAndFile/FolderAndFile.vue";
import { Namespaces, StoreActions } from "@/constants";
import { States } from "@/constants/store";

export default Vue.extend({
  name: "Logs",
  async created() {
    await this.getLogs();
  },
  components: {
    ContentPage,
    PageHeader,
    SearchAndRefresh,
    FolderAndFile
  },
  computed: {
    ...mapState(Namespaces.logs, [
      States.LogsStoreStates.logsData,
      States.LogsStoreStates.isBusy
    ])
  },
  methods: {
    ...mapActions(Namespaces.logs, [
      StoreActions.getLogsAsync,
      StoreActions.getLogAsync
    ]),
    async getLogs() {
      await this.getLogsAsync();
    },
    async onRefreshLogsClicked() {
      await this.getLogsAsync();
    }
  }
});
</script>

<style lang="scss" scoped>
.files-and-folders-content {
  margin-top: 0;
}
</style>
