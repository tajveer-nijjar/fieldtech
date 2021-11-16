<template>
  <v-dialog
    v-model="show"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    width="100%"
    max-width="640"
    :overlay-opacity="configs.DialogOverlayOpacity"
    :overlay-color="$vuetify.theme.dark ? 'black' : 'white'"
    transition="slide-y-transition"
    :content-class="`${
      $vuetify.breakpoint.mdAndUp ? 'rounded-xl' : 'rounded-0'
    }`"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded depressed color="accent" dark v-bind="attrs" v-on="on">
        Onboarding Dialog
      </v-btn>
    </template>
    <v-sheet
      class="header-container overflow-hidden"
      :height="$vuetify.breakpoint.smAndDown ? '100vh' : '480'"
      :color="$vuetify.theme.dark ? 'light-blue darken-4' : 'white'"
      rounded="0"
    >
      <div class="overlay-lines-wrapper">
        <v-responsive
          :class="[
            'px-6',
            { 'pt-6': $vuetify.breakpoint.mdAndUp },
            { 'pt-16': $vuetify.breakpoint.smAndDown }
          ]"
        >
          <pixel-map />
        </v-responsive>
      </div>
      <onboarding v-model="slide" onboarding v-slot="{ total }">
        <v-spacer />
        <v-btn
          rounded
          depressed
          color="cnxGreen"
          min-width="112"
          @click="handleNextClicked(total)"
        >
          {{ slide === total - 1 ? "Start" : "Next" }}
          <v-icon right>arrow_forward</v-icon>
        </v-btn>
      </onboarding>
      <v-btn
        text
        rounded
        class="close-icon-button"
        @click="handleCloseClicked()"
      >
        Skip
      </v-btn>
      <v-btn-toggle mandatory>
        <v-btn icon small :key="`nav-${index}`" v-for="index in 5" />
      </v-btn-toggle>
    </v-sheet>
  </v-dialog>
</template>

<script lang="ts">
import Onboarding from "@/components/onboarding/Onboarding.vue";
import Configs from "@/configs";
import PixelMap from "@/icons/PixelMap.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    PixelMap,
    Onboarding
  },
  data() {
    return {
      configs: Configs,
      show: false,
      slide: 0
    };
  },
  methods: {
    handleNextClicked(total: number): void {
      if (this.slide >= total - 1) {
        this.handleCloseClicked();
        return;
      }

      this.slide++;
    },
    handleCloseClicked(): void {
      this.show = false;

      setTimeout(() => {
        this.slide = 0;
      }, 500);
    }
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
}

.header-title {
  position: absolute;
  left: 6%;
  bottom: 10%;
}

.close-icon-button {
  position: absolute;
  top: 3%;
  right: 1%;
}

.overlay-lines-wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
