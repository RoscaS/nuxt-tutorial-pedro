<template>
  <div class="content-wrapper">
    <div class="box" style="height: 60px"></div>
    <div class="box" style="height: 230px"></div>
    <div class="box" style="height: 175px"></div>
  </div>
</template>

<script>
export default {
  name: 'css-fun',
}
</script>

<style scoped>
.content-wrapper {
  width: 100%;
  height: 500px;
  background-color: aliceblue;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

  /*justify-content: flex-end;*/

  justify-content: center;
  /*justify-content: space-around;*/
  /*justify-content: space-between;*/

  /*align-items: center;*/
  /*align-items: flex-end;*/

  /*align-items: center;*/
}

.box {
  width: 150px;
  height: 150px;
  margin: 5px;
  background-color: darkblue;
}
</style>
