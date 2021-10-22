<template>
  <v-list
    dense
    :color="$vuetify.theme.dark ? 'secondaryBlack' : 'grey lighten-5'"
  >
    <template v-for="index in repeat">
      <setting-group-item
        :title="`Text field ${index} option`"
        subtitle="Text field option description"
        :key="`text-field-${index}`"
      >
        <v-text-field
          solo
          flat
          :background-color="$vuetify.theme.dark ? 'black' : 'grey lighten-3'"
          dense
          hide-details
          single-line
          filled
          type="number"
          placeholder="Please input"
          min="0"
          direction="right"
          class="text-body-2 rounded-lg"
        />
      </setting-group-item>
      <v-divider
        :key="`group-1-divider-${index}`"
        :class="[
          { 'grey lighten-3': !$vuetify.theme.dark },
          { black: $vuetify.theme.dark }
        ]"
      />
    </template>
    <template v-for="index in repeat">
      <setting-group-item
        :title="`Switch ${index} option`"
        subtitle="switch option description"
        :key="`swtich-${index}`"
      >
        <v-switch dense inset hide-details color="accent" />
      </setting-group-item>
      <v-divider
        :key="`group-2-divider-${index}`"
        :class="[
          { 'grey lighten-3': !$vuetify.theme.dark },
          { black: $vuetify.theme.dark }
        ]"
      />
    </template>
    <setting-group-item
      title="Button group option"
      subtitle="Button group option description"
    >
      <v-btn-toggle mandatory dense rounded color="accent">
        <v-btn small>Value 1</v-btn>
        <v-btn small>Value2</v-btn>
      </v-btn-toggle>
    </setting-group-item>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import SettingGroupItem from "./SettingGroupItem.vue";
export default Vue.extend({
  components: { SettingGroupItem },
  props: {
    repeat: { type: Number, default: 5 }
  }
});
</script>
