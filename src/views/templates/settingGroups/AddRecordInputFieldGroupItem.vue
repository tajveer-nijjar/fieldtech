<template>
  <v-list-item two-line :class="classes" :dense="isDense">
    <v-list-item-content>
      <v-list-item-title class="text-wrap">
        <v-text-field
          solo
          flat
          :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
          dense
          hide-details
          single-line
          filled
          clearable
          :placeholder="placeHolder"
          direction="right"
          class="text-body-2 rounded-lg ml-lg-8 text-field"
          v-model="text"
          @blur="onBlur()"
          @change="onChange()"
          @keydown="onChange()"
          @click:clear="onClearClicked()"
        />
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action class="d-flex flex-row">
      <v-btn
        icon
        @click="handleTickButtonClick"
        :disabled="isTextFieldPrestine"
        color="primary"
      >
        <v-icon> mdi-check </v-icon>
      </v-btn>
      <v-btn icon @click="handleCancelButtonClick">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    icon: String,
    classes: String,
    isDense: { type: Boolean, default: false },
    placeHolder: { type: String, default: "Add IP Address" }
  },
  data() {
    return {
      isTextFieldPrestine: true,
      text: ""
    };
  },
  methods: {
    onBlur() {
      if (this.text?.trim() === "") {
        this.isTextFieldPrestine = true;
      } else {
        this.isTextFieldPrestine = false;
      }
    },
    onChange() {
      if (this.text?.trim() === "") {
        this.isTextFieldPrestine = true;
      } else {
        this.isTextFieldPrestine = false;
      }
    },
    handleCancelButtonClick() {
      this.$emit("onCloseButtonClick");
    },
    onClearClicked() {
      this.isTextFieldPrestine = true;
    },
    handleTickButtonClick() {
      this.$emit("onTickButtonClick", this.text);
      this.text = "";
    }
  }
});
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

.text-field {
  width: $text-field-width-standard !important;
}
</style>
