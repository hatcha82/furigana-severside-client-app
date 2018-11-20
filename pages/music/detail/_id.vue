<template>
  <div>
    music detail {{ id }}
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData({ app, params, error }) {
    return { test: 'test', id: params.id }
    // let { randomSongs, recenstNews } = await app.$axios.$get('/home', {
    //   progress: true
    // })

    // return {
    //   randomSongs,
    //   recenstNews
    // }
  }
}
</script>
