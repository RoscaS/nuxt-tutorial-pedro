<template>
  <div class="content-wrapper d-flex justify-center">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'css-fun',
}
</script>

<style scoped>
.content-wrapper {
  height: 500px;
  background-color: aliceblue;
}

.box {
  width: 150px;
  height: 150px;
  margin: 5px;
  /*background-color: darkblue;*/
  border: blue 1px solid;
}
</style>
