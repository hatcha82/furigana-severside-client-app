<template>
  <div>
    
   
    <v-card flat>
      <v-card-title>
        <v-layout wrap>
          <v-flex
            xs12
            sm12
            md6 
            lg6
          >
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
          </v-flex>
          <v-flex
            xs12
            sm12
            md6 
            lg6
          >
            <no-ssr>  
              <ad-component
                google-ad-slot-id="5199468592"
                adfit-desktop-unit="DAN-1h7zrmefbegc0" 
                adfit-mobile-unit="DAN-1h84t5wt7s2ue" 
                layout-type="column"           
              />     
            </no-ssr>
          </v-flex>
        </v-layout>
      
        
       
      </v-card-title>
      <div class="pl-2 pr-2">
        <no-ssr>
          <Synthesis 
            :text="article.article" 
            class=""/>
        </no-ssr>
      </div>
     
    </v-card>
    
    
    <v-layout 
      wrap 
      class="white">
      <v-flex
        xs12
        sm12
        md6 
        lg6 >
        <NewsFurigana 
          :article="article" 
        /> 
      </v-flex>
      <v-flex 
        xs12
        sm12
        md6 
        lg6>
        <no-ssr>      
          <no-ssr>
            <ad-component
              google-ad-slot-id="2920580186"
              adfit-desktop-unit="DAN-t4w6dr2ubfat" 
              adfit-mobile-unit="DAN-1hbghscrx51kh"    
              layout-type="column"                  
            />        
          </no-ssr>        
          <ad-component
            google-ad-slot-id="6603183638"
            adfit-desktop-unit="DAN-u7u2dizil640" 
            adfit-mobile-unit="DAN-vbk8dw9dcxfd"  
            layout-type="column"          
          /> 
          <!-- adfit 광고2 -->
          <ad-component
            google-ad-slot-id="5563055391"
            adfit-desktop-unit="DAN-1h7zrmefbegc0" 
            adfit-mobile-unit="DAN-1h84t5wt7s2ue"  
            layout-type="column"          
          /> 
          <!-- adfit 광고3 -->
        </no-ssr>
      </v-flex>
      <v-flex>
       
        <news-list 
          ref="recentNews" 
          :articles="recentNewsList"/>       
      </v-flex>
    </v-layout>
    <no-ssr>
      <infinite-loading @infinite="infiniteHandler"/>     
    </no-ssr>
  </div>
</template>
<script>
import AdComponent from '~/components/adv/AdComponent.vue'
import NewsFurigana from '~/components/news/NewsFurigana.vue'
import NewsList from '~/components/news/NewsList.vue'
import Synthesis from '~/components/common/Synthesis.vue'
export default {
  components: { NewsFurigana, NewsList, Synthesis, AdComponent },
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
        newsPublishedDate: this.article.newsPublishedDate,
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
  },
  head() {
    return {
      title: `${this.article.title} - ${this.titleTranslate ||
        ''} - www.furiganahub.com`,
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: `web,furigana,japanese,일본뉴스,일본어,일본,${
            this.article.title
          },${this.article.titleTranslate || ''}`
        },
        {
          vmid: 'description',
          name: 'description',
          content:
            this.article.article + '\n' + (this.article.translateText || '')
        },
        { vmid: 'og:type', property: 'og:type', content: 'article' },
        {
          vmid: 'og:title',
          property: 'og:title',
          content: `${this.article.title} - ${this.titleTranslate ||
            ''} - www.furiganahub.com`
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `www.furiganahub.com//news/detail/${this.article.id}`
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: `web,furigana,japanese,일본뉴스,일본어,일본,${
            this.article.title
          },${this.article.titleTranslate || ''}`
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: this.article.newsPubllisherImageUrl
        },
        {
          vmid: 'og:site_name',
          property: 'og:site_name',
          content: 'FuriganaHub'
        },
        { vmid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          vmid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.article.title} - ${this.titleTranslate ||
            ''} - www.furiganahub.com`
        },
        {
          vmid: 'twitter:description',
          name: 'twitter:description',
          content:
            this.article.article + '\n' + (this.article.translateText || '')
        },
        {
          vmid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.newsPubllisherImageUrl
        },
        {
          vmid: 'twitter:creator',
          name: 'twitter:creator',
          content: `@_FURIGANA`
        }
      ]
    }
  }
}
</script>
