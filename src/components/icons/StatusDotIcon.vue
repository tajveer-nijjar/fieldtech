<template>
  <div class="container">
    <div class="circle-container d-inline-block">
      <div
        class="outer-circle"
        :class="{
          'background-green-transluscent': isConnected,
          'background-red-transluscent': !isConnected
        }"
      >
        <div
          :class="{
            'background-green-solid': isConnected,
            'background-red-solid': !isConnected
          }"
          class="inner-circle"
        ></div>
      </div>
    </div>
    <div class="connection-status d-inline-block">
      <p
        class="status-text"
        :class="{
          'color-green': isConnected,
          'color-red': !isConnected
        }"
      >
        {{ isConnected ? "CONNECTED" : "DISCONNECTED" }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    isConnected: Boolean
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
p {
  padding: 0;
  margin: 0;
}

.circle-container {
  margin: 0;
  padding: 0;
  border-radius: 10px;
  height: 20px;
  width: 20px;
  // display: inline-block;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
}

.outer-circle {
  margin: 0 auto;
  display: block;
  border-radius: 16px;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-green-solid {
  background: $status-icon-green-solid;
}

.background-green-transluscent {
  background: $status-icon-green-transluscent;
}

.background-red-solid {
  background: $status-icon-red-solid;
}

.background-red-transluscent {
  background: $status-icon-red-transluscent;
}

.color-red {
  color: $status-icon-red-solid;
}

.color-green {
  color: $status-icon-green-solid;
}

.inner-circle {
  height: 10px;
  width: 10px;
  border-radius: 10px;
}

.connection-status {
  // display: inline-block;
  margin-left: $margin-medium;
}

.status-text {
  font-size: $font-size-subtitle;
}
</style>
