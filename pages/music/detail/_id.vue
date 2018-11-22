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
      <no-ssr placeholder="Loading...">
        <v-flex 
          xs12
          sm6
          md6 
          lg6 >
          <youtube-player 
            :song="
            song"/>
        </v-flex>
      </no-ssr>
      <no-ssr placeholder="Loading...">
        <v-flex 
          class="pa-2" 
          xs12
          sm12
          md6 
          lg6> 
          <music-furigana :song="song"/>
        </v-flex>
      </no-ssr> 
      <no-ssr placeholder="Loading...">   
        <v-flex 
          xs12
          sm12
          md6
          lg6
        >
          <v-container class="white">
            <music-sm-list 
              v-if="artistSongs.length > 0"
              ref="artistSong" 
              :songs="artistSongs"
              :list-title="song.artist + ' 다른 음악' "/>
            <music-sm-list 
              v-if="randomSongs.length > 0"
              ref="randomSong" 
              :songs="randomSongs"
              list-title="오늘의 추천 음악"/>
          </v-container>
        </v-flex>
      </no-ssr>
      
    </v-layout>
    <no-ssr placeholder="Loading...">   
      <v-container class="white">  
        <music-sm-list 
          :songs="songs"
          list-title="전체 음악"/>
      </v-container>
    </no-ssr>
    <infinite-loading @infinite="infiniteHandler"/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import MusicDetail from '~/components/music/MusicDetail.vue'
import YoutubePlayer from '~/components/music/YoutubePlayer.vue'
import MusicFurigana from '~/components/music/MusicFurigana.vue'
import MusicSmList from '~/components/music/MusicSmList.vue'
import MusicList from '~/components/music/MusicList.vue'
export default {
  components: {
    MusicDetail,
    YoutubePlayer,
    MusicFurigana,
    MusicSmList,
    MusicList
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
      activeTab: 0,
      searchKeyword: '',
      songs: [],
      busy: false,
      count: 0,
      offset: 0
      // imgNotFound: require("../../assets/noImage.png")
    }
  },
  async asyncData({ app, params, error }) {
    try {
      var song = await app.$axios.$get(`/song/${params.id}`)
      params.artist = song.artist
    } catch (err) {
      error({ statusCode: 404, message: err })
    }
    return {
      id: params.id,
      song: song
    }
  },
  async mounted() {
    try {
      this.search()
    } catch (err) {
      error(err)
    }
  },
  methods: {
    async search() {
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
    async infiniteHandler($state) {
      try {
        var search
        if (this.searchKeyword === '') {
          search = null
        } else {
          search = this.searchKeyword
        }
        var params = {
          search: search,
          offset: this.offset
        }
        var { data, count } = (await this.$axios.get('/songs', {
          params: params,
          progress: true
        })).data
        // var dataSet = (await SongsService.index(search, this.offset)).data
        var data = data
        if (data.length) {
          $state.loaded()
          this.songs.push(...data)
          this.offset = this.songs.length
        } else {
          $state.complete()
        }
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
