import Vue from "vue";

export default Vue.extend({
  methods: {
    getText(namespace: string, key: string, ...params: (string | number)[]) {
      return this.$vuetify.lang.t(`$vuetify.${namespace}.${key}`, ...params);
    },
    getRootText(key: string, ...params: (string | number)[]) {
      return this.$vuetify.lang.t(`$vuetify.${key}`, ...params);
    }
  }
});
