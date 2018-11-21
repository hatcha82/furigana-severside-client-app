<template>
  <div>
    <v-layout 
      wrap 
    >
      <v-flex 
        xs12
        sm6
        md6 
        lg6 >
        <music-detail 
          :song="song" 
          :itune-info="ituneInfo"/>
      </v-flex>
      <v-flex 
        xs12
        sm6
        md6 
        lg6 >
        <youtube-player 
          :song="
          song"/>
      </v-flex>
      
      <no-ssr placeholder="Loading...">
        <v-flex 
          class="pa-2" 
          xs12
          sm6
          md6 
          lg6> 
          <music-furigana :song="song"/>
        </v-flex>
        <v-flex 
          xs12
          sm6
          md6
          lg6
        >
          <v-container>
            Artist Song<br>
            <music-sm-list 
              v-if="artistSongs.length > 0"
              ref="artistSong" 
              :songs="artistSongs"/>
            Random Song
            <music-sm-list 
              v-if="randomSongs.length > 0"
              ref="randomSong" 
              :songs="randomSongs"/>
          </v-container>
        </v-flex>
        <v-flex 
         
          xs12
          sm6
          md6
          lg6>
          <br>
      
     
        </v-flex>  
      </no-ssr>    
    </v-layout>
    
  </div>
</template>
<script>
import MusicDetail from '~/components/music/MusicDetail.vue'

import YoutubePlayer from '~/components/music/YoutubePlayer.vue'
import MusicFurigana from '~/components/music/MusicFurigana.vue'
import MusicSmList from '~/components/music/MusicSmList.vue'
export default {
  components: {
    MusicDetail,
    YoutubePlayer,
    MusicFurigana,
    MusicSmList
  },
  data() {
    return {
      ituneInfo: null,
      deleteDialog: false,
      song: null,
      artistSongs: [],
      randomSongs: [],
      images: null,
      edit: false,

      activeTab: 0
      // imgNotFound: require("../../assets/noImage.png")
    }
  },
  async asyncData({ app, params, error }) {
    try {
      var song = await app.$axios.$get(`/song/${params.id}`)
      params.artist = song.artist
      // var artistSong = await app.$axios.$get(`/songs/songByArtist`, {
      //   query: params,
      //   params: params
      // })
      // var randomSong = await app.$axios.$get(`/songs/randomSong`, {
      //   query: params,
      //   params: params
      // })
    } catch (err) {
      error({ statusCode: 404, message: err })
    }
    return {
      id: params.id,
      song: song
      // artistSong: artistSong,
      // randomSong: randomSong.data
    }
    // let { randomSongs, recenstNews } = await app.$axios.$get('/home', {
    //   progress: true
    // })

    // return {
    //   randomSongs,
    //   recenstNews
    // }
  },
  async mounted() {
    var params = {
      artist: this.song.artist,
      keyword: `${this.song.artist} ${this.song.title}`
    }
    this.ituneInfo = await this.$axios.get(`/songs/iTunesSearch`, {
      query: params,
      params: params
    })
    params.keyword = `${this.song.artist} ${this.song.title}`
    params.offset = 1

    var artistSongs = await this.$axios.get(`/songs/songByArtist`, {
      query: params,
      params: params
    })
    this.artistSongs = artistSongs.data
    var randomSongs = (await this.$axios.get(`/songs/randomSong`, {
      query: params,
      params: params
    })).data
    this.randomSongs = randomSongs.data
  },
  method: {
    async search() {
      const songId = this.$route.params.songId
      this.song = (await SongsService.show(songId)).data
      this.artistSongs = (await SongsService.songByArtist(
        this.song.artist,
        10,
        0
      )).data

      try {
        this.ituneInfo = await SongsService.searchItune(
          `${this.song.artist} ${this.song.title}`,
          1
        )
      } catch (error) {
        this.ituneInfo = null
      }

      this.images = (await SongsService.searchImage(
        `${this.song.artist} ${this.song.title}`
      )).data
      if (this.isUserLoggedIn) {
        // SongHistoryService.post({
        //   songId: songId
        // })
      }
    }
  }
}
</script>
