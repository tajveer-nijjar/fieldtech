<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-subheader class="text-uppercase text-caption">
          Start Time
        </v-subheader>
        <time-picker
          :value="startTime"
          :enableInit="enableInit"
          :initValue="initStartTime"
          @input="inputStartTime"
          @focused="handleStartTimeFocused()"
        />
      </v-col>
      <v-divider vertical v-if="$vuetify.breakpoint.mdAndUp" />
      <v-col cols="12" v-else>
        <v-divider class="my-3" />
      </v-col>
      <v-col cols="12" md="6">
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
          :enableInit="false"
          @input="inputEndTime"
          @focused="handleEndTimeFocused()"
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
    value: { type: Array as PropType<Date[]>, default: () => [] },
    enableInit: { type: Boolean, default: true },
    stepHour: { type: Number, default: 1 }
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
    },
    initStartTime(): Date {
      return moment().startOf("minute").toDate();
    },
    initEndTime(): Date | null {
      const startTime = moment(this.initStartTime.getTime());
      const startHour = startTime.hour();
      let hour = startHour + this.stepHour;
      let minute = startTime.minute();

      if (startHour + this.stepHour >= 24) {
        hour = 23;
        minute = 59;
      }

      return startTime.hour(hour).minute(minute).toDate();
    }
  },
  methods: {
    getValue() {
      this.startTime = this.value[0] ? new Date(this.value[0]) : null;
      this.endTime = this.value[1] ? new Date(this.value[1]) : null;
    },
    inputStartTime(time: Date | null) {
      this.startTime = time;
      this.input();
    },
    inputEndTime(time: Date | null) {
      this.endTime = time;
      this.input();
    },
    handleStartTimeFocused() {
      if (!this.startTime && this.endTime) {
        const endTime = moment(this.endTime.getTime());
        const endHour = endTime.hour();
        let hour = endHour - this.stepHour;
        let minute = endTime.minute();

        if (endHour - this.stepHour <= 0) {
          hour = minute = 0;
        }

        this.startTime = endTime.hour(hour).minute(minute).toDate();
      }
    },
    handleEndTimeFocused() {
      if (this.startTime && !this.endTime) {
        const startTime = moment(this.startTime.getTime());
        const startHour = startTime.hour();
        let hour = startHour + this.stepHour;
        let minute = startTime.minute();
        if (startHour + this.stepHour >= 24) {
          hour = 23;
          minute = 59;
        }
        this.endTime = startTime.hour(hour).minute(minute).toDate();
      }
    },
    input() {
      if (this.startTime && this.endTime) {
        this.$emit("input", [this.startTime, this.endTime]);
      }
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
