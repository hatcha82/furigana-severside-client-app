<template>
  <div>
    <v-card>
      <v-card-title>
        <div v-if="(!edit)" >
          <v-img
            :src="article.newsPubllisherImageUrl ? article.newsPubllisherImageUrl : require('~/assets/noImage.png')"
            :lazy-src="article.newsPubllisherImageUrl ? article.newsPubllisherImageUrl : require('~/assets/noImage.png')"
            class="white--text "
            height="80"
            contain
            position="left"
          />
          <br>
          <span class="caption">{{ article.newsPublisher }}</span><br>            
          <a 
            :href="article.newsUrl" 
            class="caption grey--text lighten-1">원본 : {{ article.newsUrl }} </a><br>
        </div>
        <div style="float:right"/>
      </v-card-title>
      <div class="pl-2 pr-2">
        <!-- <Synthesis :text="article.article" class=""/> -->
      </div>
     
    </v-card>
    <v-layout wrap>
      <v-flex>
        <NewsFurigana 
          :article="article" 
        />     
      </v-flex>
      <v-flex>
        <no-ssr placeholder="Loading...">   
          <news-list 
            ref="recentNews" 
            :articles="recentNewsList"/>       
        </no-ssr>       
      </v-flex>
    </v-layout>
    <infinite-loading @infinite="infiniteHandler"/>     
  </div>
</template>
<script>
import NewsFurigana from '~/components/news/NewsFurigana.vue'
import NewsList from '~/components/news/NewsList.vue'
export default {
  components: { NewsFurigana, NewsList },
  data() {
    return {
      searchKeyword: '',
      recentNewsList: []
    }
  },
  async asyncData({ app, params, error }) {
    var article = await app.$axios.$get(`/article/${params.id}`)
    return {
      article: article,
      offset: 0
    }
  },
  async mounted() {
    try {
      var { data, count } = await this.search()
      var data = data
      if (data.length) {
        this.recentNewsList.push(...data)
        this.offset = this.recentNewsList.length
      } else {
      }
    } catch (err) {
      error(err)
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
        offset: this.offset,
        limit: 10
      }
      var { data, count } = (await this.$axios.get('/articles', {
        params: params,
        progress: true
      })).data
      return { data, count }
    },
    async infiniteHandler($state) {
      try {
        var { data, count } = await this.search()
        var data = data
        if (data.length) {
          $state.loaded()
          this.recentNewsList.push(...data)
          this.offset = this.recentNewsList.length
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
