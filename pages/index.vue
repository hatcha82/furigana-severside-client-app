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
        <no-ssr>
          <div>
            <adfit-banner
              style="margin:0 auto;display:block"
              class="hidden-sm-and-down"
              data-ad-test="N"
              data-ad-unit="DAN-t4w6dr2ubfat"/>
            <adfit-banner
              style="margin:0 auto;display:block"
              class="display-sm-and-up hidden-md-and-up"
              data-ad-test="N"
              data-ad-unit="DAN-1hbghscrx51kh"/>
          </div>
        </no-ssr>
        <!-- <image-Ad
          ad-width="728"
          ad-height="90"
          ad-id="DAN-t4w6dr2ubfat"
          />    
        <image-Ad
        
          ad-width="320"
          ad-height="100"
          ad-id="DAN-1hbghscrx51kh"
          />  -->
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
import imageAd from '~/components/adv/adfit/imageAd.vue'

export default {
  components: {
    FuriganaLogo,
    MusicList,
    NewsList,
    imageAd
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
  },
  head() {
    return {
      title: `www.furiganahub.com`,
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: `web,furigana,japanese,j-pop,일본어,일본가사`
        },
        { vmid: 'og:type', property: 'og:type', content: 'article' },
        {
          vmid: 'og:title',
          property: 'og:title',
          content: `FuriganaHub`
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: `www.furiganahub.com`
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: pkg.description
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: 'http://www.furiganahub.com/logoBlue.jpg'
        },
        {
          vmid: 'og:site_name',
          property: 'og:site_name',
          content: 'FuriganaHub'
        },
        { vmid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        {
          vmid: 'twitter:title',
          name: 'twitter:title',
          content: `www.furiganahub.com`
        },
        {
          vmid: 'twitter:description',
          name: 'twitter:description',
          content: pkg.description
        },
        {
          vmid: 'twitter:image',
          name: 'twitter:image',
          content: 'http://www.furiganahub.com/logoBlue.jpg'
        },
        {
          vmid: 'twitter:creator',
          name: 'twitter:creator',
          content: `@_FURIGANA`
        }
      ]
    }
  }
}
</script>
