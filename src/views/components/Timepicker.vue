<template>
  <div class="py-9 px-3">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <time-picker-menu dense v-model="time">
          <template #activator="{ on, attrs, display }">
            <v-text-field
              rounded
              filled
              readonly
              clearable
              :value="display"
              @click:clear="time = null"
              label="Time picker"
              prepend-inner-icon="mdi-clock-time-four-outline"
              v-bind="attrs"
              v-on="on"
              class="rounded-lg"
            />
          </template>
        </time-picker-menu>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <time-range-picker-menu :stepHour="6" v-model="timeRange">
          <template #activator="{ on, attrs, display }">
            <v-text-field
              rounded
              filled
              readonly
              clearable
              :value="display"
              @click:clear="timeRange = []"
              label="Time range picker"
              prepend-inner-icon="mdi-clock-time-four-outline"
              v-bind="attrs"
              v-on="on"
              class="rounded-lg"
            />
          </template>
        </time-range-picker-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import TimePickerMenu from "@/components/timePicker/TimePickerMenu.vue";
import TimeRangePickerMenu from "@/components/timePicker/TimeRangePickerMenu.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    TimePickerMenu,
    TimeRangePickerMenu
  },
  data() {
    return {
      time: new Date(2021, 11, 22, 17, 45),
      timeRange: [] as Date[]
    };
  }
});
</script>
