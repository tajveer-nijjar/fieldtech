<template>
  <v-container
    fluid
    fill-height
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <v-responsive height="100%" max-height="640" class="overflow-y-auto">
      <v-responsive height="1200">
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <status-card />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-responsive>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import StatusCard from "../../components/StatusCard.vue";

export default Vue.extend({
  components: {
    StatusCard
  },
  data() {
    return {
      time: new Date(2021, 11, 22, 17, 45),
      timeRange: [] as Date[]
    };
  }
});
</script>
