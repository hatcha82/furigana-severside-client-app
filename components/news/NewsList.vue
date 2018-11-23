<template>
  <div>
    <h2 class="primary--text">{{ listTitle }}</h2>
    <div style="display:none">
      <template v-for="(item) in articles" >
        <a 
          :key="'new_a_' + '_' + item.id"
          :href="`/article/detail/${item.id}`">{{ item.title }} - {{ item.titleTranslate }} <br></a>
      </template>
    </div>
    <v-layout wrap >
      <template v-for="(item) in articles">
        <v-flex 
          :key="'news' + '_' + item.id"
          xs12
          sm12
          md6 
          lg4>
          <v-card 
            flat 
            class="ml-1 mr-1 mb-1">          
            <v-list 
              three-line 
              class="pa-0">
              <router-link 
                :key="item.id" 
                :to="{ name: 'article-detail-id', params: { id: item.id}}"               
                tag="div">
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
                    <v-list-tile-sub-title >
                      <img 
                        :lazy-src="item.newsPubllisherImageUrl ? item.newsPubllisherImageUrl : require('../../assets/noImage.png')"
                        :src="item.newsPubllisherImageUrl ? item.newsPubllisherImageUrl : require('../../assets/noImage.png')"
                        style="postion:absolute;width:30px;margin-left:2px" 
                      >
                      <span class="caption text-no-wrap">
                        {{ item.newsPublishedDate | moment("YYYY. MM. DD dddd, h:mm:ss a") }} 
                      </span>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </router-link>
            </v-list>
          </v-card>
      
        </v-flex>
      </template>
    </v-layout>
  </div>  
</template>
<script>
export default {
  props: {
    listTitle: { type: String, default: '' },
    articles: { type: Array, default: null }
  },
  watch: {},
  methods: {}
}
</script>
