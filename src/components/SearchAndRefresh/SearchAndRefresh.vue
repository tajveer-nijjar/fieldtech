<template>
  <div class="container">
    <v-row>
      <v-col cols="11" class="search-bar">
        <v-text-field
          solo
          flat
          :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-4'"
          dense
          hide-details
          single-line
          filled
          placeholder="Search by name"
          direction="right"
          class="text-body-2 rounded-lg"
          prepend-inner-icon="mdi-magnify"
        />
      </v-col>
      <v-col cols="1" class="refresh-button">
        <v-btn class="mx-2" plain>
          <v-icon dark> mdi-refresh </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchAndRefresh"
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: 16px;
}
.search-bar {
  padding-right: 0px !important;
}

.refresh-button {
  padding-left: 0px !important;
}
</style>
