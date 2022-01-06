<template>
  <div class="container">
    <div class="circle-container">
      <div class="outer-circle">
        <div class="inner-circle"></div>
      </div>
    </div>
    <div class="connection-status">
      <p class="status-text">CONNECTED</p>
    </div>
  </div>
</template>
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
  display: inline-block;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
}

.outer-circle {
  margin: 0 auto;
  display: block;
  background: $status-icon-green-transluscent;
  border-radius: 16px;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background: $status-icon-green;
}

.connection-status {
  display: inline-block;
  margin-left: $margin-large;
}

.status-text {
  color: $status-icon-green;
  font-size: 14px;
}
</style>
