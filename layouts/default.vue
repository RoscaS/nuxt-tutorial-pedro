<template>
  <div class="master">
    <NavBar/>
    <div class="main-content">
      <v-app>
        <nuxt />
      </v-app>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  name: 'default',
  components: { NavBar }
}
</script>

<style scoped lang="scss">
.main-content {

}

</style>
