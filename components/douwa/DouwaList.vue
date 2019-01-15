<template>
  <div>
    <h2 class="primary--text">{{ listTitle }}</h2>
    
    <v-layout wrap >
      <template v-for="(item) in douwas">
        <v-flex 
          :key="'news' + '_' + item.id"
          xs12
          sm6
          md4 
          lg3>
          <v-card 
            class="ma-2" 
          >  
            
            <v-card-title 
              class="accent" 
              style="height:80px;">
              <v-icon  
                left              
                dark
              >
                fas fa-book
              </v-icon>
              <router-link 
                :key="item.id" 
                :to="{ name: 'douwa-detail-id', params: { id: item.id}}"
                class="ml-2"
                style="text-decoration:none"               
                tag="a">
                <!-- <div
                  :title="item.articleType"
                  style="text-align:left;text-decoration:none"
                  class="ml-2 furigana subheading white--text text-left" 
                  v-html="item.articleType"/> -->
                {{ item.articleType | douwaType }}
                <!-- {{ item.episod }} -->
              </router-link>
              <!-- <span class="title font-weight-light pl-1">
                {{ item.articleType }}
              </span> -->
            </v-card-title>        
            <v-list 
              three-line 
              class="pa-2">
              <router-link 
                :key="item.id" 
                :to="{ name: 'douwa-detail-id', params: { id: item.id}}"               
                style="text-decoration:none"               
                tag="a">
                <v-list-tile
                  :key="item.id"
                  avatar            
                >
                  <v-list-tile-avatar 
                    tile 
                    size="70" >
                    <v-img 
                      :src="item.ImageUrl ? item.ImageUrl : require('../../assets/noImage.png')"
                      cover
                      aspect-ratio="1"
                      class="mr-4 mt-3"
                    />
                  </v-list-tile-avatar>
                  <v-list-tile-content class="pl-0 ">
                    <p 
                      class="furigana ml-2 mr-2"                       
                      v-html="item.titleFurigana"/>
                    <v-list-tile-sub-title />
                  </v-list-tile-content>
                </v-list-tile>
              </router-link>
            </v-list>
            <div class="pb-4">
              <p 
                class="furigana caption ml-2 mr-2"             
                style="height:50px;overflow:hidden;text-align:left;"
                v-html="item.articelOnlyText"/>
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
    // Filter definitions
    douwaType(value) {
      var type = value
      if (type == 'JPN01') {
        return '일본 동화'
      } else if (type == 'JPN02') {
        return '세계 동화'
      }
      return type
    }
  },
  props: {
    listTitle: { type: String, default: '' },
    douwas: { type: Array, default: null }
  },
  watch: {},
  methods: {}
}
</script>
<style scope>
.publishedDate {
  color: #aaa;
}
h1.furigana {
  font-size: 2em;
}
h2.furigana {
  color: #aaa;
}

.furigana rt {
  color: red;
  font-size: 0.6em;
}
</style>
