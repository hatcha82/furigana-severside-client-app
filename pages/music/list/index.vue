<template>
  <v-infinite-scroll 
    :loading="busy" 
    :offset="300" 
    style="max-height: 95vh; overflow-y: scroll;" 
    @top="prevPage" 
    @bottom="nextPage">
    <music-list 
      ref="musicList" 
      :songs="songs"/>
  </v-infinite-scroll>
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
        offset: data.length
      }
    } catch (error) {
      console.log(error)
      return {}
    }
  },
  methods: {
    prevPage() {
      if (this.page == 1) return
      --this.page
      //this.api()
    },
    nextPage() {
      ++this.page
      //this.api()
      this.loadMore()
    },
    api() {
      this.loading = true
      myApi.get({ page: this.page }).then(response => {
        this.items = response
        this.loading = false
      })
    },
    async loadMore() {
      this.busy = true
      try {
        if (!this.songs) {
          this.busy = false
          return
        }
        if (this.offset >= this.count) {
          this.busy = false
          return
        }
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
        this.songs = this.songs.concat(data)
        this.offset = this.songs.length

        //this.songs.push(data)
      } catch (error) {
        alert(error)
      }
      this.busy = false
    }
  }
}
</script>
