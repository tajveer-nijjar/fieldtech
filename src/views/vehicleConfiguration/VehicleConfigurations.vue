<template>
  <div>
    <toolbar-view title="Vehicle Configuration" :showProgressBar="isBusy">
      <v-btn rounded plain small :disabled="isBusy">Cancel</v-btn>
      <v-btn
        rounded
        color="primary"
        small
        @click="saveVehicleConfiguration()"
        :disabled="isBusy"
      >
        Save
      </v-btn>
    </toolbar-view>

    <split-view nav>
      <template v-slot:left>
        <div>
          <v-tabs :value="tabIndex" vertical color="accent" slider-size="4">
            <v-tab
              :value="index"
              :key="`tab-${index}`"
              v-for="(item, index) in menuItems"
              @click="handleItemClicked(item)"
              class="vertical-tab pl-8 text-caption font-weight-medium a-tab"
            >
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </div>
      </template>
      <template v-slot:right>
        <div
          ref="content"
          class="
            px-4
            py-3
            fill-height
            overflow-y-auto overflow-x-hidden
            right-container
          "
          v-scroll.self="contentScrollListener"
        >
          <v-row id="avf">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Avf
                </div>
                <div class="text-caption text--secondary small-line-height">
                  Configuration used by AVF Service
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <avf-component :avfData="avfData" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="canMultiplexer">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  CanMultiplexer
                </div>
                <div class="text-caption text--secondary small-line-height">
                  Confiugration used by CanMultiplexer Service
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <canMultiplexer-component />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="common">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Common
                </div>
                <div class="text-caption text--secondary small-line-height">
                  Common configuration shared by all services on the vehicle
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <common-component :commonData="commonData" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="tracking">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Tracking
                </div>
                <div class="text-caption text--secondary small-line-height">
                  Configuratin used by tracking service
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <tracking-component :trackingData="trackingData" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="vehicleDiagnostics">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Vehicle Diagnostics
                </div>
                <div class="text-caption text--secondary small-line-height">
                  Configuratin used by tracking service
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <vehicleDiagnostics-component
                  :vehicleDiagnosticsData="vehicleDiagnosticsData"
                />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="ethernet">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Ethernet
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <ethernet-component :ethernetData="ethernetData" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="wifi">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Wifi
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <wifi-component :wifiData="wifiData" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="can1">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Can1
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <can1-component :can1Data="can1Data" />
              </v-card>
            </v-col>
          </v-row>

          <v-row id="serviceStatus">
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  Service Status
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <serviceStatus-component
                  :serviceOptionData="serviceOptionData"
                />
              </v-card>
            </v-col>
          </v-row>
        </div>
      </template>
    </split-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

import AvfComponent from "./components/Avf.vue";
import Can1Component from "./components/Can1.vue";
import CanMultiplexerComponent from "./components/CanMultiplexer.vue";
import CommonComponent from "./components/Common.vue";
import EthernetComponent from "./components/Ethernet.vue";
import TrackingComponent from "./components/Tracking.vue";
import VehicleDiagnosticsComponent from "./components/VehicleDiagnostics.vue";
import WifiComponent from "./components/Wifi.vue";
import ServiceStatusComponent from "./components/ServiceStatus.vue";

import { MenuItem } from "@/interfaces/core";
import ToolbarView from "@/views/templates/page/ToolbarView.vue";
import SplitView from "@/views/templates/page/SplitView.vue";
import { Namespaces, StoreActions } from "@/constants";
import { States } from "@/constants/store";
import {
  Avf,
  Common,
  Tracking,
  CanMultiplexer,
  VehicleDiagnostics,
  EthernetConfiguration,
  WifiConfigurations,
  CanBitRate,
  ServiceOption
} from "@/models/core";
import VehicleConfigurationData from "@/models/core/vehicleConfigurationData";

export default Vue.extend({
  name: "VehicleConfigurations",
  async created() {
    await this.getVehicleConfiguration();
  },
  components: {
    AvfComponent,
    ToolbarView,
    SplitView,
    Can1Component,
    CanMultiplexerComponent,
    CommonComponent,
    EthernetComponent,
    TrackingComponent,
    VehicleDiagnosticsComponent,
    WifiComponent,
    ServiceStatusComponent
  },
  data() {
    return {
      tabIndex: 0,
      activeIndex: 0,
      isAutoScrolling: false, // For programmatical scrollings
      isScrolling: false, // For manual scrollings
      scrollTimeout: null as any,
      contentRef: null as null | HTMLElement,
      comp: "avf",
      menuItems: [
        {
          name: this.$route.name,
          title: "AVF",
          subtitle: "Configuration used by AVF Service",
          route: this.$route.path,
          hash: "avf"
        },
        {
          name: this.$route.name,
          title: "CanMultiplexer",
          subtitle: "Confiugration used by CanMultiplexer Service",
          route: this.$route.path,
          hash: "canMultiplexer"
        },
        {
          name: this.$route.name,
          title: "Common",
          subtitle:
            "Common configuration shared by all services on the vehicle",
          route: this.$route.path,
          hash: "common"
        },
        {
          name: this.$route.name,
          title: "Tracking",
          subtitle: "Configuratin used by tracking service",
          route: this.$route.path,
          hash: "tracking"
        },
        {
          name: this.$route.name,
          title: "Vehicle Diagnostics",
          subtitle: "Configuratin used by tracking service",
          route: this.$route.path,
          hash: "vehicleDiagnostics"
        },
        {
          name: this.$route.name,
          title: "Ethernet",
          route: this.$route.path,
          hash: "ethernet"
        },
        {
          name: this.$route.name,
          title: "Wifi",
          route: this.$route.path,
          hash: "wifi"
        },
        {
          name: this.$route.name,
          title: "Can1",
          route: this.$route.path,
          hash: "can1"
        },
        {
          name: this.$route.name,
          title: "Service Status",
          route: this.$route.path,
          hash: "serviceStatus"
        }
      ] as MenuItem[]
    };
  },
  computed: {
    ...mapState(Namespaces.vehicleConfiguration, [
      States.VehicleConfigurationStoreStates.vehicleConfigurationAllData,
      States.VehicleConfigurationStoreStates.isBusy
    ]),
    hash(): string {
      return this.$route.hash;
    },
    avfData(): Avf | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;
      let avfData = vehicleConfigurationAllData?.vechicleConfiguration?.avf;
      return avfData ?? null;
    },
    commonData(): Common | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;
      let common = vehicleConfigurationAllData?.vechicleConfiguration?.common;
      return common ?? null;
    },
    trackingData(): Tracking | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;
      let tracking =
        vehicleConfigurationAllData?.vechicleConfiguration?.tracking;
      return tracking ?? null;
    },
    canMultiplexerData(): CanMultiplexer | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let canMultiplexerData =
        vehicleConfigurationAllData?.vechicleConfiguration?.canMultiplexer;

      return canMultiplexerData ?? null;
    },
    vehicleDiagnosticsData(): VehicleDiagnostics | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let vehicleDiagnosticsData =
        vehicleConfigurationAllData?.vechicleConfiguration?.vehicleDiagnostics;

      return vehicleDiagnosticsData ?? null;
    },
    ethernetData(): EthernetConfiguration | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let ethernetData = vehicleConfigurationAllData?.ethernetConfiguration;

      return ethernetData ?? null;
    },
    wifiData(): WifiConfigurations | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let wifiData = vehicleConfigurationAllData?.wifiConfigurations;

      return wifiData ?? null;
    },
    can1Data(): CanBitRate | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let canBitRate = vehicleConfigurationAllData?.canBitRate;

      return canBitRate ?? null;
    },
    serviceOptionData(): ServiceOption | null {
      const vehicleConfigurationAllData: VehicleConfigurationData =
        this.vehicleConfigurationAllData;

      let serviceOption = vehicleConfigurationAllData?.serviceOption;

      return serviceOption ?? null;
    }
  },
  mounted() {
    this.contentRef = this.$refs.content as HTMLElement;
    this.scrollToHash(this.hash);
    this.tabIndex = this.activeIndex = this.getHashIndex(this.hash);
  },
  methods: {
    ...mapActions(Namespaces.vehicleConfiguration, [
      StoreActions.getVehicleConfigurationAsync,
      StoreActions.saveVehicleConfigurationAsync
    ]),
    async getVehicleConfiguration() {
      await this.getVehicleConfigurationAsync();
    },
    async saveVehicleConfiguration() {
      let vehicleConfig = this.vehicleConfigurationAllData;
      await this.saveVehicleConfigurationAsync(vehicleConfig);
    },

    getSlotNameByIndex(index: number): string {
      const item = this.menuItems[index];

      if (!item || !item.hash) {
        return "content-" + index;
      }

      return item.hash;
    },
    handleItemClicked(item: MenuItem): void {
      if (this.checkActive(item)) {
        return;
      }
      this.$router.push({ name: item.name, hash: "#" + item.hash }, () => {
        this.scrollToItem(item);
      });
    },
    checkActive(item: MenuItem): boolean {
      return (
        this.$route.name === item.name &&
        this.$route.hash != null &&
        item.hash != null &&
        this.isSameHash(this.hash, item.hash)
      );
    },
    scrollToHash(hash: string): void {
      const item = this.menuItems.find((item) =>
        this.isSameHash(hash, item.hash)
      );

      this.scrollToItem(item);
    },
    isSameHash(
      hash1: string | null | undefined,
      hash2: string | null | undefined
    ): boolean {
      if (!hash1 || !hash2) {
        return false;
      }

      return hash1.includes(hash2) || hash2.includes(hash1);
    },
    getHashIndex(hash: string): number {
      const index = this.menuItems.findIndex((item) =>
        this.isSameHash(hash, item.hash)
      );
      return index < 0 ? 0 : index;
    },
    scrollToItem(item: MenuItem | null | undefined): void {
      if (!item || !item.hash || !this.contentRef) {
        return;
      }
      this.isAutoScrolling = true;
      this.$vuetify.goTo("#" + item.hash, {
        easing: "easeInOutQuart",
        container: this.contentRef,
        offset: -48
      });
    },
    contentScrollListener(e: Event): void {
      const target = e.target as HTMLElement;
      this.isScrolling = true;

      if (!target) {
        this.isScrolling = false;
        return;
      }

      const scrollTop = target.scrollTop;
      let activeIndex = 0;

      // has scrolled to the bottom
      if (scrollTop === 0) {
        activeIndex = 0;
      } else if (
        scrollTop + target.clientHeight === target.scrollHeight &&
        !this.isAutoScrolling
      ) {
        activeIndex = this.menuItems.length - 1;
      } else {
        for (let index = 0; index < this.menuItems.length; index++) {
          const item = this.menuItems[index];

          if (!item.hash) {
            continue;
          }
          const elements = this.$refs[item.hash] as HTMLElement[];

          if (!elements) {
            return;
          }

          const element = elements[0];

          if (!element) {
            continue;
          }

          // more than a half of the element is visible
          const itemCenterOffset =
            element.offsetTop + element.clientHeight / 3 - scrollTop;

          if (itemCenterOffset >= 0) {
            activeIndex = index;
            break;
          }

          // the whole element is inside of the view
          if (
            element.offsetTop - scrollTop >= 0 &&
            element.offsetTop + element.clientHeight <= target.clientHeight
          ) {
            activeIndex = index;
            break;
          }
        }
      }

      this.activeIndex = activeIndex;

      if (this.isAutoScrolling) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }

        this.scrollTimeout = setTimeout(() => {
          this.isScrolling = false;
          this.isAutoScrolling = false;
        }, 300);

        return;
      }

      this.tabIndex = this.activeIndex;
    }
  }
});
</script>
<style lang="scss" scoped>
.a-tab {
  justify-content: start !important;
}

.right-container {
  height: calc(100vh - 64px - 48px);
}
</style>
