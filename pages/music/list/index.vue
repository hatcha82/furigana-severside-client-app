<template>
  <div>
    <v-text-field
      v-model="searchKeyword"
      fixed
      label="음악 검색"
      append-icon="search"
      placeholder="Search"
      hint="검색어: 제목, 아티스트"
    />
    <music-list 
      ref="musicList" 
      :songs="songs"
    />
    <infinite-loading @infinite="infiniteHandler"/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import MusicList from '~/components/music/MusicList.vue'
import _ from 'lodash'
export default {
  components: {
    MusicList
  },
  data() {
    return {
      searchKeyword: '',
      songs: [],
      busy: false,
      count: 0,
      offset: 0
    }
  },
  computed: {
    // songs() {
    //   return this.$store.state.songs.list
    // }
  },
  watch: {
    searchKeyword: _.debounce(async function() {
      var search = null
      if (this.searchKeyword === '') {
        search = null
        this.offset = 0
      } else {
        search = this.searchKeyword
        this.offset = 0
      }

      try {
        var { data, count } = await this.search()
        if (data.length > 0) {
          this.songs = data
          this.offset = this.songs.length
        } else {
          this.songs = []
        }
      } catch (error) {
        alert(error)
      }
    }, 700)
  },
  async asyncData({ app, params, error }) {
    try {
      params.search = null
      params.offset = 0
      var { data, count } = await app.$axios.$get('/songs', {
        params: params
      })
      return {
        songs: data,
        count: count,
        offset: data.length
      }
    } catch (error) {
      return {}
    }
  },
  methods: {
    async search() {
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
      return { data, count }
    },
    async infiniteHandler($state) {
      try {
        var { data, count } = await this.search()
        if (data.length > 0) {
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
