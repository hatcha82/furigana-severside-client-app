<template>
  <v-app>
    <Header/>
    <v-content>
    
      <nuxt />  
      <adFitimage728X90 
        class="hidden-sm-and-down"/>    
      <!-- <adFitimage320X100 
        class="hidden-sm-and-up"/>     -->
      <back-to-top>
        <v-btn 
          class="mb-5 mr-2"    
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
    <Footer 
      class="mt-5"/>
  </v-app>
</template>
<script>
import Header from '~/components/defualt/header/index.vue'
import Footer from '~/components/defualt/footer/index.vue'
import adFitimage728X90 from '~/components/adv/adfit/image728X90.vue'
import adFitimage320X100 from '~/components/adv/adfit/image320X100.vue'
export default {
  components: {
    Header,
    Footer,
    adFitimage728X90
  },
  data() {
    return {}
  }
}
</script>
