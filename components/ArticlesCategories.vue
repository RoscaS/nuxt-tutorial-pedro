<template>
  <v-row>
    <v-col v-for="(category, c) in categories" :key="c">
      <v-chip>
        {{ category.name }}
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticlesCategories',
  computed: {
    categories() {
      return this.$store.state.catagories.data.splice(0, 3);
    }
  },
}
</script>

<style scoped></style>
