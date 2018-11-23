<template>
  <div>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      fixed
      app      
    >
      <v-list dense>
        <v-list-tile
          v-for="(item, i) in items"
          :to="{ name: item.linkTo, params: { id: item.id}}" 
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>            
            <v-list-tile-title v-text="item.text" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar      
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
      app
      dark
      class="primary"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click="back()"
      >
        <v-icon v-html="'chevron_left'" />
      </v-btn> 
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      <nuxt-link to="/">
        <img 
          src="~/assets/logoBlue.jpg" 
          height="50px" 
          style="margin-top:4px;border-radius:25px;cursor:pointer">
      </nuxt-link>
      <nuxt-link 
        to="/" 
        tag="div" 
        style="cursor:pointer">
        <v-toolbar-title v-text="title"/>
      </nuxt-link>
      <v-spacer/>
      <!--       
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
       
      
    </v-toolbar>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>    
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        // { icon: 'trending_up', text: 'Most Popular' },
        // { icon: 'subscriptions', text: 'Subscriptions' },
        {
          icon: 'fas fa-music',
          text: 'Music',
          linkTo: 'music-list',
          params: {}
        },
        {
          icon: 'far fa-newspaper',
          text: 'News',
          linkTo: 'news-list',
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FuriganaHub'
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
