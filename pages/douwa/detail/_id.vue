<template>
  <div>
    <!-- <div>
      <no-ssr>
        <ad-component
          google-ad-slot-id="2920580186"
          adfit-desktop-unit="DAN-t4w6dr2ubfat" 
          adfit-mobile-unit="DAN-1hbghscrx51kh"    
          layout-type="wrap"                  
        />        
      </no-ssr>
    </div> -->
    <v-card
      color="white"
     
    >
      <div class=" pa-3 primary white--text">
        <v-icon  
          left
          dark                      
        >
          fas fa-book
        </v-icon> 
        <span class="ml-2">{{ douwa.articleType |douwaType }}</span>
      </div>
      <v-layout 
        row 
        class>
        <v-flex >
          <div class="pa-3 ">
            
            <div 
              class="headline primary--text furigana  ml-0 mt-2" 
              style="text-align:left"
              v-html="douwa.titleFurigana"/>
            <a 
              :href="douwa.linkUrl" 
              target="_blank"
              class="caption lighten-1">원본 : {{ douwa.linkUrl }} </a><br><br>
           
            <div class="white"> 
              <no-ssr>
                <Synthesis 
                  :text="douwa.articelOnlyText" 
                  class=""/>
              </no-ssr>
            </div>
        </div></v-flex>
      </v-layout>
      <!-- <v-divider light/> -->
      <!-- <v-card-actions 
        class="pa-3" 
        color=""/> -->
    </v-card>
    <v-layout 
      wrap 
      class="white">
      <v-flex
        xs12
        sm12
        md12 
        lg12 >
        <DouwaFurigana 
          :douwa="douwa" 
        /> 
      </v-flex>
      <v-flex 
        xs12
        sm12
        md12 
        lg12>
        <no-ssr>      
         
          <ad-component
            google-ad-slot-id="5563055391"
            adfit-desktop-unit="DAN-u7u2dizil640" 
            adfit-mobile-unit="DAN-vbk8dw9dcxfd"  
            layout-type="wrap"          
          /> 
          <!-- adfit 광고2 -->
          <!-- <ad-component
            google-ad-slot-id="5563055391"
            adfit-desktop-unit="DAN-1h7zrmefbegc0" 
            adfit-mobile-unit="DAN-1h84t5wt7s2ue"  
            layout-type="column"          
          />  -->
          <!-- adfit 광고3 -->
        </no-ssr>
      </v-flex>
      <v-flex>
       
        <douwa-list 
          ref="douwaList" 
          :douwas="douwaList"/>       
      </v-flex>
    </v-layout>
    <no-ssr>
      <infinite-loading @infinite="infiniteHandler"/>     
    </no-ssr>
  </div>
</template>
<script>
import AdComponent from '~/components/adv/AdComponent.vue'
import DouwaFurigana from '~/components/douwa/DouwaFurigana.vue'
import DouwaList from '~/components/douwa/DouwaList.vue'
import NewsList from '~/components/news/NewsList.vue'
import Synthesis from '~/components/common/Synthesis.vue'
export default {
  components: { DouwaFurigana, DouwaList, Synthesis, AdComponent },
  filters: {
    // Filter definitions
    douwaType(value) {
      var type = value

      if (type == 'JPN01') {
        return '일본 동화'
      } else if (type == 'JPN02') {
        return '세계 동화'
      } else if (type == 'JPN03') {
        return '세계 동화'
      } else if (type == 'JPN04') {
        return '이솝 우화'
      }
      return type
    }
  },
  data() {
    return {
      searchKeyword: '',
      douwaList: []
    }
  },
  async asyncData({ app, params, error }) {
    var douwa = await app.$axios.$get(`/douwa/${params.id}`)
    return {
      douwa: douwa,
      offset: 0
    }
  },
  async mounted() {
    try {
      var { data, count } = await this.search()
      var data = data
      if (data.length) {
        this.douwaList.push(...data)
        this.offset = this.douwaList.length
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
        updatedAt: this.douwa.updatedAt,
        limit: 10
      }
      var { data, count } = (await this.$axios.get('/douwas', {
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
          this.douwaList.push(...data)
          this.offset = this.douwaList.length
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
      title: `${this.douwa.title} - ${this.titleTranslate ||
        ''} - www.furiganahub.com`,
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: `web,furigana,japanese,일본뉴스,일본어,일본,${
            this.douwa.title
          },${this.douwa.titleTranslate || ''}`
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.douwa.article + '\n' + (this.douwa.translateText || '')
        },
        { vmid: 'og:type', property: 'og:type', content: 'article' },
        {
          vmid: 'og:title',
          property: 'og:title',
          content: `${this.douwa.title} - ${this.titleTranslate ||
            ''} - www.furiganahub.com`
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `www.furiganahub.com//douwa/detail/${this.douwa.id}`
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: `web,furigana,japanese,일본뉴스,일본어,일본,${
            this.douwa.title
          },${this.douwa.titleTranslate || ''}`
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: this.douwa.ImageUrl
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
          content: `${this.douwa.title} - ${this.titleTranslate ||
            ''} - www.furiganahub.com`
        },
        {
          vmid: 'twitter:description',
          name: 'twitter:description',
          content: this.douwa.douwa + '\n' + (this.douwa.translateText || '')
        },
        {
          vmid: 'twitter:image',
          name: 'twitter:image',
          content: this.douwa.ImageUrl
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
