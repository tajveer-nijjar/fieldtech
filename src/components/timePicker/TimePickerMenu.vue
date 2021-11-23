<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    :max-width="320"
    :min-width="320"
    :nudge-top="30"
    rounded="lg"
    v-if="$vuetify.breakpoint.mdAndUp"
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" :display="display" />
    </template>
    <v-card>
      <v-card-text class="px-0">
        <time-picker
          v-model="time"
          :dense="dense"
          :error="error"
          :enableInit="enableInit"
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
  <v-dialog
    v-model="menu"
    :max-width="400"
    :min-width="320"
    content-class="rounded-lg"
    v-else
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" :display="display" />
    </template>
    <v-card>
      <v-card-text class="pa-3">
        <time-picker
          v-model="time"
          :dense="dense"
          :error="error"
          :enableInit="enableInit"
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
import TimePicker from "./TimePicker.vue";

export default Vue.extend({
  components: { TimePicker },
  props: {
    value: {
      type: Date as PropType<Date>
    },
    enableInit: { type: Boolean, default: true },
    dense: Boolean,
    error: Boolean
  },
  data() {
    return {
      menu: false,
      time: null as null | Date
    };
  },
  computed: {
    display(): string | null {
      if (!this.value) {
        return null;
      }

      return moment(this.value.getTime()).format("h:mm A");
    },
    isValid(): boolean {
      return this.time != null;
    }
  },
  methods: {
    handleOkClicked() {
      this.menu = false;
      this.$emit("input", this.time);
    }
  },
  watch: {
    menu: function () {
      if (this.menu) {
        this.time = this.value;
      }
    }
  }
});
</script>
