<template>
  <v-app>
    <Header/>
    <v-content class="pb-5">
    
      <nuxt />  
      <!-- <image-Ad
        ad-width="728"
        ad-height="90"
        ad-id="DAN-1hbghscrx51kh"
        class="hidden-sm-and-down"/>    
      <image-Ad
        ad-width="320"
        ad-height="100"
        ad-id="DAN-t4w6dr2ubfat"
        class="hidden-sm-and-up"/>     -->
      <back-to-top>
        <v-btn           
          style="margin-bottom:100px;"
          absolute
          bottom
          right
          fixed
          fab
          color="primary">
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </back-to-top>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>
import Header from '~/components/defualt/header/index.vue'
import Footer from '~/components/defualt/footer/index.vue'
import imageAd from '~/components/adv/adfit/imageAd.vue'

export default {
  components: {
    Header,
    Footer,
    imageAd
  },
  data() {
    return {}
  }
}
</script>
