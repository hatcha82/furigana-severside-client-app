import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loade
import InfiniteScroll from 'v-infinite-scroll'
Vue.use(InfiniteScroll)
/// import infiniteScroll from 'vue-infinite-scroll'
// import BackToTop from 'vue-backtotop'
// import moment from 'vue-moment'
// import underscore from 'vue-underscore'
// Vue.use(moment)
// Vue.use(underscore)
// Vue.use(BackToTop)
// Vue.use(infiniteScroll)
Vue.use(Vuetify, {
  //   theme:{
  //     primary: "#FF9800",
  //     secondary: "#FFB74D",
  //     accent: "#F57C00",
  //     error: "#f44336",
  //     warning: "#ffeb3b",
  //     info: "#2196f3",
  //     success: "#4caf50"
  //   }
  // theme: {
  //   primary: '#121212', // a color that is not in the material colors palette
  //   accent: colors.grey.darken3,
  //   secondary: colors.amber.darken3,
  //   info: colors.teal.lighten1,
  //   warning: colors.amber.base,
  //   error: colors.deepOrange.accent4,
  //   success: colors.green.accent3
  // },
  iconfont: 'fa'
})
