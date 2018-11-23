<template>
  <div class="pa-1">
    <news-list 
      ref="newsList" 
      :articles="articles"
      list-title="일본 뉴스"/>
    <infinite-loading @infinite="infiniteHandler"/>     
  </div>
</template>
<script>
import NewsList from '~/components/news/NewsList.vue'
export default {
  components: {
    NewsList
  },

  data() {
    return {
      searchKeyword: '',
      busy: false,
      count: 0,
      offset: 0
    }
  },
  async asyncData({ app, params, error }) {
    try {
      params.search = null
      params.offset = 0
      var { data, count } = await app.$axios.$get('/articles', {
        params: params
      })
      return {
        articles: data,
        count: count,
        offset: data.length
      }
    } catch (error) {
      return {}
    }
  },
  methods: {
    async infiniteHandler($state) {
      try {
        var search
        if (this.searchKeyword === '') {
          search = null
        } else {
          search = this.searchKeyword
        }
        var params = {
          search: search,
          offset: this.offset
        }
        var { data, count } = (await this.$axios.get('/articles', {
          params: params,
          progress: true
        })).data
        // var dataSet = (await SongsService.index(search, this.offset)).data
        var data = data
        if (data.length) {
          $state.loaded()
          this.articles.push(...data)
          this.offset = this.articles.length
        } else {
          $state.complete()
        }
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
