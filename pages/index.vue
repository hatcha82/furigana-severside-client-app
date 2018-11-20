<template>
  <v-layout
    column
    justify-center
    align-center>
    <!-- <v-flex
      xs12 
      sm8 
      md6 
      lg4>
      <furigana-logo/>
    </v-flex> -->
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center">            
        J-pop<br>
        <music-list 
          ref="randomMusic" 
          :songs="randomSongs"/>
        일본 뉴스<br>
        <news-list 
          ref="recentNews" 
          :articles="recenstNews"/>          
      </div>      
    </v-flex>  
    <v-flex
      xs12
      sm8
      md6
      lg4>
      <div class="text-xs-center"/>      
    </v-flex>
      
  </v-layout>
</template>

<script>
import FuriganaLogo from '~/components/FuriganaLogo.vue'
import MusicList from '~/components/music/MusicList.vue'
import NewsList from '~/components/news/NewsList.vue'
export default {
  components: {
    FuriganaLogo,
    MusicList,
    NewsList
  },
  async mounted() {
    //this.$nextTick(async function() {
    // let { randomSongs, recenstNews } = (await this.$axios.get('/home', {
    //   progress: true
    // })).data
    // this.randomSongs = randomSongs
    // this.recenstNews = recenstNews
    //})
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
