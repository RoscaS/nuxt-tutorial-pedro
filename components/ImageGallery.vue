<template>
  <v-row>
    <v-col v-for="(image, c) in images" :key="c">
      <v-img :src="image.image"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ImageGallery',
  computed: {
    images() {
      return this.$store.getters['images/biggerThanHundred'](100);
    }
  },
}
</script>

<style scoped></style>
