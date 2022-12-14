<template>
  <ContentPage :showProgressBar="isBusy">
    <div class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden">
      <div class="content">
        <PageHeader :headerTitle="`Volume`" :headerSubtitle="``" />
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
                        v-model="volumeInternal"
                        :disable="isBusy"
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
                        v-model="volumeExternal"
                        :disable="isBusy"
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
                    <template>
                      <SliderSettingGroupItem
                        :title="`Mic`"
                        :hint="`Mic volume`"
                        v-model="volumeMicrophone"
                        :disable="isBusy"
                      />
                      <v-divider
                        :class="[
                          { 'grey lighten-3': !$vuetify.theme.dark },
                          { black: $vuetify.theme.dark }
                        ]"
                      />
                    </template>
                    <!-- end Mic -->

                    <template>
                      <SettingGroupItem>
                        <v-btn
                          rounded
                          color="accent"
                          small
                          @click="saveVolume()"
                          :disabled="isBusy || !isDirty"
                        >
                          Save
                        </v-btn>
                      </SettingGroupItem>
                    </template>
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
import SettingGroupItem from "@/views/templates/settingGroups/SettingGroupItem.vue";
import { Namespaces, StoreActions } from "@/constants";
import { States } from "@/constants/store";

export default Vue.extend({
  name: "Volume",
  async created() {
    await this.getVolumeDataAsync();
  },
  data() {
    return {
      isDirty: false
    };
  },
  components: {
    ContentPage,
    PageHeader,
    SliderSettingGroupItem,
    SettingGroupItem
  },
  methods: {
    ...mapActions(Namespaces.volume, [
      StoreActions.getVolumeDataAsync,
      StoreActions.saveVolumeDataAsync
    ]),
    async saveVolume() {
      await this.saveVolumeDataAsync(this.volumeData);
    }
  },
  computed: {
    ...mapState(Namespaces.volume, [
      States.VolumeStoreStates.volumeData,
      States.Root.isBusy
    ]),
    volumeInternal: {
      get(): number {
        return this.volumeData?.avf?.volumeInternal;
      },
      set(newValue: number) {
        if (this.volumeData && this.volumeData.avf) {
          this.volumeData.avf.volumeInternal = newValue;
        }
        this.isDirty = true;
      }
    },
    volumeExternal: {
      get(): number {
        return this.volumeData?.avf?.volumeExternal;
      },
      set(newValue: number) {
        if (this.volumeData && this.volumeData.avf) {
          this.volumeData.avf.volumeExternal = newValue;
        }
        this.isDirty = true;
      }
    },
    volumeMicrophone: {
      get(): number {
        return this.volumeData?.avf?.volumeMicrophone;
      },
      set(newValue: number) {
        if (this.volumeData && this.volumeData.avf) {
          this.volumeData.avf.volumeMicrophone = newValue;
        }
        this.isDirty = true;
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.large-slider {
  width: 183px !important;
}
</style>
