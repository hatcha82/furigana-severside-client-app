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
              class="mx-auto ma-2"
              max-height="450"
              
            >
              <v-card-title 
                class="primary white--text pa-2" 
              >  
                <v-list-tile class="grow">
                  <v-list-tile-avatar color="grey darken-3">
                    
                    <v-img
                      :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                      class="elevation-6"
                    />
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-icon
                      small
                      dark
                      right
                    >
                      fas fa-music
                    </v-icon>
                    <v-list-tile-title>{{ item.artist }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-layout
                    align-center
                    justify-end
                  >
                    <!-- <v-icon class="mr-1">mdi-heart</v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <span class="subheading">45</span> -->
                  </v-layout>
                </v-list-tile>
              
              </v-card-title>
            
              <v-card-text 
                :title="item.title" 
                class="title primary--text text-truncate text-center">{{ item.title }}</v-card-text >
              <v-img        
                :lazy-src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"  
                :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                class="white--text mt-3 songCardImage ml-2 mr-2"     
                height="150px"                              
                conver
                align-left>
                <img
                  :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                  class="elevation-6 ma-4"
                  width="100px"
                  
                  
                >
              </v-img>
              <v-card-actions/>
              <v-card-text 
                v-if= "item.lyrics"
                :title="item.lyrics" 
                class="caption text-truncate">
                {{ item.lyrics }}
              </v-card-text>
              <v-card-text 
                v-if= "item.lyricsKor"
                :title="item.lyricsKor" 
                class="caption  text-truncate">
                {{ item.lyricsKor }}
              </v-card-text>
              
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
