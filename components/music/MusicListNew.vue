<template>
  <div>  
    <h2 class="primary--text">{{ listTitle }}</h2>
    
    <v-layout wrap>    
      <template v-for="(item) in songs" >
        <v-flex  
          :key="'music' + '_' + item.id"
          xs12
          sm6
          md4 
          lg3>
          <router-link 
            :to="{ name: 'music-detail-id', params: { id: item.id}}" 
            style="text-decoration:none"
            tag="a">
            <v-card 
              class="ma-2 pa-1" 
            >   
              <v-list class="pa-0 ma-0 primary">   
                <div 
                  :title="`${item.artist} - ${item.title}`" 
                  class="songCard" />
                <div 
                  :title="`${item.artist} - ${item.title}`" 
                  class="songDesc">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                  >
                    {{ item.header }}
                  </v-subheader>
                  <v-list-tile
                    v-else
                    :key="item.title"
                    avatar            
                  >
                    <v-list-tile-avatar>
                      <v-img
                        :lazy-src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"  
                        :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"/> 
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title                         
                        class="white--text"
                        v-html="item.title"/>
                      <v-list-tile-sub-title 
                        class="white--text"
                        v-html="item.artist"/>
                    </v-list-tile-content>
                  </v-list-tile>
                </div>    
              </v-list>
              <v-list class="ma-0 pa-1">
                <v-layout wrap>
                  <v-img        
                    :lazy-src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"  
                    :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                    class="white--text mt-3 songCardImage"     
                    height="150px"                              
                    contain
                    align-left
                  />
                  <p class="mt-3 caption text-truncate">
                    {{ item.lyrics }}
                  </p>
                  <p class="caption font-italic text-truncate">
                    {{ item.lyricsKor }}
                  </p>
                </v-layout>
                
              </v-list>
            </v-card>
          </router-link>
        </v-flex>
      </template>
    </v-layout>   
  </div>     
</template>
<script>
export default {
  props: {
    listTitle: { type: String, default: '' },
    songs: { type: Array, default: null }
  },
  watch: {},
  methods: {}
}
</script>
<style scope>
.songCard {
  bottom: 0px;
  width: 100%;
  cursor: pointer;
}
.songCard:hover {
}
.songDesc {
  width: 100%;
}
.songDesc:hover {
  cursor: pointer;
}

.songCardImage:hover {
  cursor: pointer;
  opacity: 0.9;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
