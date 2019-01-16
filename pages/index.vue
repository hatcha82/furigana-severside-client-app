<template>
  <div class="">
    <no-ssr>
      <ad-component
        google-ad-slot-id="7322450504"
        adfit-desktop-unit="DAN-1h7zrmefbegc0"
        adfit-mobile-unit="DAN-1h84t5wt7s2ue"
        layout-type="wrap"
      />
    </no-ssr>
    <v-card class="white">
      <v-parallax 
        :src="require(`../assets/bg/bg00${Math.floor(Math.random() * 8) +1 }.jpg`)" 
        height ="250">
        <FuriganaLogoIndexPage class="pt-5"/>
      </v-parallax>
    </v-card>
    <v-card 
      class="white" 
      flat> 
      <v-card-text class="text-xs-center">
        <v-icon 
          x-large 
          class="blue--text text--lighten-2">fas fa-music</v-icon>
      </v-card-text>
      <v-card-text class="text-xs-center">
        80년도에서 최신 J-pop 7000여곡의 노래를 후리가나를 읽으면서 일본어를 배울 수있습니다. 후리가나, 원곡가사, 번역 그리고 관련 유튜브 동영상을 보면서 노래와 일본어 읽기를 시작하세요.
      </v-card-text>  
      <music-list 
        ref="randomMusic"
        :songs="randomSongs" 
        class="pa-3" 
        list-title="추천 J-pop"/> 
      
      <router-link 
        to="/music/list" 
        class="pa-3"
      >
        <div class="pr-3 pl-3">
          <v-btn 
            block 
            color="primary" 
            dark>J-Pop List
          </v-btn>
      </div></router-link>
    </v-card>
    <no-ssr>
      <ad-component
        google-ad-slot-id="2920580186"
        adfit-desktop-unit="DAN-t4w6dr2ubfat"
        adfit-mobile-unit="DAN-1hbghscrx51kh"
      />
    </no-ssr>        
    <v-card 
      class="white" 
      flat>
      <v-card-text class="text-xs-center">
        <v-icon 
          x-large 
          class="blue--text text--lighten-2">far fa-newspaper</v-icon>
      </v-card-text>
      <v-card-text class="text-xs-center">
        매일 1시간에 한번씩 업데이트 되는 일본의 4대 메인 뉴스인 일본 TV(NNN), 아사히(ANN), TBS(JNN), 후지 TV(FNN)의 기사를 후리가나와 함께 읽을 수 있습니다. 
      </v-card-text>
      <news-list 
        ref="recentNews"
        :articles="recenstNews" 
        class="pa-3 pb-0 mb-0" 
        list-title="최신 뉴스"/>  
     
      <div class="text-xs-center pb-2">
        <img 
          class="newsIcon" 
          src="https://s.yimg.jp/images/news/cobranding/nnn.png">
        <img 
          class="newsIcon" 
          src="https://s.yimg.jp/images/news/cobranding/ann.png">
        <img 
          class="newsIcon" 
          src="https://s.yimg.jp/images/news/cobranding/jnn.png">
        <img 
          class="newsIcon" 
          src="https://s.yimg.jp/images/news/cobranding/fnn.png">
      </div>
      <div class="white text-xs-center pa-1">      
        <no-ssr>
          <ad-component
            google-ad-slot-id="5563055391"
            adfit-desktop-unit="DAN-u7u2dizil640" 
            adfit-mobile-unit="DAN-vbk8dw9dcxfd"  
            layout-type="wrap"    
          />
        </no-ssr>
      </div>
      <router-link 
        to="/article/list" 
        class="pa-3"
      >
        <div class="pr-3 pl-3">
          <v-btn 
            block 
            color="primary" 
            dark>NEWS List
          </v-btn>
      </div></router-link>
    </v-card>
  </div>
</template>

<script>
import AdComponent from '~/components/adv/AdComponent.vue'
import FuriganaLogoIndexPage from '~/components/FuriganaLogoIndexPage.vue'
import MusicList from '~/components/music/MusicList.vue'
import NewsList from '~/components/news/NewsList.vue'
import imageAd from '~/components/adv/adfit/imageAd.vue'

export default {
  components: {
    FuriganaLogoIndexPage,
    AdComponent,
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
          content: 'FuriganaHub는 일본어를 후리가나와 함께 표현합니다'
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
          content: 'FuriganaHub는 일본어를 후리가나와 함께 표현합니다'
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
<style scope>
.moreInfo {
  display: block;
  text-align: center;
  font-weight: bold;
}
.newsIcon {
  width: 80px;
}
</style>
