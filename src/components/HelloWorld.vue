<template>
  <v-container
    fluid
    fill-height
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <v-responsive height="100%" max-height="640" class="overflow-y-auto">
      <v-responsive height="1200">
        <v-row justify="center">
          <v-col cols="6">
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Onboarding</v-list-item-title>
                  <v-list-item-subtitle>
                    Can be used for onboarding dialog at the start of the
                    application.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="pa-8">
                  <v-card rounded="lg" height="400">
                    <onboarding />
                  </v-card>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <onboarding-dialog />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              :max-width="640"
              :min-width="320"
              :nudge-top="30"
              rounded="lg"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  rounded
                  filled
                  readonly
                  clearable
                  :value="timeRangeStrs[0]"
                  label="Time picker"
                  prepend-inner-icon="mdi-clock-time-four-outline"
                  v-bind="attrs"
                  v-on="on"
                  class="rounded-lg"
                />
              </template>
              <v-card>
                <v-card-text>
                  <time-picker v-model="timeRange[0]" />
                </v-card-text>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              :max-width="640"
              :min-width="320"
              :nudge-top="30"
              rounded="lg"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  rounded
                  filled
                  readonly
                  clearable
                  :value="timeRangeFormatted"
                  label="Time range picker"
                  prepend-inner-icon="mdi-clock-time-four-outline"
                  v-bind="attrs"
                  v-on="on"
                  class="rounded-lg"
                />
              </template>
              <v-card>
                <v-card-text>
                  <time-range-picker v-model="timeRange" />
                </v-card-text>
              </v-card>
            </v-menu>
          </v-col>
        </v-row>
      </v-responsive>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { DateUtils } from "@/utils";
import Vue from "vue";
import Onboarding from "./onboarding/Onboarding.vue";
import OnboardingDialog from "./onboarding/OnboardingDialog.vue";
import TimePicker from "./timePicker/TimePicker.vue";
import TimeRangePicker from "./timePicker/TimeRangePicker.vue";
export default Vue.extend({
  components: { OnboardingDialog, Onboarding, TimePicker, TimeRangePicker },
  data() {
    return {
      timeRange: [new Date(2021, 11, 22, 6, 30), new Date(2021, 11, 22, 15, 30)]
    };
  },
  computed: {
    timeRangeStrs(): string[] {
      return this.timeRange.map((time) =>
        DateUtils.formatTime(time, "without seconds")
      );
    },
    timeRangeFormatted(): string {
      return this.timeRangeStrs.join(" - ");
    }
  }
});
</script>
