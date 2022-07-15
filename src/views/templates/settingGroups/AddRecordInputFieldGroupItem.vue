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
          :rules="[ipAddressTextFieldRules.correctEmail]"
          :class="{ errorBorder: !isValidIpAddress }"
        />
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action class="d-flex flex-row">
      <v-btn
        icon
        @click="handleTickButtonClick"
        :disabled="isTextFieldPrestine || !this.isValidIpAddress"
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
const checkIfIpAddressRegExp = (text: string): boolean => {
  const regExp = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g;
  if (regExp.test(text)) {
    return true;
  }
  return false;
};
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
      text: "",
      isValidIpAddress: false,
      ipAddressTextFieldRules: {
        correctEmail: (value: string) => checkIfIpAddressRegExp(value)
      }
    };
  },
  methods: {
    onBlur() {
      this.checkIfPristine();
    },
    onChange() {
      this.isValidIpAddress = checkIfIpAddressRegExp(this.text);
      debugger;
      this.checkIfPristine();
    },
    checkIfPristine() {
      this.isTextFieldPrestine = this.text?.trim() === "" ? true : false;
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

.errorBorder {
  border: 1px solid red !important;
}
</style>
