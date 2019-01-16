<template>
  <div>
    <h2 class="primary--text">{{ listTitle }}</h2>
    
    <v-layout wrap >
      <template v-for="(item) in articles">
        <v-flex 
          :key="'news' + '_' + item.id"
          xs12
          sm12
          md6 
          lg4>
          <v-card              
            class="ma-2">  
            
            <v-card-title 
              class="accent" 
              style="height:40px;">
              <img 
                :lazy-src="item.newsPubllisherImageUrl ? item.newsPubllisherImageUrl : require('../../assets/noImage.png')"
                :src="item.newsPubllisherImageUrl ? item.newsPubllisherImageUrl : require('../../assets/noImage.png')"
                style="postion:absolute;width:80px;margin-left:0px" 
              >
              <span class="caption white--text text-no-wrap ml-2">
                {{ item.newsPublishedDate | moment("YYYY. MM. DD dddd, h:mm:ss a") }} 
              </span>
            </v-card-title>        
            <v-list 
              three-line 
              class="pa-0">
              <router-link 
                :key="item.id" 
                :to="{ name: 'article-detail-id', params: { id: item.id}}"               
                tag="a">
                <v-list-tile
                  :key="item.id"
                  avatar            
                >
                  <v-list-tile-avatar 
                    tile 
                    size="70" >
                    <v-img 
                      :src="item.newsImageUrl ? item.newsImageUrl : require('../../assets/noImage.png')"
                      cover
                      aspect-ratio="1"
                      class="mr-3 mt-3"
                    />
                  </v-list-tile-avatar>
                  <v-list-tile-content class="pl-2">
                    <v-list-tile-title >
                      {{ item.title }}
                    </v-list-tile-title>
                    <v-list-tile-title class="text-no-wrap caption">
                      {{ item.titleTranslate }}
                    </v-list-tile-title >
                    <v-list-tile-sub-title />
                  </v-list-tile-content>
                </v-list-tile>
              </router-link>
            </v-list>
            <div class="pb-2">
              <p
                v-if="item.article" 
                class="furigana caption ml-2 mr-2 "             
                style="height:50px;overflow:hidden;text-align:left;"
                v-html="$options.filters.moreReadDot(item.article)"/>
              <p 
                v-if="item.translateText" 
                class="furigana caption ml-2 mr-3 font-italic"             
                style="height:50px;overflow:hidden;text-align:left;"
                v-html="$options.filters.moreReadDot(item.translateText) "/>
            </div>
            
          </v-card>
      
        </v-flex>
      </template>
    </v-layout>
  </div>  
</template>
<script>
export default {
  filters: {
    moreReadDot(value) {
      return value ? value + '...' : '...'
    }
  },
  props: {
    listTitle: { type: String, default: '' },
    articles: { type: Array, default: null }
  },
  watch: {},
  methods: {}
}
</script>
