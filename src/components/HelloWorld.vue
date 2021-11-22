<template>
  <v-container
    fluid
    fill-height
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
    <v-responsive height="100%" max-height="640" class="overflow-y-auto">
      <v-responsive height="1200">
        <v-row justify="center">
          <v-col cols="12" md="6">
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
          <v-col cols="12" md="6">
            <time-picker-menu dense v-model="time">
              <template #activator="{ on, attrs, display }">
                <v-text-field
                  rounded
                  filled
                  readonly
                  clearable
                  :value="display"
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
            <time-range-picker-menu v-model="timeRange">
              <template #activator="{ on, attrs, display }">
                <v-text-field
                  rounded
                  filled
                  readonly
                  clearable
                  :value="display"
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
      </v-responsive>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Onboarding from "./onboarding/Onboarding.vue";
import OnboardingDialog from "./onboarding/OnboardingDialog.vue";
import TimePickerMenu from "./timePicker/TimePickerMenu.vue";
import TimeRangePickerMenu from "./timePicker/TimeRangePickerMenu.vue";

export default Vue.extend({
  components: {
    OnboardingDialog,
    Onboarding,
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
