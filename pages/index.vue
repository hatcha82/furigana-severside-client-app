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
      <div>            
        <music-list 
          ref="randomMusic" 
          :songs="randomSongs"
          class="pa-3" 
          list-title="추천 J-pop"/>
        
        <news-list 
          ref="recentNews"
          :articles="recenstNews" 
          class="pa-3" 
          list-title="최신 뉴스"/>          
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
