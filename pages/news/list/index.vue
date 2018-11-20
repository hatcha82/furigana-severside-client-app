<template>
  <div>
    news list 
    <news-list 
      ref="newsList" 
      :articles="articles"/>     
  </div>
</template>
<script>
import NewsList from '~/components/news/NewsList.vue'
export default {
  components: {
    NewsList
  },
  async asyncData({ app, params, error }) {
    try {
      params.search = null
      params.offset = 0
      var { data, count } = await app.$axios.$get('/articles', {
        params: params
      })
      console.log(data)
      return {
        articles: data,
        count: count,
        offset: data.length
      }
    } catch (error) {
      console.log(error)
      return {}
    }
  }
}
</script>
