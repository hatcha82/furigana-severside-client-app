<template>
  <div>  
    <v-layout  
      wrap>     
      <template v-for="(item) in songs" >
        <v-flex  
          :key="'music' + '_' + item.id"
          xs6
          sm6
          md4 
          lg3>
          <v-card flat>          
            <v-list class="pa-1 mb-1">
              <router-link 
                :to="{ name: 'music-detail-id', params: { id: item.id}}" 
                tag="div">
                <v-img        
                  :lazy-src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"  
                  :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                  class="white--text ma-0 songCardImage"     
                  height="200px"             
                  conver
                >
                  <div class="songCard">
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
                </v-img>
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
    songs: { type: Array, default: null }
  },
  watch: {},
  methods: {}
}
</script>
<style scope>
.songCard {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: black;
  opacity: 0.7;
  cursor: pointer;
}
.songCard:hover {
  opacity: 0.9;
}

.songCardImage:hover {
  cursor: pointer;
  opacity: 0.8;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
