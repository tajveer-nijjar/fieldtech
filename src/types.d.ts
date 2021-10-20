import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    getText(
      namespace: string,
      key: string,
      ...params: (string | number)[]
    ): string;
    getRootText(key: string, ...params: (string | number)[]): string;
  }
}
