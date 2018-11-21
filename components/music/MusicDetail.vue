<template>
  <div>
    <v-card 
      height="300px" 
      flat 
      class="pa-2">
      <v-img        
        :src="song.albumImageUrl ? song.albumImageUrl : require('../../assets/noImage.png')"
        :aspect-ratio="6/4"
        class="white--text" 
        conver    
      >
        <v-layout 
          fill-width 
          class="songMeta">
          <v-flex 
            v-if="(!edit)" 
            style="padding:5px 10px">
            <div>
              <span class="display-1 font-weight-bold">{{ song.title }}</span><br>
              <span >Aritst : {{ song.artist }}</span><br>
              <span >Album : {{ song.album }}</span><br>
              <span >Genre : {{ song.genre }}  </span><br>                              
              <br>
              <a 
                v-if="!song.albumImageUrl" 
                :href="('https://www.google.co.kr/search?q='+ song.title + ' ' + song.artist)" 
                target="_blank">{{ song.title }} {{ song.artist }}<br></a>                
            </div>
          
            
            <img        
              :src="song.albumImageUrl ? song.albumImageUrl : require('../../assets/noImage.png')"
              class="white--text;"
              height="30%"     
              style="position:absolute;right:10px;bottom:10px"                                            
            > 
          </v-flex>
          <v-flex 
            align-start 
            flexbox>
            <preview-music 
              v-if="ituneInfo && ituneInfo.data && ituneInfo.data.results && ituneInfo.data.results.length > 0" 
              ref="previewMusic" 
              :file="ituneInfo.data.results[0].previewUrl" 
              style="min-width:150px;background:none;color:#eee" />
            <span 
              style="position:absolute;bottom:0px;left:10px;opacity:0.3;font-size:9px" 
              class="white--text">Image 출처: {{ song.albumImageUrl }}</span>
            
          </v-flex>
        </v-layout>
      </v-img>
    </v-card> 
  </div>
</template>
<script>
import PreviewMusic from '~/components/music/PreviewMusic.vue'
export default {
  components: {
    PreviewMusic
  },
  props: {
    song: { type: Object, default: null },
    ituneInfo: { type: Object, default: null }
  }
}
</script>
<style>
.songMeta {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
}
</style>
