<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <furigana-logo/>
    </v-flex>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">            
        <music-list ref="randomMusic" :songs="randomMusicList1"/>
      </div>      
    </v-flex>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">    
         <music-list ref="randomMusic2" :songs="randomMusicList2"/>
      </div>      
    </v-flex>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">    
         <music-list ref="randomMusic3" :songs="randomMusicList3"/>
      </div>      
    </v-flex>
  </v-layout>
</template>

<script>
import FuriganaLogo from '~/components/FuriganaLogo.vue'
import MusicList from '~/components/music/MusicList.vue'
export default {
  components: {    
    FuriganaLogo,
    MusicList
  },
  async asyncData({ app }) {    
      let randomMusicList1 = (await app.$axios.$get('/songs/randomeSong', { progress: true })).data
      let randomMusicList2 = (await app.$axios.$get('/songs/randomeSong', { progress: true })).data
      let randomMusicList3 = (await app.$axios.$get('/songs/randomeSong', { progress: true })).data
    
    return { 
      randomMusicList1,
      randomMusicList2, 
      randomMusicList3,
    }
  }
}
</script>
