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
        <music-list 
          ref="randomMusic" 
          :songs="randomSongs"/>
      </div>      
    </v-flex>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">    
        <music-list 
          ref="randomMusic2" 
          :songs="randomSongs"/>
      </div>      
    </v-flex>
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">    
        <music-list 
          ref="randomMusic3" 
          :songs="randomSongs"/>
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
    let { randomSongs, recenstNews } = await app.$axios.$get('/home', {
      progress: true
    })

    return {
      randomSongs,
      recenstNews
    }
  }
}
</script>
