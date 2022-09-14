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
                  <SearchAndRefresh />
                </v-col>
              </v-row>
              <v-row class="files-and-folders-content">
                <v-col cols="12" lg="8" xl="12">
                  <FolderAndFile />
                  <!-- <File
                    :filename="`hal_20210826.log`"
                    :date="`2021-07-11 17:24`"
                    :size="`113 kb`"
                  />
                  <File
                    :filename="`hal_20210826.log`"
                    :date="`2021-07-11 17:24`"
                    :size="`115 kb`"
                  /> -->
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
import File from "@/components/File/File.vue";
import FolderAndFile from "@/components/FolderAndFile/FolderAndFile.vue";
import { Namespaces, StoreActions } from "@/constants";

export default Vue.extend({
  name: "Logs",
  async created() {
    await this.getLogs();
  },
  components: {
    ContentPage,
    PageHeader,
    SearchAndRefresh,
    // File,
    FolderAndFile
  },
  methods: {
    ...mapActions(Namespaces.logs, [
      StoreActions.getLogsAsync,
      StoreActions.saveLogsAsync
    ]),
    async getLogs() {
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
