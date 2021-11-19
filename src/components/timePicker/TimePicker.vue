<template>
  <div class="d-flex justify-center">
    <div class="timepicker d-flex align-center px-4">
      <div class="time d-flex flex-column align-center">
        <v-btn
          icon
          @click="addHour(1)"
          @mousedown="handleHourUpMouseDown()"
          @mouseup="handleHourUpMouseUp()"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <input
          v-model="hour"
          type="number"
          class="text-center text-h5 rounded-lg grey lighten-3 no-line-height"
          @focus="$event.target.select()"
        />
        <v-btn
          icon
          @click="addHour(-1)"
          @mousedown="handleHourDownMouseDown()"
          @mouseup="handleHourDownMouseUp()"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
      <span class="mx-2 text-h3" style="margin-top: -4px">:</span>
      <div class="time d-flex flex-column align-center">
        <v-btn
          icon
          @click="addMinute(1)"
          @mousedown="handleMinuteUpMouseDown()"
          @mouseup="handleMinuteUpMouseUp()"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <input
          v-model="minute"
          type="number"
          class="text-center text-h5 rounded-lg grey lighten-3 no-line-height"
          @focus="$event.target.select()"
        />
        <v-btn
          icon
          @click="addMinute(-1)"
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
        class="ml-3 rounded-lg flex-column"
      >
        <v-btn :value="true" small class="rounded-lg">AM</v-btn>
        <v-btn :value="false" small class="border-0">PM</v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

const TimeoutTime = 150;
const TimeFormat = "h:mm A";

export default Vue.extend({
  props: {
    value: String
  },
  data() {
    return {
      time: 0,
      timer: null as any
    };
  },
  mounted() {
    this.getValue();
  },
  computed: {
    hour: {
      get: function (): string | number {
        return moment(this.time).format("h");
      },
      set: function (hour: string | number) {
        hour = typeof hour === "string" ? hour.toInt() : hour;

        if (hour < 1) {
          hour = 1;
        }

        if (hour >= 24) {
          hour = 24;
        }

        this.time = moment(this.time)
          .hour(this.period ? hour : hour + 12)
          .valueOf();
      }
    },
    minute: {
      get: function (): string | number {
        return moment(this.time).format("mm");
      },
      set: function (minute: number | string) {
        minute = typeof minute === "string" ? minute.toInt() : minute;

        if (minute < 1) {
          return;
        }

        if (minute >= 60) {
          minute = 60;
        }

        this.time = moment(this.time).minute(minute).valueOf();
      }
    },
    period: {
      get: function (): boolean {
        return moment(this.time).hour() < 12;
      },
      set: function (isAm: boolean) {
        this.time = moment(this.time)
          .add(isAm ? -12 : 12, "hour")
          .valueOf();
      }
    }
  },
  methods: {
    handleHourUpMouseDown() {
      this.timer = setInterval(() => this.addHour(1), TimeoutTime);
    },
    handleHourUpMouseUp() {
      clearInterval(this.timer);
    },
    handleHourDownMouseDown() {
      this.timer = setInterval(() => this.addHour(-1), TimeoutTime);
    },
    handleHourDownMouseUp() {
      clearInterval(this.timer);
    },
    handleMinuteUpMouseDown() {
      this.timer = setInterval(() => this.addMinute(1), TimeoutTime);
    },
    handleMinuteUpMouseUp() {
      clearInterval(this.timer);
    },
    handleMinuteDownMouseDown() {
      this.timer = setInterval(() => this.addMinute(-1), TimeoutTime);
    },
    handleMinuteDownMouseUp() {
      clearInterval(this.timer);
    },
    addHour(hour: number) {
      this.time = moment(this.time).add(hour, "hour").valueOf();
    },
    addMinute(minute: number) {
      this.time = moment(this.time).add(minute, "minute").valueOf();
    },
    input() {
      this.$emit("input", moment(this.time).format(TimeFormat));
    },
    getValue() {
      if (!this.value || this.value.trim().length === 0) {
        this.time = moment().startOf("day").valueOf();
        return;
      }

      this.time = moment(this.value, [
        TimeFormat,
        "h:mm a",
        "hh:mm",
        "H:mm",
        "HH:mm"
      ]).valueOf();
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

    &[type="number"] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline-color: $accent-color;
      color: $accent-color;
    }
  }

  .v-btn-toggle {
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
</style>
