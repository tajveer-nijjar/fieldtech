<template>
  <v-card tile color="transparent" height="100%">
    <v-row no-gutters justify="center" align="center" class="fill-height">
      <v-col cols="10">
        <div class="text-center">
          <v-slide-y-transition>
            <span
              :class="[
                'material-icons-round v-icon feature-icon cnxGreen--text',
                { swirl: isCurrent && anim === 'swirl' },
                { wobble: isCurrent && anim === 'wobble' },
                { jello: isCurrent && anim === 'jello' },
                { heartbeat: isCurrent && anim === 'heartbeat' }
              ]"
              v-text="icon"
              :style="`font-size: ${onboarding ? 96 : 40}px`"
            />
          </v-slide-y-transition>
        </div>
        <v-responsive
          :height="onboarding && $vuetify.breakpoint.smAndDown ? 96 : 48"
        />
        <div
          :class="[
            'primary--text font-weight-medium text-center mb-3 mt-1',
            { 'text-h5': !onboarding || $vuetify.breakpoint.mdAndUp },
            { 'text-h4': onboarding && $vuetify.breakpoint.smAndDown }
          ]"
          v-text="name"
        />
        <ul
          :class="[
            { 'mt-8': onboarding && $vuetify.breakpoint.mdAndUp },
            { 'mt-16': onboarding && $vuetify.breakpoint.smAndDown }
          ]"
        >
          <li
            :key="index"
            v-for="(item, index) in features"
            :class="['primary--text', { 'text-body-2': !onboarding }]"
            v-text="item"
          />
        </ul>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type AnimationType = "wobble" | "swirl" | "jello" | "heartbeat";

export default Vue.extend({
  props: {
    isCurrent: Boolean,
    anim: {
      type: String as PropType<string>,
      default: "wobble" as AnimationType
    },
    name: String,
    icon: String,
    features: {
      type: Array as PropType<string[]>,
      default: () => new Array<string>()
    },
    onboarding: Boolean
  }
});
</script>

<style lang="scss" scoped>
.feature-icon {
  font-size: 48px;
}

.wobble {
  -webkit-animation: wobble 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
  animation: wobble 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
}

@-webkit-keyframes wobble {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  25% {
    -webkit-transform: translateX(-30px) rotate(-12deg);
    transform: translateX(-30px) rotate(-12deg);
  }
  50% {
    -webkit-transform: translateX(9px) rotate(5deg);
    transform: translateX(9px) rotate(5deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  25% {
    -webkit-transform: translateX(-15px) rotate(-12deg);
    transform: translateX(-15px) rotate(-12deg);
  }
  50% {
    -webkit-transform: translateX(9px) rotate(5eg);
    transform: translateX(9px) rotate(5deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}

.swirl {
  -webkit-animation: swirl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: swirl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes swirl {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes swirl {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

.jello {
  -webkit-animation: jello 0.9s both;
  animation: jello 0.9s both;
}

@-webkit-keyframes jello {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.heartbeat {
  -webkit-animation: heartbeat 1.5s ease-in-out 2 both;
  animation: heartbeat 1.5s ease-in-out 2 both;
}

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
