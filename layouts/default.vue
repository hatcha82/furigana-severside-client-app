<template>
  <v-app>
    <Header/>
    <v-content>
      <nuxt />
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

    <Footer/>
    
  </v-app>
</template>
<script>
import Header from '~/components/defualt/header/index.vue'
import Footer from '~/components/defualt/footer/index.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>
