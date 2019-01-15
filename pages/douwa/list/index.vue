<template>
  <div class="white text-xs-center pa-1">   
    <div 
      class="pt-3 pl-3 pr-3 " 
      fixed>
      <v-text-field
        v-model="searchKeyword"
        fixed
        label="동화 검색"
        append-icon="search"
        placeholder="Search"
        hint="검색어: 일본어 제목, 번역 제목"
      />
      <!-- <no-ssr>
        <ad-component
          google-ad-slot-id="2920580186"
          adfit-desktop-unit="DAN-t4w6dr2ubfat"
          adfit-mobile-unit="DAN-1hbghscrx51kh"
        />
      </no-ssr>      -->
      <douwa-list 
        ref="douwaList"        
        :douwas="douwas"
        list-title="일본/세계 동화"/>
     
      <no-ssr>
        <infinite-loading @infinite="infiniteHandler"/>     
      </no-ssr>
    </div>
</div></template>
<script>
import AdComponent from '~/components/adv/AdComponent.vue'
import DouwaList from '~/components/douwa/DouwaList.vue'
import NewsList from '~/components/news/NewsList.vue'
import _ from 'lodash'
export default {
  components: {
    AdComponent,
    DouwaList
  },

  data() {
    return {
      searchKeyword: '',
      busy: false,
      count: 0,
      offset: 0
    }
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
          this.douwas = data
          this.offset = this.douwas.length
        } else {
          this.douwas = []
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
      var { data, count } = await app.$axios.$get('/douwas', {
        params: params
      })
      return {
        douwas: data,
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
      var { data, count } = (await this.$axios.get('/douwas', {
        params: params,
        progress: true
      })).data
      // var dataSet = (await SongsService.index(search, this.offset)).data
      return { data, count }
    },
    async infiniteHandler($state) {
      try {
        var { data, count } = await this.search()
        if (data.length) {
          $state.loaded()
          this.douwas.push(...data)
          this.offset = this.douwas.length
        } else {
          $state.complete()
        }
      } catch (error) {
        alert('infinit' + error)
      }
    }
  }
}
</script>
