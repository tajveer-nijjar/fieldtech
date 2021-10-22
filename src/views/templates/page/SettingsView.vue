<template>
  <toolbar-view title="Settings" :extentionHeight="32">
    <template v-slot:actions v-if="!!$slots.actions">
      <slot name="actions" />
    </template>
    <template v-slot:extension v-if="$vuetify.breakpoint.smAndDown">
      <v-tabs :value="tabIndex" center-active show-arrows color="accent">
        <v-tab
          :value="index"
          :key="`tab-${index}`"
          v-for="(item, index) in menuItems"
          @click="handleItemClicked(item)"
          class="text-caption font-weight-medium"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <split-view nav>
        <template v-slot:left>
          <div>
            <v-tabs :value="tabIndex" vertical color="accent" slider-size="4">
              <v-tab
                :value="index"
                :key="`tab-${index}`"
                v-for="(item, index) in menuItems"
                @click="handleItemClicked(item)"
                class="vertical-tab pl-8 text-caption font-weight-medium"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
          </div>
        </template>
        <template v-slot:right>
          <div
            ref="content"
            class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden"
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
                  <slot :name="getSlotNameByIndex(index)" />
                </v-card>
              </v-col>
            </v-row>
          </div>
        </template>
      </split-view>
    </template>
  </toolbar-view>
</template>

<script lang="ts">
import { MenuItem } from "@/interfaces/core";
import SplitView from "@/views/templates/page/SplitView.vue";
import ToolbarView from "@/views/templates/page/ToolbarView.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  components: {
    ToolbarView,
    SplitView
  },
  props: {
    menuItems: {
      type: Array as PropType<MenuItem[]>,
      default: () => new Array<MenuItem>()
    }
  },
  data() {
    return {
      tabIndex: 0,
      activeIndex: 0,
      isAutoScrolling: false, // For programmatical scrollings
      isScrolling: false, // For manual scrollings
      scrollTimeout: null as any,
      contentRef: null as null | HTMLElement
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
    checkActive(item: MenuItem): boolean {
      return (
        this.$route.name === item.name &&
        this.$route.hash != null &&
        item.hash != null &&
        this.isSameHash(this.hash, item.hash)
      );
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
    scrollToHash(hash: string): void {
      const item = this.menuItems.find((item) =>
        this.isSameHash(hash, item.hash)
      );

      this.scrollToItem(item);
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
    },
    getHashIndex(hash: string): number {
      const index = this.menuItems.findIndex((item) =>
        this.isSameHash(hash, item.hash)
      );
      return index < 0 ? 0 : index;
    },
    isSameHash(
      hash1: string | null | undefined,
      hash2: string | null | undefined
    ): boolean {
      if (!hash1 || !hash2) {
        return false;
      }

      return hash1.includes(hash2) || hash2.includes(hash1);
    }
  },
  watch: {
    isScrolling(newVal: boolean, oldVal) {
      // Scrolling has stopped
      if (!newVal && oldVal) {
        if (!this.isAutoScrolling) {
          this.tabIndex = this.activeIndex = this.getHashIndex(this.hash);
        } else {
          this.tabIndex = this.activeIndex;
        }
      }
    },
    tabIndex(tabIndex: number) {
      if (this.isAutoScrolling) {
        return;
      }

      const item = this.menuItems[tabIndex];

      if (this.isSameHash(this.hash, item.hash)) {
        return;
      }

      this.$router.push({ name: item.name, hash: "#" + item.hash });
    }
  }
});
</script>

<style lang="scss" scoped>
.vertical-tab {
  &.v-tab {
    justify-content: start !important;
  }
}
</style>
