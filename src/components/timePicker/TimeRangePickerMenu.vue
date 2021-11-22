<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    :max-width="640"
    :min-width="320"
    :nudge-top="30"
    rounded="lg"
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
      <v-card-text>
        <time-range-picker
          v-model="range"
          @endTimeError="(error) => (endTimeError = error)"
          :key="menu"
        />
      </v-card-text>
    </v-card>
  </v-menu>
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
