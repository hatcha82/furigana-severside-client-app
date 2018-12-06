<template>
  <div>
    <v-bottom-nav
      :value="true"
      fixed
    >
      <v-btn
        v-for="(item, i) in items"
        :to="{ name: item.linkTo, params: { id: item.id}}" 
        :key="i"
        router
        exact
        color="primary"
        flat
        value="recent"
      >
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
     
     
    </v-bottom-nav>    
  </div>
  <!-- <v-footer
    dark
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        primary
        lighten-1
        py-2
        text-xs-center
        white--text
        xs12
      >
        <div style="float:right;margin-right:10px"> &copy;{{ copyrightDate }}&nbsp;   <img 
          style="height:15px;margin-top:0px" 
          src="~/assets/logoWhiteWide.svg"> &nbsp; hatcha82@gmail.com </div>
      </v-flex>
    </v-layout>
    
  </v-footer> -->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: [
        // { icon: 'trending_up', text: 'Most Popular' },
        // { icon: 'subscriptions', text: 'Subscriptions' },
        {
          icon: 'fas fa-home',
          text: 'Home',
          linkTo: 'index',
          params: {}
        },
        {
          icon: 'fas fa-music',
          text: 'Music',
          linkTo: 'music-list',
          params: {}
        },
        {
          icon: 'far fa-newspaper',
          text: 'News',
          linkTo: 'article-list',
          params: {}
        }
        // {
        //   icon: 'fab fa-twitter',
        //   text: 'Twitter',
        //   linkTo: 'twitter-list',
        //   params: {}
        // },
        // // { icon: 'fab fa-twitter', text: 'Twitter User List', linkTo: 'twitter-userList' , params:{}},
        // {
        //   icon: 'translate',
        //   text: 'Kanji',
        //   linkTo: 'twitter-list-search',
        //   params: { search: '_FURIGANA' }
        // }
        // { icon: 'history', text: 'History', linkTo: 'history' },
        // { icon: 'featured_play_list', text: 'Playlists' },
        // { icon: 'watch_later', text: 'Watch Later' }
      ],
      copyrightDate: new Date().getFullYear()
    }
  }
}
</script>
