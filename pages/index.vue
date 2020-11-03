<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut nesciunt
      odio ratione recusandae? Asperiores consectetur dicta eos facere illo
      magni odio, perspiciatis quam quod sequi. Blanditiis deserunt dolores quo?
    </p>
    <ArticlesCategories />
    <ImageGallery />
  </div>
</template>

<script>
import ImageGallery from '~/components/ImageGallery'
import ArticlesCategories from '~/components/ArticlesCategories'
export default {
  name: 'index',
  components: { ArticlesCategories, ImageGallery },
  async asyncData(ctx) {
    const { data } = await ctx.$axios.get('articles')
    const pageTitle = data[0].name
    return {
      title: pageTitle,
    }
  },
  data() {
    return {
      title: '',
    }
  },
  methods: {
    async doAPICall() {
      return 'The title'
    },
  },
  async fetch() {
    await this.$store.dispatch('images/fetch');
    await this.$store.dispatch('catagories/fetch');
  },
}
</script>
