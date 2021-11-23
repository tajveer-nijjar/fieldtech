<template>
  <div class="d-flex justify-center">
    <div class="timepicker d-flex align-center px-4">
      <div class="time d-flex flex-column align-center">
        <v-btn
          icon
          @click="handleHourUpClicked()"
          @mousedown="handleHourUpMouseDown()"
          @mouseup="handleHourUpMouseUp()"
          @mouseout="clearTimer()"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <input
          v-model="hour"
          maxlength="2"
          :class="[
            'text-center rounded-lg no-line-height',
            { 'text-h5': !dense },
            { dense: dense },
            { 'error-time': error },
            { 'red lighten-5': error && !$vuetify.theme.dark },
            { 'dark brown darken-4': error && $vuetify.theme.dark },
            { 'grey lighten-3': !error && !$vuetify.theme.dark },
            { 'dark white--text': !error && $vuetify.theme.dark }
          ]"
          @focus="handleHourFocused"
          @blur="handleHourBlurred"
        />
        <v-btn
          icon
          @click="handleHourDownClicked()"
          @mousedown="handleHourDownMouseDown()"
          @mouseup="handleHourDownMouseUp()"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
      <span
        :class="[
          { 'mx-2 text-h3': !dense },
          { 'mx-1 text-h6': dense },
          { 'white--text': $vuetify.theme.dark }
        ]"
        style="margin-top: -4px"
      >
        :
      </span>
      <div class="time d-flex flex-column align-center">
        <v-btn
          icon
          @click="handleMinuteUpClicked()"
          @mousedown="handleMinuteUpMouseDown()"
          @mouseup="handleMinuteUpMouseUp()"
          @mouseout="clearTimer()"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <input
          v-model="minute"
          maxlength="2"
          :class="[
            'text-center rounded-lg no-line-height',
            { 'text-h5': !dense },
            { dense: dense },
            { 'error-time': error },
            { 'red lighten-5': error && !$vuetify.theme.dark },
            { 'dark brown darken-4': error && $vuetify.theme.dark },
            { 'grey lighten-3': !error && !$vuetify.theme.dark },
            { 'dark white--text': !error && $vuetify.theme.dark }
          ]"
          @focus="handleMinuteFocused"
          @blur="handleMinuteBlurred"
        />
        <v-btn
          icon
          @click="handleMinuteDownClicked()"
          @mousedown="handleMinuteDownMouseDown()"
          @mouseup="handleMinuteDownMouseUp()"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
      <v-btn-toggle
        v-model="period"
        mandatory
        dense
        color="accent"
        :class="['ml-3 rounded-lg', { 'flex-column vertical-toggle': !dense }]"
      >
        <v-btn :value="true" small>AM</v-btn>
        <v-btn :value="false" small>PM</v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import Vue, { PropType } from "vue";

const TimeoutTime = 150;

export default Vue.extend({
  props: {
    value: {
      type: Date as PropType<Date>,
      default: () => moment().startOf("minute").toDate()
    },
    dense: Boolean,
    error: Boolean
  },
  data() {
    return {
      time: 0,
      isHourFocused: false,
      isMinuteFocused: false,
      timer: null as any
    };
  },
  mounted() {
    this.getValue();
  },
  destroyed() {
    this.clearTimer();
  },
  computed: {
    hour: {
      get: function (): string {
        return !this.value ? "" : moment(this.time).format("h");
      },
      set: function (value: string) {
        if (value.length === 0) {
          return;
        }

        let hour = value.toInt();

        if (hour < 0) {
          hour = 0;
        } else if (hour < 12) {
          hour = this.period ? hour : hour + 12;
        } else if (hour >= 12) {
          hour = this.period ? 0 : 12;
        }

        this.time = moment(this.time).hour(hour).valueOf();
      }
    },
    minute: {
      get: function (): string {
        return !this.value
          ? ""
          : moment(this.time).format(this.isMinuteFocused ? "m" : "mm");
      },
      set: function (value: string) {
        if (value.length === 0) {
          return;
        }

        let minute = value.toInt();

        if (minute < 1) {
          minute = 0;
        } else if (minute > 59) {
          minute = 59;
        }

        this.time = moment(this.time).minute(minute).valueOf();
      }
    },
    period: {
      get: function (): boolean {
        return !this.value ? true : moment(this.time).hour() < 12;
      },
      set: function (isAm: boolean) {
        this.time = moment(this.time)
          .add(isAm ? -12 : 12, "hour")
          .valueOf();
      }
    }
  },
  methods: {
    // Hour input
    handleHourFocused(event: Event) {
      this.clearTimer();

      if (!this.value) {
        this.resetTime();
      } else {
        setTimeout(() => {
          (event.target as HTMLInputElement).select();
        }, 100);
      }

      this.isHourFocused = true;
      this.focused();
    },
    handleHourBlurred(event: Event) {
      const target = event.target as HTMLInputElement;

      if (!target.value || target.value.length === 0) {
        target.value = this.hour;
      }

      this.isHourFocused = false;
    },
    handleHourUpClicked() {
      this.clearTimer();
      this.addHour(1);
    },
    handleHourUpMouseDown() {
      this.clearTimer();
      this.startTimer(() => this.addHour(1));
    },
    handleHourUpMouseUp() {
      this.clearTimer();
    },
    handleHourDownClicked() {
      this.clearTimer();
      this.addHour(-1);
    },
    handleHourDownMouseDown() {
      this.clearTimer();
      this.startTimer(() => this.addHour(-1));
    },
    handleHourDownMouseUp() {
      this.clearTimer();
    },
    // Minute input
    handleMinuteFocused(event: Event) {
      this.clearTimer();

      if (!this.value) {
        this.resetTime();
      } else {
        setTimeout(() => {
          (event.target as HTMLInputElement).select();
        }, 100);
      }

      this.isMinuteFocused = true;
      this.focused();
    },
    handleMinuteBlurred(event: Event) {
      const target = event.target as HTMLInputElement;

      if (!target.value || target.value.length === 0) {
        target.value = this.minute;
      }

      this.isMinuteFocused = false;
    },
    handleMinuteUpClicked() {
      this.clearTimer();
      this.addMinute(1);
    },
    handleMinuteUpMouseDown() {
      this.clearTimer();
      this.startTimer(() => this.addMinute(1));
    },
    handleMinuteUpMouseUp() {
      this.clearTimer();
    },
    handleMinuteDownClicked() {
      this.clearTimer();
      this.addMinute(-1);
    },
    handleMinuteDownMouseDown() {
      this.clearTimer();
      this.startTimer(() => this.addMinute(-1));
    },
    handleMinuteDownMouseUp() {
      this.clearTimer();
    },
    // General
    addHour(hour: number) {
      if (this.isHourFocused) {
        return;
      }

      if (!this.value) {
        this.resetTime();
        return;
      }

      const currentHrs = moment(this.time).hour();

      if (currentHrs + hour < 0) {
        this.time = moment(this.time).hour(23).valueOf();
        return;
      }

      if (currentHrs + hour >= 24) {
        this.time = moment(this.time).hour(0).valueOf();
        return;
      }

      this.time = moment(this.time).add(hour, "hour").valueOf();
    },
    addMinute(minute: number) {
      if (this.isMinuteFocused) {
        return;
      }

      if (!this.value) {
        this.resetTime();
        return;
      }

      const currentMins = moment(this.time).minute();

      if (currentMins + minute < 0) {
        this.time = moment(this.time).minute(59).valueOf();
        return;
      }

      if (currentMins + minute >= 60) {
        this.time = moment(this.time).minute(0).valueOf();
        return;
      }

      this.time = moment(this.time).add(minute, "minute").valueOf();
    },
    focused() {
      this.$emit("focused");
    },
    input() {
      this.$emit("input", moment(this.time).toDate());
    },
    resetTime() {
      this.time = moment().startOf("minute").valueOf();
    },
    startTimer(callback: () => void) {
      this.clearTimer();
      this.timer = setInterval(callback, TimeoutTime);
    },
    clearTimer() {
      clearInterval(this.timer);
    },
    getValue() {
      if (!this.value) {
        return;
      }

      this.time = this.value.getTime();
    }
  },
  watch: {
    value: function () {
      this.getValue();
    },
    time: function () {
      this.input();
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.timepicker {
  input {
    width: 56px;
    height: 56px;
    border-style: solid !important;
    -webkit-transition: 300ms;
    transition: 300ms;
    outline: none;

    &.dense {
      width: 32px;
      height: 32px;
    }

    &.error-time {
      border-color: $error-color !important;
      color: $error-color;
    }

    &:focus {
      border-color: $accent-color !important;
      color: $accent-color;
    }

    &.dark {
      background-color: black;
      border-color: black !important;

      &.error-time {
        border-color: #3e2723 !important;
      }

      &:focus {
        border-color: $accent-color-dark !important;
        color: $accent-color-dark !important;
      }

      &::selection {
        background-color: #263238;
      }
    }
  }

  .v-btn-toggle {
    &.vertical-toggle {
      .v-btn.v-btn:first-child {
        border-top-left-radius: inherit !important;
        border-top-right-radius: inherit !important;
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        border-right-width: thin !important;
        border-bottom-width: 0 !important;
      }

      .v-btn.v-btn:last-child {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
        border-bottom-left-radius: inherit !important;
        border-bottom-right-radius: inherit !important;
        border-left-width: thin !important;
        border-top-width: 0 !important;
      }
    }
  }
}
</style>
