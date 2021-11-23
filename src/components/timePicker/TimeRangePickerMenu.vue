<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    :max-width="640"
    :min-width="480"
    :nudge-top="30"
    rounded="lg"
    v-if="$vuetify.breakpoint.mdAndUp"
  >
    <template #activator="{ on, attrs }">
      <slot
        name="activator"
        :on="on"
        :attrs="attrs"
        :display="display"
        :error="endTimeError"
      />
    </template>
    <v-card>
      <v-card-text class="px-0">
        <time-range-picker
          v-model="range"
          @endTimeError="(error) => (endTimeError = error)"
          v-if="menu"
        />
      </v-card-text>
    </v-card>
  </v-menu>
  <v-dialog v-model="menu" :max-width="320" content-class="rounded-lg" v-else>
    <template #activator="{ on, attrs }">
      <slot
        name="activator"
        :on="on"
        :attrs="attrs"
        :display="display"
        :error="endTimeError"
      />
    </template>
    <v-card>
      <v-card-text class="pa-3">
        <time-range-picker
          v-model="range"
          @endTimeError="(error) => (endTimeError = error)"
          v-if="menu"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import moment from "moment";
import Vue, { PropType } from "vue";
import TimeRangePicker from "./TimeRangePicker.vue";

export default Vue.extend({
  components: { TimeRangePicker },
  props: {
    value: {
      type: Array as PropType<Date[]>,
      default: () => []
    },
    dense: Boolean,
    error: Boolean
  },
  data() {
    return {
      menu: false,
      endTimeError: false
    };
  },
  computed: {
    range: {
      get: function (): Date[] {
        return this.value;
      },
      set: function (range: Date[]) {
        setTimeout(() => {
          if (this.endTimeError) {
            return;
          }
          this.$emit("input", range);
        }, 100);
      }
    },
    display(): string {
      return this.range
        .map((time) => moment(time.getTime()).format("h:mm A"))
        .join(" - ");
    }
  },
  watch: {
    endTimeError: function (error: boolean) {
      this.$emit("endTimeError", error);
    }
  }
});
</script>
