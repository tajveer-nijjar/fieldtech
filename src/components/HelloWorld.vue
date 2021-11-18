<template>
  <v-container
    fluid
    fill-height
    :class="[{ 'grey lighten-5': !$vuetify.theme.dark }]"
  >
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
        <v-responsive height="300">
          <time-picker />
          <v-text-field
            rounded
            filled
            label="hello"
            prepend-inner-icon="mdi-clock-outline"
          />
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Onboarding from "./onboarding/Onboarding.vue";
import OnboardingDialog from "./onboarding/OnboardingDialog.vue";
import TimePicker from "./timePicker/TimePicker.vue";
export default Vue.extend({
  components: { OnboardingDialog, Onboarding, TimePicker }
});
</script>
