<template>
  <v-menu
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    :max-width="320"
    :min-width="320"
    :nudge-top="30"
    rounded="lg"
    v-if="$vuetify.breakpoint.lgAndUp"
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" :display="display" />
    </template>
    <v-card>
      <v-card-text class="px-0">
        <time-picker :dense="dense" :error="error" v-model="time" />
      </v-card-text>
    </v-card>
  </v-menu>
  <v-dialog :max-width="400" :min-width="320" content-class="rounded-lg" v-else>
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" :display="display" />
    </template>
    <v-card>
      <v-card-text class="pa-3">
        <time-picker :dense="dense" :error="error" v-model="time" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import moment from "moment";
import Vue, { PropType } from "vue";
import TimePicker from "./TimePicker.vue";

export default Vue.extend({
  components: { TimePicker },
  props: {
    value: {
      type: Date as PropType<Date>
    },
    dense: Boolean,
    error: Boolean
  },
  computed: {
    time: {
      get: function (): Date {
        return this.value;
      },
      set: function (date: Date) {
        this.$emit("input", date);
      }
    },
    display(): string | null {
      if (!this.time) {
        return null;
      }

      return moment(this.time.getTime()).format("h:mm A");
    }
  }
});
</script>
