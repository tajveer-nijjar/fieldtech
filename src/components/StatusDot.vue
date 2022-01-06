<template>
  <div class="container">
    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 4px;
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
  background: rgba(143, 182, 72, 0.3);
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
  background: rgba(143, 182, 72, 1);
}
</style>
