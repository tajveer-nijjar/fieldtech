<template>
  <v-row no-gutters>
    <v-col cols="6">
      <v-subheader class="text-uppercase text-caption">Start Time</v-subheader>
      <time-picker v-model="startTime" />
    </v-col>
    <v-divider vertical />
    <v-col cols="6">
      <v-subheader class="text-uppercase text-caption">End Time</v-subheader>
      <time-picker v-model="endTime" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TimePicker from "./TimePicker.vue";
import moment from "moment";

export default Vue.extend({
  components: { TimePicker },
  props: {
    value: { type: Array as PropType<Date[]>, default: () => [] }
  },
  data() {
    return {
      startTime: null as Date | null,
      endTime: null as Date | null
    };
  },
  mounted() {
    this.getValue();
  },
  methods: {
    getValue() {
      if (!this.value || this.value.length === 0) {
        this.startTime = moment().startOf("day").toDate();
        this.endTime = moment().startOf("day").toDate();
        return;
      }

      this.startTime = this.value[0];
      this.endTime = this.value[1]
        ? this.value[1]
        : moment().startOf("day").toDate();
    },
    input() {
      this.$emit("input", [this.startTime, this.endTime]);
    }
  },
  watch: {
    range: function () {
      this.getValue();
    },
    startTime: function () {
      this.input();
    },
    endTime: function () {
      this.input();
    }
  }
});
</script>
