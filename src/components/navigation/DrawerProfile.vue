<template>
  <v-list dense :disabled="false" class="py-0" v-if="user">
    <v-list-item
      single-line
      color="accent"
      active-class="primary--text"
      class="px-2"
      :to="{ name: pageNames.ProfileSettings }"
      @click="closeDrawer()"
    >
      <v-list-item-avatar>
        <profile-avatar :name="user.name" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="user.name" />
      </v-list-item-content>
      <v-list-item-action>
        <v-icon right small>more_vert</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import ProfileAvatar from "@/components/ProfileAvatar.vue";
import { Namespaces, PageNames, Store } from "@/constants";
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: { ProfileAvatar },
  data() {
    return {
      pageNames: PageNames,
      user: {
        name: "Example User"
      }
    };
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
