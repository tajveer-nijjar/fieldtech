<template>
  <ContentPage>
    <div class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden">
      <div class="content">
        <PageHeader
          :headerTitle="`Volume`"
          :headerSubtitle="`SomeThing something`"
        />
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
            <v-row id="avf">
              <v-col cols="12" lg="8" xl="12">
                <div>
                  <div class="text-subtitle-2 small-line-height text-uppercase">
                    Avf
                  </div>
                  <div class="text-caption text--secondary small-line-height">
                    Configuration used by AVF Service
                  </div>
                </div>
                <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                  <v-list
                    dense
                    :color="
                      $vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'
                    "
                  >
                    <!-- Inside -->
                    <template>
                      <SliderSettingGroupItem
                        :title="`Inside`"
                        :hint="`Inside volume`"
                        v-model="insideVolume"
                      />
                      <v-divider
                        :class="[
                          { 'grey lighten-3': !$vuetify.theme.dark },
                          { black: $vuetify.theme.dark }
                        ]"
                      />
                    </template>
                    <!-- end Inside -->

                    <!-- Outside -->
                    <template>
                      <SliderSettingGroupItem
                        :title="`Outside`"
                        :hint="`Outside volume`"
                        v-model="outsideVolume"
                      />
                      <v-divider
                        :class="[
                          { 'grey lighten-3': !$vuetify.theme.dark },
                          { black: $vuetify.theme.dark }
                        ]"
                      />
                    </template>
                    <!-- end Outside -->

                    <!-- Mic -->
                    <SliderSettingGroupItem
                      :title="`Mic`"
                      :hint="`Mic volume`"
                      v-model="micVolume"
                    />
                    <!-- end Mic -->
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
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
import SliderSettingGroupItem from "@/views/templates/settingGroups/SliderSettingGroupItem.vue";
import { Namespaces, StoreActions } from "@/constants";

export default Vue.extend({
  name: "Volume",
  async created() {
    await this.getVolumeData();
  },
  data: function () {
    return {
      insideVolume: 20,
      outsideVolume: 30,
      micVolume: 10
    };
  },
  components: {
    ContentPage,
    PageHeader,
    SliderSettingGroupItem
  },
  methods: {
    ...mapActions(Namespaces.volume, [
      StoreActions.getVolumeDataAsync,
      StoreActions.saveVolumeDataAsync
    ]),
    async getVolumeData() {
      await this.getVolumeDataAsync();
    }
  }
});
</script>
<style lang="scss" scoped>
.large-slider {
  width: 183px !important;
}
</style>
