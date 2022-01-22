<template>
  <div>
    <toolbar-view title="Vehicle Configuration" />

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
          <v-row
            :id="item.hash"
            :key="`content-item-${index}`"
            :ref="getSlotNameByIndex(index)"
            v-for="(item, index) in menuItems"
          >
            <v-col cols="12" lg="8" xl="7">
              <div>
                <div class="text-subtitle-2 small-line-height text-uppercase">
                  {{ item.title }}
                </div>
                <div
                  class="text-caption text--secondary small-line-height"
                  v-if="item.subtitle"
                >
                  {{ item.subtitle }}
                </div>
              </div>
              <v-card flat rounded="lg" class="mt-3 mb-6 overflow-hidden">
                <!-- <avf /> -->

                <component :is="getSlotNameByIndex(index)"></component>

                <!-- <slot :name="getSlotNameByIndex(index)" /> -->
              </v-card>
            </v-col>
          </v-row>
        </div>
      </template>
    </split-view>

    <!-- <settings-view :menuItems="menuItems" title="Vehicle Configuration">
      <template v-slot:actions>
        <v-btn icon color="accent">
          <v-icon>mdi-edit</v-icon>
        </v-btn>
      </template>
      <template v-slot:avf><setting-group /></template>
      <template v-slot:canMultiplexer><setting-group /></template>
      <template v-slot:common><setting-group :repeat="1" /></template>
      <template v-slot:tracking><setting-group :repeat="1" /></template>
      <template v-slot:diagnostics><setting-group :repeat="1" /></template>
      <template v-slot:ethernet><setting-group :repeat="1" /></template>
      <template v-slot:wifi><setting-group :repeat="1" /></template>
      <template v-slot:can><setting-group :repeat="1" /></template>
      <template v-slot:serviceStatus><setting-group :repeat="1" /></template>
    </settings-view> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import SettingsView from "../templates/page/SettingsView.vue";
import SettingGroup from "../templates/settingGroups/SettingGroup.vue";
import Avf from "./components/Avf.vue";
import Can1 from "./components/Can1.vue";
import CanMultiplexer from "./components/CanMultiplexer.vue";
import Common from "./components/Common.vue";
import Ethernet from "./components/Ethernet.vue";
import Tracking from "./components/Tracking.vue";
import VehicleDiagnostics from "./components/VehicleDiagnostics.vue";
import Wifi from "./components/Wifi.vue";
import ServiceStatus from "./components/ServiceStatus.vue";

import { MenuItem } from "@/interfaces/core";
import ToolbarView from "@/views/templates/page/ToolbarView.vue";
import SplitView from "@/views/templates/page/SplitView.vue";
import { Namespaces, StoreActions } from "@/constants";

export default Vue.extend({
  name: "VehicleConfigurations",
  async created() {
    await this.getVehicleConfiguration();
  },
  components: {
    // SettingsView,
    // SettingGroup,
    Avf,
    ToolbarView,
    SplitView,
    Can1,
    CanMultiplexer,
    Common,
    Ethernet,
    Tracking,
    VehicleDiagnostics,
    Wifi,
    ServiceStatus
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
    hash(): string {
      return this.$route.hash;
    }
  },
  mounted() {
    this.contentRef = this.$refs.content as HTMLElement;
    this.scrollToHash(this.hash);
    this.tabIndex = this.activeIndex = this.getHashIndex(this.hash);
  },
  methods: {
    ...mapActions(Namespaces.vehicleConfiguration, [
      StoreActions.getVehicleConfigurationAsync
    ]),
    async getVehicleConfiguration() {
      var vehicleConfigruation = await this.getVehicleConfigurationAsync();
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
      debugger;
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
