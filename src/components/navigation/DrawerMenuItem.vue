<template>
  <v-list-item
    link
    color="accent"
    :to="item.route"
    :disabled="disabled || isBusy"
    @click="closeDrawer()"
  >
    <v-list-item-icon v-if="item.icon && item.showIcon">
      <v-icon v-text="item.icon" />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.title" />
      <v-list-item-subtitle v-if="item.subtitle" v-text="item.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Namespaces, Store } from "@/constants";
import { MenuItem } from "@/interfaces/core";
import Vue, { PropType } from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  props: {
    item: { type: Object as PropType<MenuItem> },
    disabled: { type: Boolean, default: false, required: false }
  },
  computed: {
    ...mapState(Namespaces.root, [Store.States.Root.isBusy]),
    active(): boolean {
      return this.$route.path === this.item.route;
    }
  },
  methods: {
    ...mapMutations(Namespaces.root, [
      Store.Mutations.Root.setDrawerVisibility
    ]),
    closeDrawer() {
      this.setDrawerVisibility(false);
    }
  }
});
</script>
