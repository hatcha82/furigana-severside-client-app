<template>
  <v-app>
    <Header/>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>

import Header from "~/components/defualt/header/index.vue"
import Footer from "~/components/defualt/footer/index.vue"

  export default {
    components:{
      Header,
      Footer
    },
    data() {
      return {
        
      }
    }
  }
</script>
