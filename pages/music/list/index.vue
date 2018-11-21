<template>
  <div>
    <music-list 
      ref="musicList" 
      :songs="songs"/>
    <infinite-loading @infinite="infiniteHandler"/>
  </div>
</template>
<script>
import MusicList from '~/components/music/MusicList.vue'

export default {
  components: {
    MusicList
  },
  data() {
    return {
      searchKeyword: '',
      songs: null,
      busy: false,
      count: 0,
      offset: 0
    }
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
        offset: data.length + 1
      }
    } catch (error) {
      return {}
    }
  },
  methods: {
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
          this.offset = this.songs.length + 1
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
