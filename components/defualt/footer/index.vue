<template>
  <v-footer
    dark
    fixed
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
    
  </v-footer>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      copyrightDate: new Date().getFullYear()
    }
  }
}
</script>
