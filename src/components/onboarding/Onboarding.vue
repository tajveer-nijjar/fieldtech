<template>
  <div class="fill-height">
    <v-window v-model="slide" continuous :show-arrows="showArrows">
      <v-window-item :key="index" v-for="(feature, index) in features">
        <v-responsive :height="height">
          <feature-card
            :isCurrent="index === slide"
            :name="feature.title"
            :icon="feature.icon"
            :features="feature.descriptions"
            :anim="feature.anim"
            :onboarding="onboarding"
          />
        </v-responsive>
      </v-window-item>
    </v-window>
    <v-sheet color="transparent" :height="navBarHeight">
      <v-row
        no-gutters
        justify="center"
        align="center"
        class="fill-height px-6"
      >
        <v-item-group mandatory>
          <v-item v-for="n in features.length" :key="n">
            <v-icon
              x-small
              color="light-green darken-1"
              :class="['mr-1 nav-dot', { suppressed: n - 1 !== slide }]"
              @click="() => (slide = n - 1)"
            >
              circle
            </v-icon>
          </v-item>
        </v-item-group>
        <slot :total="features.length" />
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import FeatureCard from "@/components/onboarding/FeatureCard.vue";
import { UiUtils } from "@/utils";
import Vue from "vue";

interface FeatureItem {
  title: string;
  icon: string;
  anim?: string;
  descriptions: string[];
}

export default Vue.extend({
  components: { FeatureCard },
  props: {
    showCover: Boolean,
    dark: Boolean,
    onboarding: Boolean,
    showArrows: Boolean,
    value: { type: Number, default: 0 }
  },
  data() {
    return {
      height: 240,
      navBarHeight: 56,
      slide: 0,
      features: [
        {
          title: "Monitoring",
          icon: "monitor",
          descriptions: [
            "Monitor all ﬂeets operations in real-time.",
            "Monitor alerts and alarms from onboard systems."
          ]
        },
        {
          title: "Tracking",
          icon: "track_changes",
          descriptions: [
            "View vehicle position, speed, on-time performance.",
            "View by individual vehicles or stops, by trip, by route, or entire system."
          ],
          anim: "swirl"
        },
        {
          title: "Management",
          icon: "work",
          descriptions: [
            "Fleet management.",
            "Manage route and stop info, including timepoints, stops on route, or flag stops.",
            "Assign vehicles to routes, blocks, trips."
          ]
        },
        {
          title: "Messaging",
          icon: "forum",
          descriptions: [
            "Pre-defined text messaging to Mobile Data Terminals (MDT's)",
            "Respond to on-time performance, off-route, and covert alarm incidents."
          ],
          anim: "jello"
        },
        {
          title: "Analysis Reports",
          icon: "insights",
          descriptions: [
            "View and generate a wide array of system analysis reports.",
            "Enter exceptions to OTP reporting."
          ],
          anim: "heartbeat"
        },
        {
          title: "System Controls",
          icon: "settings_suggest",
          descriptions: [
            "Distribute important service alert information to the public.",
            "Set system to schedules or headway times.",
            "Control of electronic displays (LED/LCD)."
          ]
        }
      ] as FeatureItem[]
    };
  },
  mounted() {
    this.getContentHeight();
    UiUtils.addResizeListener(this.getContentHeight);
  },
  destroyed() {
    UiUtils.removeResizeListener(this.getContentHeight);
  },
  updated() {
    UiUtils.removeResizeListener(this.getContentHeight);
    UiUtils.addResizeListener(this.getContentHeight);
  },
  methods: {
    getContentHeight() {
      setTimeout(() => {
        if (this.$el) {
          this.height = this.$el.clientHeight - this.navBarHeight;
        }
      }, 100);
    }
  },
  watch: {
    value: function () {
      this.slide = this.value;
    },
    slide: function () {
      this.$emit("input", this.slide);
    }
  }
});
</script>

<style lang="scss" scoped>
.nav-dot {
  &.suppressed {
    opacity: 0.2;
  }
}
</style>
