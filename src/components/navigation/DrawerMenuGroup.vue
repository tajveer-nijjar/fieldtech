<template>
  <v-list-group
    color="accent"
    no-action
    :sub-group="subgroup"
    :group="'.?' + item.route + '.?'"
  >
    <template v-slot:prependIcon v-if="item.icon">
      <v-icon v-text="item.icon" :color="hasSelection ? 'accent' : null" />
    </template>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
        <v-list-item-subtitle v-if="item.subtitle" v-text="item.subtitle" />
      </v-list-item-content>
    </template>
    <template v-for="(subitem, index) in item.children">
      <drawer-menu-item
        v-if="!subitem.children.length"
        :key="index"
        :item="subitem"
      />
      <menu-group v-else :key="index" :item="subitem" subgroup />
    </template>
  </v-list-group>
</template>

<script lang="ts">
import DrawerMenuItem from "@/components/navigation/DrawerMenuItem.vue";
import { MenuItem } from "@/interfaces/core";
import Vue, { PropType } from "vue";

export default Vue.extend({
  components: {
    DrawerMenuItem,
    MenuGroup: () =>
      import("@/components/navigation/DrawerMenuGroup.vue") as any
  },
  props: {
    item: { type: Object as PropType<MenuItem> },
    subgroup: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false }
  },
  computed: {
    hasSelection() {
      return this.$route.path.includes(this.item.route);
    }
  }
});
</script>
