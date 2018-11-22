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
          lg2>
          <v-card flat>          
            <v-list class="pa-1 mb-1">
              <router-link 
                :to="{ name: 'music-detail-id', params: { id: item.id}}" 
                tag="div">
                <v-img        
                  :lazy-src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"  
                  :src="item.albumImageUrl ? item.albumImageUrl : require('~/assets/noImage.png')"
                  class="white--text ma-0 songCardImage"     
                  height="300px"             
                  conver
                >
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
    listTitle: { type: String, default: '' },
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
  cursor: pointer;
}
.songCard:hover {
}
.songDesc {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.songDesc:hover {
  background: black;
  opacity: 0.9;
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
