<template>
  <div class="white text-xs-center pa-1">   
    <div 
      class="pt-3 pl-3 pr-3 " 
      fixed>
      <v-text-field
        v-model="searchKeyword"
        fixed
        label="뉴스 검색"
        append-icon="search"
        placeholder="Search"
        hint="검색어: 일본어 제목, 번역 제목"
      />
      <v-layout wrap>
        <v-flex
          xs12
          sm12
          md6 
          lg6
        >
          <no-ssr>
            <adsbygoogle            
              ad-slot="2920580186"/>
          </no-ssr>
        </v-flex>
        <v-flex
          xs12
          sm12
          md6 
          lg6
        >
          <no-ssr>
            <adfit-banner
              style="margin:0 auto;display:block"
              class="hidden-sm-and-down"
              data-ad-test="N"
              data-ad-unit="DAN-t4w6dr2ubfat"/>
            <adfit-banner
              style="margin:0 auto;display:block"
              class="display-sm-and-up hidden-md-and-up"
              data-ad-test="N"
              data-ad-unit="DAN-1hbghscrx51kh"/>
          </no-ssr>
        </v-flex>
      </v-layout>
      <news-list 
        ref="newsList" 
        :articles="articles"
        list-title="일본 뉴스"/>
      <no-ssr>
        <infinite-loading @infinite="infiniteHandler"/>     
      </no-ssr>
    </div>
</div></template>
<script>
import NewsList from '~/components/news/NewsList.vue'
import _ from 'lodash'
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
  watch: {
    searchKeyword: _.debounce(async function() {
      var search = null
      if (this.searchKeyword === '') {
        search = null
        this.offset = 0
      } else {
        search = this.searchKeyword
        this.offset = 0
      }

      try {
        var { data, count } = await this.search()
        if (data.length > 0) {
          this.articles = data
          this.offset = this.articles.length
        } else {
          this.articles = []
        }
      } catch (error) {
        alert(error)
      }
    }, 700)
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
    async search() {
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
      return { data, count }
    },
    async infiniteHandler($state) {
      try {
        var { data, count } = await this.search()
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
