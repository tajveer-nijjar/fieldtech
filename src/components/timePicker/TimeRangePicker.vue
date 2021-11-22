<template>
  <div>
    <v-row no-gutters>
      <v-col cols="6">
        <v-subheader class="text-uppercase text-caption">
          Start Time
        </v-subheader>
        <time-picker :value="startTime" @input="inputStartTime" />
      </v-col>
      <v-divider vertical />
      <v-col cols="6">
        <v-subheader
          :class="[
            'text-uppercase text-caption',
            { 'error--text': endTimeError }
          ]"
        >
          End Time
        </v-subheader>
        <time-picker
          :error="endTimeError"
          :value="endTime"
          @input="inputEndTime"
        />
      </v-col>
    </v-row>
  </div>
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
  computed: {
    endTimeError(): boolean {
      if (!this.startTime || !this.endTime) {
        return false;
      }

      return moment(this.endTime.getTime()).diff(this.startTime.getTime()) < 0;
    }
  },
  methods: {
    getValue() {
      this.startTime = this.value[0]
        ? new Date(this.value[0])
        : moment().startOf("day").toDate();
      this.endTime = this.value[1]
        ? new Date(this.value[1])
        : moment().startOf("day").toDate();
    },
    inputStartTime(time: Date) {
      this.startTime = time;
      this.input();
    },
    inputEndTime(time: Date) {
      this.endTime = time;
      this.input();
    },
    input() {
      this.$emit("input", [this.startTime, this.endTime]);
    }
  },
  watch: {
    value: {
      handler: function () {
        this.getValue();
      },
      deep: true
    },
    endTimeError: function (error: boolean) {
      this.$emit("endTimeError", error);
    }
  }
});
</script>
