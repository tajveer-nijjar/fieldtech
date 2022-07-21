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
                      <setting-group-item :title="`Inside`">
                        <v-slider
                          hint="Inside volume"
                          max="100"
                          min="0"
                          class="text-body-2 rounded-lg large-slider"
                          color="accent"
                        ></v-slider>
                      </setting-group-item>
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
                      <setting-group-item :title="`Outside`">
                        <v-slider
                          hint="Inside volume"
                          max="100"
                          min="0"
                          class="text-body-2 rounded-lg large-slider"
                          color="accent"
                        ></v-slider>
                        <!-- v-model="avfData.biAmpAddress"
                          v-if="avfData" -->
                      </setting-group-item>
                      <v-divider
                        :class="[
                          { 'grey lighten-3': !$vuetify.theme.dark },
                          { black: $vuetify.theme.dark }
                        ]"
                      />
                    </template>
                    <!-- end Outside -->
                    <!-- Mic -->
                    <template>
                      <setting-group-item :title="`Mic`">
                        <v-slider
                          hint="Inside volume"
                          max="100"
                          min="0"
                          class="text-body-2 rounded-lg large-slider"
                          color="accent"
                        ></v-slider>
                        <!-- v-model="avfData.biAmpAddress"
                          v-if="avfData" -->
                      </setting-group-item>
                      <v-divider
                        :class="[
                          { 'grey lighten-3': !$vuetify.theme.dark },
                          { black: $vuetify.theme.dark }
                        ]"
                      />
                    </template>
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
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { Namespaces, StoreActions } from "@/constants";

export default Vue.extend({
  name: "Volume",
  async created() {
    await this.getVolumeData();
  },
  components: {
    ContentPage,
    PageHeader,
    SettingGroupItem
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
