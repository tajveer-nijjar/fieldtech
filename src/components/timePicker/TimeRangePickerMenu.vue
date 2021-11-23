<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    :max-width="640"
    :min-width="480"
    :nudge-top="30"
    rounded="lg"
    v-if="$vuetify.breakpoint.mdAndUp"
  >
    <template #activator="{ on, attrs }">
      <slot
        name="activator"
        :on="on"
        :attrs="attrs"
        :display="display"
        :error="endTimeError"
      />
    </template>
    <v-card>
      <v-card-text class="px-0">
        <time-range-picker
          v-model="range"
          :stepHour="stepHour"
          :enableInit="enableInit"
          @endTimeError="(error) => (endTimeError = error)"
          v-if="menu"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text rounded small @click="menu = false">Cancel</v-btn>
        <v-btn
          text
          rounded
          small
          color="accent"
          :disabled="!isValid"
          @click="handleOkClicked()"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
  <v-dialog v-model="menu" :max-width="320" content-class="rounded-lg" v-else>
    <template #activator="{ on, attrs }">
      <slot
        name="activator"
        :on="on"
        :attrs="attrs"
        :display="display"
        :error="endTimeError"
      />
    </template>
    <v-card>
      <v-card-text class="pa-3">
        <time-range-picker
          v-model="range"
          :stepHour="stepHour"
          :enableInit="enableInit"
          @endTimeError="(error) => (endTimeError = error)"
          v-if="menu"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text rounded small @click="menu = false">Cancel</v-btn>
        <v-btn
          text
          rounded
          small
          color="accent"
          :disabled="!isValid"
          @click="handleOkClicked()"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import moment from "moment";
import Vue, { PropType } from "vue";
import TimeRangePicker from "./TimeRangePicker.vue";

export default Vue.extend({
  components: { TimeRangePicker },
  props: {
    value: {
      type: Array as PropType<Date[]>,
      default: () => []
    },
    enableInit: { type: Boolean, default: true },
    stepHour: Number,
    dense: Boolean,
    error: Boolean
  },
  data() {
    return {
      menu: false,
      endTimeError: false,
      range: [] as Date[]
    };
  },
  computed: {
    display(): string {
      return this.value
        .map((time) => moment(time.getTime()).format("h:mm A"))
        .join(" - ");
    },
    isValid(): boolean {
      return this.range.length === 2 && !this.endTimeError;
    }
  },
  methods: {
    handleOkClicked() {
      this.menu = false;
      this.$emit("input", this.range);
    }
  },
  watch: {
    endTimeError: function (error: boolean) {
      this.$emit("endTimeError", error);
    },
    menu: function () {
      if (this.menu) {
        this.range = this.value;
      }
    }
  }
});
</script>
