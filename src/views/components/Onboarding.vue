<template>
  <v-container>
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
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Onboarding from "@/components/onboarding/Onboarding.vue";
import OnboardingDialog from "@/components/onboarding/OnboardingDialog.vue";

export default Vue.extend({
  components: {
    OnboardingDialog,
    Onboarding
  },
  data() {
    return {
      time: new Date(2021, 11, 22, 17, 45),
      timeRange: [] as Date[]
    };
  }
});
</script>
