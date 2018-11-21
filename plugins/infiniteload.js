import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading' // Document : https://peachscript.github.io/vue-infinite-loading/
import BackToTop from 'vue-backtotop'

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'circles'
    /* other props need to configure */
  },
  system: {
    throttleLimit: 50
    /* other settings need to configure */
  },
  slots: {
    noResults: '결과가 없습니다.',
    noMore: '마지막 입니다.' // you can pass a string value
  }
})

Vue.use(BackToTop)
