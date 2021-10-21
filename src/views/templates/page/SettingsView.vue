<template>
  <toolbar-view title="Settings">
    <template v-slot:actions v-if="!!$slots.actions">
      <slot name="actions" />
    </template>
    <template v-slot:content>
      <split-view persistent-right>
        <template v-slot:left>
          <v-list dense nav>
            <v-list-item
              link
              :key="index"
              v-for="(item, index) in menuItems"
              @click="handleItemClicked(item)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
        <template v-slot:right>
          <div
            ref="content"
            class="px-4 py-3 fill-height overflow-y-auto overflow-x-hidden"
          >
            <v-row
              :key="`content-item-${index}`"
              :ref="getSlotNameByIndex(index)"
              v-for="(item, index) in menuItems"
            >
              <v-col cols="12" lg="7">
                <div>
                  <div class="text-subtitle-2 small-line-height">
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
  computed: {
    hash(): string {
      return this.$route.hash;
    }
  },
  mounted() {
    this.scrollToHash(this.hash);
  },
  methods: {
    checkActive(item: MenuItem): boolean {
      return (
        this.$route.name === item.name &&
        this.$route.hash != null &&
        item.hash != null &&
        this.$route.hash.includes(item.hash)
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
      let offsetTop = 0;

      if (item && item.hash) {
        const elements = this.$refs[item.hash] as HTMLElement[];

        if (elements) {
          offsetTop = elements[0].offsetTop;
        }
      }

      const contentEl = this.$refs.content as HTMLElement;

      if (!contentEl) {
        return;
      }

      contentEl.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    },
    scrollToHash(hash: string): void {
      const item = this.menuItems.find(
        (item) => item.hash != null && hash.includes(item.hash)
      );

      this.scrollToItem(item);
    }
  },
  watch: {
    hash: function (val: string) {
      this.scrollToHash(val);
    }
  }
});
</script>
