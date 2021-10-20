<template>
  <v-navigation-drawer
    :value="pDrawerOpened"
    app
    clipped
    touchless
    stateless
    floating
    color="grey lighten-4"
    :permanent="permanentDrawer"
    :temporary="smAndDown"
    :width="drawerWidth"
    :height="drawerHeight"
    :mini-variant="$vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly"
  >
    <v-responsive
      height="100%"
      content-class="d-flex flex-column overflow-hidden"
    >
      <div class="flex-grow-0">
        <drawer-header v-if="smAndDown" />
        <v-divider class="mb-2 mx-3 white" />
      </div>
      <div class="flex-grow-1 overflow-y-auto">
        <v-list nav :dense="!smAndDown" :disabled="isBusy">
          <template v-if="false">
            <v-list-item :key="`skeleton-${skltIndex}`" v-for="skltIndex in 4">
              <v-list-item-action>
                <v-skeleton-loader type="button" width="24" height="24" />
              </v-list-item-action>
              <v-list-item-content>
                <v-skeleton-loader type="text" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item-group color="primary" v-else>
            <template v-for="(item, index) in menuItems">
              <drawer-menu-item
                v-if="item.children.length === 0"
                :key="index"
                :item="item"
                :disabled="disabled"
              />
              <drawer-menu-group
                v-else
                :item="item"
                :key="index"
                :disabled="disabled"
              />
            </template>
          </v-list-item-group>
        </v-list>
      </div>
      <div class="flex-grow-0">
        <v-divider class="mx-3 white" />
        <drawer-profile />
      </div>
    </v-responsive>
  </v-navigation-drawer>
</template>

<script lang="ts">
import DrawerHeader from "@/components/navigation/DrawerHeader.vue";
import DrawerMenuGroup from "@/components/navigation/DrawerMenuGroup.vue";
import DrawerMenuItem from "@/components/navigation/DrawerMenuItem.vue";
import DrawerProfile from "@/components/navigation/DrawerProfile.vue";
import { MenuItems, Namespaces, PageNames, Store } from "@/constants";
import { MenuItem } from "@/interfaces/core";
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  components: {
    DrawerProfile,
    DrawerMenuItem,
    DrawerMenuGroup,
    DrawerHeader
  },
  data() {
    return {
      disabled: this.$route.name === PageNames.NotFound,
      menuItems: [...MenuItems]
    };
  },
  computed: {
    ...mapState(Namespaces.root, [
      Store.States.Root.isDrawerOpened,
      Store.States.Root.isBusy
    ]),
    drawerHeight(): number | string {
      if (this.smAndDown) {
        return this.$vuetify.breakpoint.height;
      }

      return "100%";
    },
    pDrawerOpened: {
      get: function (): boolean {
        if (this.smAndDown) {
          return this.isDrawerOpened;
        }

        return true;
      },
      set: function (visible: boolean) {
        if (this.smAndDown) {
          this.setDrawerVisibility(visible);
        }
      }
    },
    smAndDown(): boolean {
      return this.$vuetify.breakpoint.smAndDown;
    },
    permanentDrawer(): boolean {
      return !this.smAndDown;
    },
    drawerWidth(): string | number {
      return this.smAndDown ? "100%" : 256;
    }
  },
  methods: {
    ...mapMutations(Namespaces.root, [
      Store.Mutations.Root.setDrawerVisibility
    ]),
    removeMenuItem(items: MenuItem[], name: string) {
      const index = items.findIndex((menu) => menu.name === name);
      items.splice(index, 1);
      return items;
    }
  }
});
</script>
